import type { Experience } from '../types';

// Centralized portfolio configuration - Single source of truth
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Ernesto Jiménez Villaseñor',
    title: 'I build software that ships',
    greeting: 'Hi, my name is',
    description:
      'Tech Lead with 11+ years of software development experience, the last 5 focused on technical leadership. Specialized in microservices architecture, e-commerce platforms, and full-stack development. Based in Mexico City.',
  },

  // Navigation Configuration
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
  ] as const,

  // Social Media Links
  social: {
    github: {
      url: 'https://github.com/SyNeto',
      label: 'GitHub',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/ernesto-jim%C3%A9nez-villase%C3%B1or',
      label: 'LinkedIn',
    },
    email: {
      url: 'mailto:ernesto@ernjv.me',
      label: 'Email',
    },
  },

  // About Section Data
  about: {
    description: [
      "Hello! I'm Ernesto, a software engineer with over 11 years of professional experience building production systems. My journey started back in 2008 as a freelancer, and since then I've gone from writing my first lines of code to leading engineering teams and architecting migrations from monolithic systems to microservices.",
      "I've spent most of my career working across the full stack, but what really drives me is making things work: whether that's migrating an e-commerce platform to a new architecture, designing systems that need to scale, or figuring out why that one service keeps failing at 3 AM. I care about code that's maintainable, systems that are observable, and teams that ship.",
      "Outside of work, I'm an open source and open hardware enthusiast. I maintain a small electronics workshop at home where I restore 1980s computers, mostly Commodore 64s and their variants. I also experiment with IoT projects and embedded systems. There's something satisfying about debugging a 40-year-old machine that reminds me why I got into this field in the first place.",
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'Django',
      'FastAPI',
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
      id: 'experience-galileo',
      dateRange: '2022 — 2025',
      company: 'Galileo',
      role: 'Tech Lead',
      location: 'Mexico City',
      description:
        'Led multiple squads across e-commerce platforms serving 4 business units, driving architectural migrations and platform scaling.',
      highlights: [
        'Ecommerce Squad (2024-2025): Led checkout redesign and product configuration flows for 4 business units',
        'New Markets Squad (2023-2024): Migrated e-commerce from Odoo to Commercetools, launched Colombia platform',
        'Customer Experience Squad (2022-2023): Migrated user accounts to Keycloak, built microservices for scheduling and tracking',
      ],
      technologies: [
        'React',
        'FastAPI',
        'Commercetools',
        'Keycloak',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      id: 'experience-bedu-techlead',
      dateRange: '2016 — 2022',
      company: 'BEDU',
      role: 'Tech Lead',
      location: 'Mexico City',
      description:
        'Grew from Full Stack Developer to Tech Lead, driving the platform evolution from prototype to production-scale microservices architecture.',
      highlights: [
        'Tech Lead (2018-2022): Led monolith to microservices transformation, mentored teams in adopting new technologies',
        'Full Stack Developer (2016-2018): Designed and built LMS platform from prototype to MVP',
      ],
      technologies: ['Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Firestore'],
    },
    {
      id: 'experience-bedu-expert',
      dateRange: '2018 — 2020',
      company: 'BEDU',
      role: 'Expert (Teaching)',
      location: 'Mexico City',
      description:
        'Technical instructor for full-stack development programs, running parallel to Tech Lead responsibilities.',
      highlights: [
        'Provided technical mentorship to ~200 students in full-stack development',
        'Taught Full Stack JavaScript and Full Stack Python courses',
      ],
      technologies: ['JavaScript', 'Python', 'Node.js', 'Django'],
    },
    {
      id: 'experience-egocentra',
      dateRange: '2014 — 2015',
      company: 'Egocentra Advertising',
      role: 'Full Stack Developer',
      location: 'Mexico City',
      description:
        'Developed digital projects for major international brands and internal agency tools.',
      highlights: [
        "Developed projects for major brands (BMW, L'Oreal, Nestle)",
        'Built internal agency solutions and tools',
      ],
      technologies: ['WordPress', 'Django', 'jQuery', 'AngularJS'],
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
