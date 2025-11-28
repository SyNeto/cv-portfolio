import React from 'react';
import {
  useActiveSection,
  useSmoothScroll,
  usePortfolioData,
} from '../../hooks';
import { SocialLinks } from '../ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const { navigation, getAllSectionIds } = usePortfolioData();
  const activeSection = useActiveSection(getAllSectionIds());
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Desktop Sidebar - Right positioned, hidden on mobile/tablet */}
      <aside
        className={`fixed top-1/2 right-8 -translate-y-1/2 z-30 hidden xl:block ${className}`}
        role="complementary"
        aria-label="Secondary navigation and social links"
      >
        <nav
          className="flex flex-col space-y-6 items-center"
          aria-label="Page sections"
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 items-center">
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-sm font-medium transition-all duration-200 py-1.5 px-3 block text-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-full ${
                  activeSection === id
                    ? 'text-accent bg-accent/10 font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-hover'
                }`}
                aria-current={activeSection === id ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-6 h-px bg-border"></div>

          {/* Social Links */}
          <SocialLinks direction="vertical" iconSize="sm" />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
