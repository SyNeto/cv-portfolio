import React from 'react';
import {
  useActiveSection,
  useSmoothScroll,
  usePortfolioData,
} from '../../hooks';
import { portfolioConfig } from '../../config/portfolio';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { navigation, personal, getAllSectionIds } = usePortfolioData();
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
      className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100 ${className}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded px-2 py-1"
              aria-label="Go to top of page"
            >
              {personal.name}
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile, shows on lg+ */}
          <nav
            className="hidden lg:flex space-x-8"
            aria-label="Main navigation"
          >
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded px-2 py-1 ${
                  activeSection === id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                aria-current={activeSection === id ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </a>
            ))}
            <a
              href={portfolioConfig.social.email.url}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded px-2 py-1"
              aria-label="Send email"
            >
              ernesto@ernjv.me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
