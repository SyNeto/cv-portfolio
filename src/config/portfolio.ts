import type { Experience } from '../types';

// Centralized portfolio configuration - Single source of truth
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Ernesto Jiménez Villaseñor',
    title: 'I build things for the web',
    greeting: 'Hi, my name is',
    description:
      "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products with modern technologies.",
  },

  // Navigation Configuration
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
  ] as const,

  // Social Media Links
  social: {
    github: {
      url: 'https://github.com/syneto',
      label: 'GitHub',
    },
    linkedin: {
      url: 'https://linkedin.com/in/ernesto-jimenez',
      label: 'LinkedIn',
    },
    email: {
      url: 'mailto:ernesto@example.com',
      label: 'Email',
    },
  },

  // About Section Data
  about: {
    description: [
      "Hello! I'm Ernesto, a software engineer passionate about creating digital experiences that make a difference. My journey in software development started several years ago, and I've been fortunate to work on a variety of interesting projects.",
      "I enjoy working across the full stack, from crafting intuitive user interfaces to designing robust backend systems. I'm always eager to learn new technologies and tackle challenging problems.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading about the latest developments in tech.",
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Kubernetes',
      'Git',
      'Linux',
    ],
  },

  // Experience Data
  experiences: [
    {
      id: 'experience-3',
      dateRange: '2023 — Present',
      company: 'TechScale Solutions',
      role: 'Senior Product Tech Lead',
      location: 'Remote',
      companyUrl: 'https://techscale.com',
      description:
        'Leading cross-functional product development teams to deliver high-impact features for enterprise SaaS platform serving 50K+ users.',
      highlights: [
        'Architected microservices migration reducing system latency by 40%',
        'Led team of 8 engineers across frontend, backend, and DevOps',
        'Implemented data-driven product decisions increasing user retention by 25%',
        'Established CI/CD pipeline reducing deployment time from hours to minutes',
      ],
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'PostgreSQL',
        'AWS',
        'Docker',
        'Kubernetes',
        'GraphQL',
      ],
    },
    {
      id: 'experience-2',
      dateRange: '2021 — 2023',
      company: 'StartupVenture Inc',
      role: 'Full Stack Developer',
      location: 'San Francisco, CA',
      companyUrl: 'https://startupventure.com',
      description:
        'Built and scaled early-stage fintech platform from MVP to Series A, handling everything from user authentication to payment processing.',
      highlights: [
        'Developed real-time trading dashboard processing 10K+ transactions daily',
        'Implemented secure payment gateway with PCI DSS compliance',
        'Built responsive web application supporting mobile-first user base',
        'Optimized database queries improving application performance by 60%',
      ],
      technologies: [
        'JavaScript',
        'Vue.js',
        'Python',
        'Django',
        'Redis',
        'MongoDB',
        'Stripe API',
        'AWS Lambda',
      ],
    },
    {
      id: 'experience-1',
      dateRange: '2019 — 2021',
      company: 'Digital Agency Pro',
      role: 'Software Developer',
      location: 'Austin, TX',
      companyUrl: 'https://digitalagency.com',
      description:
        'Delivered custom web applications for diverse client portfolio including e-commerce, healthcare, and education sectors.',
      highlights: [
        'Built 15+ responsive web applications using modern JavaScript frameworks',
        'Collaborated directly with clients to gather requirements and deliver solutions',
        'Mentored junior developers and established code review processes',
        'Integrated third-party APIs and payment systems for e-commerce platforms',
      ],
      technologies: [
        'JavaScript',
        'React',
        'PHP',
        'Laravel',
        'MySQL',
        'jQuery',
        'Bootstrap',
        'Git',
      ],
    },
  ] as Experience[],

  // Footer Information
  footer: {
    builtWith: [
      { name: 'Vite', url: 'https://vitejs.dev' },
      { name: 'React', url: 'https://react.dev' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    ],
    signature: 'Designed and coded with ✨ by Ernesto Jiménez Villaseñor',
  },
} as const;

// Type helpers for better TypeScript support
export type NavigationItem = (typeof portfolioConfig.navigation)[number];
export type SectionId = NavigationItem['id'];

// Derived configuration helpers
export const portfolioHelpers = {
  // Get all section IDs including hero
  getAllSectionIds: (): string[] => {
    return ['hero', ...portfolioConfig.navigation.map((item) => item.id)];
  },

  // Get navigation section IDs only
  getNavigationSectionIds: (): SectionId[] => {
    return portfolioConfig.navigation.map((item) => item.id);
  },

  // Get social links as array
  getSocialLinksArray: () => {
    return Object.values(portfolioConfig.social);
  },
};
