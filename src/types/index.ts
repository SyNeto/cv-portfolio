// Type definitions exports

export interface Experience {
  id: string;
  dateRange: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
  location?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
