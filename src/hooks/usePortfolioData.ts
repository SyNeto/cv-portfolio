import { portfolioConfig, portfolioHelpers } from '../config/portfolio';

/**
 * Custom hook for accessing portfolio data
 * Acts as an abstraction layer between components and data source
 * Future: Can be enhanced to fetch from CMS/API seamlessly
 */
export const usePortfolioData = () => {
  // For now, return static config data
  // Future: This could become async and fetch from API/CMS

  return {
    // Personal information
    personal: portfolioConfig.personal,

    // Navigation data
    navigation: portfolioConfig.navigation,

    // Social media links
    social: portfolioConfig.social,

    // Section content
    about: portfolioConfig.about,
    experiences: portfolioConfig.experiences,
    footer: portfolioConfig.footer,

    // Derived/computed data
    getAllSectionIds: portfolioHelpers.getAllSectionIds,
    getNavigationSectionIds: portfolioHelpers.getNavigationSectionIds,
    getSocialLinksArray: portfolioHelpers.getSocialLinksArray,

    // Utility methods
    getSocialLink: (platform: keyof typeof portfolioConfig.social) => {
      return portfolioConfig.social[platform];
    },

    getExperienceById: (id: string) => {
      return portfolioConfig.experiences.find((exp) => exp.id === id);
    },
  };
};

export default usePortfolioData;
