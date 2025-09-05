import React from 'react';
import { Heading, Text } from '../ui';
import { useSmoothScroll, usePortfolioData } from '../../hooks';

export const HeroSection: React.FC = () => {
  const { personal, getNavigationSectionIds } = usePortfolioData();
  const { scrollToSection } = useSmoothScroll();

  const handleScrollToNext = () => {
    const firstSection = getNavigationSectionIds()[0];
    if (firstSection) {
      scrollToSection(firstSection);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-8 relative"
    >
      <div className="w-full">
        <div className="mb-6">
          <Text variant="small" color="muted" className="mb-2">
            {personal.greeting}
          </Text>
          <Heading as="h1" size="xl" className="mb-4">
            {personal.name}
          </Heading>
          <Heading as="h2" size="lg" className="text-gray-600 mb-6">
            {personal.title}
          </Heading>
        </div>

        <div className="max-w-2xl">
          <Text variant="lead">{personal.description}</Text>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-16 sm:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollToNext}
          className="p-3 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded-full"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
