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
        <nav className="flex flex-col space-y-6" aria-label="Page sections">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navigation.map(({ id, label }) => (
              <div key={id} className="relative">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`text-sm font-medium transition-all duration-200 py-2 block text-right focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded px-2 ${
                    activeSection === id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-current={activeSection === id ? 'page' : undefined}
                  aria-label={`Navigate to ${label} section`}
                >
                  {label}
                </a>
                {/* Active indicator */}
                {activeSection === id && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full -mr-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-6 h-px bg-gray-300 mx-auto"></div>

          {/* Social Links */}
          <SocialLinks direction="vertical" iconSize="sm" />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
