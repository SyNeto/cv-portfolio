# CV - Ernesto Jim�nez Villase�or

A modern, responsive CV portfolio website built with cutting-edge web technologies.

## Purpose

This repository contains my professional CV and portfolio, showcasing my skills, experience, and projects in software development. The site demonstrates proficiency in modern frontend development practices and serves as both a personal portfolio and a technical showcase.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Code Quality:** ESLint, Prettier, Husky
- **Architecture:** Component-based with layered organization

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Development Workflow

This project follows a structured, decision-driven development approach:

1. **Architecture Decision Records (ADRs)** - Strategic decisions documented before implementation
2. **Phased Implementation** - Incremental development with clear deliverables (Foundation → Content → Polish)
3. **Human-AI Collaboration** - Product owner defines requirements and priorities, AI implements technical solutions
4. **Iterative Refinement** - Continuous feedback loop with real-time adjustments based on user validation

Each major feature or architectural choice is documented in ADRs, ensuring maintainability and providing context for future development decisions.

## Architecture

The project follows a structured component architecture documented in the ADRs:

- **Layout Components:** Header, Footer, Navigation
- **Section Components:** Hero, About, Experience, Projects
- **UI Components:** Reusable design system components
- **Feature Components:** Complex interactive components

## Documentation

- [ADR-001: Modern Frontend Stack](./docs/ADR-001-modern-frontend-stack.md)
- [ADR-002: Frontend Application Architecture](./docs/ADR-002-frontend-application-architecture.md)
- [ADR-003: Implementation Phases Strategy](./docs/ADR-003-implementation-phases.md)
- [ADR-004: Centralized Data Management](./docs/ADR-004-centralized-data-management.md)
- [ADR-005: GitHub Pages Deployment](./docs/ADR-005-github-pages-deployment.md)

---

> _"It's not a bug, it's a feature request from the universe."_  
> — Some developer, probably, after 3 hours of debugging why CSS grid wasn't working (spoiler: forgot `display: grid`)

_Built with ☕, ✨ vibe coding, and some divine intervention from [Claude Code](https://claude.ai/code)_
