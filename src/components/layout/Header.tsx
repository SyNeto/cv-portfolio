import React from 'react';
import {
  useActiveSection,
  useSmoothScroll,
  usePortfolioData,
} from '../../hooks';
import { portfolioConfig } from '../../config/portfolio';
import { SocialLinks, ThemeToggle } from '../ui';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
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
    <header
      className={`fixed top-0 left-0 w-full bg-surface-elevated backdrop-blur-md z-40 border-b border-border transition-colors duration-200 ${className}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile: Social Links */}
          <div className="lg:hidden">
            <SocialLinks direction="horizontal" iconSize="sm" />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex space-x-8 ml-auto"
            aria-label="Main navigation"
          >
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1 ${
                  activeSection === id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-current={activeSection === id ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </a>
            ))}
            <a
              href={portfolioConfig.social.email.url}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
              aria-label="Send email"
            >
              ernesto@ernjv.me
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
