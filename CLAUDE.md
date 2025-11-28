# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern, responsive CV/portfolio website for Ernesto Jiménez Villaseñor. Built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Code Quality:** ESLint, Prettier, Husky (pre-commit hooks)

## Architecture

### File Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Sidebar, Main
│   ├── sections/        # HeroSection, AboutSection, ExperienceSection
│   ├── ui/              # Reusable components (Badge, Button, Heading, Text, etc.)
│   └── features/        # Complex interactive components
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Dark/light mode management
│   ├── useActiveSection.ts
│   ├── useSmoothScroll.ts
│   └── usePortfolioData.ts
├── config/
│   └── portfolio.ts     # Centralized content data (single source of truth)
├── types/               # TypeScript type definitions
└── index.css            # Tailwind imports + CSS variables for theming
```

### Key Patterns

- **Centralized Data:** All portfolio content lives in `src/config/portfolio.ts`
- **Semantic Colors:** CSS variables in `index.css` enable dark mode support
  - Use `bg-surface`, `text-text-primary`, `border-border`, `text-accent` instead of hardcoded colors
- **Component Composition:** UI components are composable and theme-aware

### Theming System

The project uses CSS custom properties for theming:

```css
/* Light mode (default) */
:root {
  --color-surface: #ffffff;
  --color-text-primary: #111827;
  --color-accent: #2563eb;
  /* ... */
}

/* Dark mode */
.dark {
  --color-surface: #0f172a;
  --color-text-primary: #f1f5f9;
  --color-accent: #60a5fa;
  /* ... */
}
```

Use Tailwind classes like `bg-surface`, `text-text-primary`, `text-accent` for theme-aware styling.

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Deployment

- Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml`
- Triggered on push to `main` branch
- Live URL: https://syneto.github.io/cv-portfolio/

## Content Updates

To update CV content, edit `src/config/portfolio.ts`:

- `personal` - Name, title, description
- `social` - GitHub, LinkedIn, email links
- `about` - Bio paragraphs and technologies list
- `experiences` - Work history with highlights and tech stacks
- `footer` - Built-with technologies and signature

## Documentation

Architecture Decision Records are in `/docs/`:

- ADR-001: Modern Frontend Stack
- ADR-002: Frontend Application Architecture
- ADR-003: Implementation Phases Strategy
- ADR-004: Centralized Data Management
- ADR-005: GitHub Pages Deployment
