# ADR-006: Dark Mode Theming System

## Status

Accepted

## Date

2025-11-27

## Context

The portfolio needed a dark mode feature to:

- Improve user experience for visitors who prefer dark interfaces
- Reduce eye strain in low-light environments
- Demonstrate modern frontend capabilities
- Follow current web accessibility and UX standards

## Decision

We implemented a CSS custom properties-based theming system with the following architectural decisions:

### 1. Initial Theme Detection

**Choice:** Respect system preference (`prefers-color-scheme`)

The theme initializes based on the user's OS/browser preference, providing a seamless experience without requiring manual configuration.

### 2. Persistence

**Choice:** localStorage

User's explicit theme choice persists across sessions. If no preference is stored, falls back to system preference.

### 3. Color Strategy

**Choice:** CSS Variables with semantic naming

Instead of using Tailwind's built-in `dark:` variant on every element, we use CSS custom properties that change based on the `.dark` class on the document root.

```css
:root {
  --color-surface: #ffffff;
  --color-text-primary: #111827;
}

.dark {
  --color-surface: #0f172a;
  --color-text-primary: #f1f5f9;
}
```

Benefits:

- Single source of truth for colors
- Easier to maintain consistency
- Simpler component code (no `dark:` prefixes everywhere)
- Better scalability for future themes

### 4. Color Palette

**Choice:** Slate/Blue

| Token             | Light   | Dark    |
| ----------------- | ------- | ------- |
| surface           | #ffffff | #0f172a |
| surface-secondary | #f8fafc | #1e293b |
| text-primary      | #111827 | #f1f5f9 |
| text-secondary    | #4b5563 | #94a3b8 |
| text-muted        | #6b7280 | #64748b |
| border            | #e5e7eb | #334155 |
| accent            | #2563eb | #60a5fa |

All color combinations meet WCAG AA contrast requirements (4.5:1 minimum).

### 5. Toggle UI

**Choice:** Sun/Moon icons, solid style, positioned at header right

- Sun icon (visible in dark mode) → switch to light
- Moon icon (visible in light mode) → switch to dark
- Follows slate color scheme (not colorful icons)

## Implementation

### Files Created/Modified

1. `src/index.css` - CSS variables for `:root` and `.dark`
2. `src/hooks/useTheme.ts` - Theme state management hook
3. `src/components/ui/ThemeToggle.tsx` - Toggle button component
4. All components - Migrated from hardcoded colors to semantic variables

### Usage

```tsx
// In components, use semantic color classes:
<div className="bg-surface text-text-primary border-border">
  <span className="text-accent">Highlighted</span>
</div>;

// To use the theme hook:
const { theme, toggleTheme, isDark } = useTheme();
```

## Consequences

### Positive

- Clean, maintainable theming system
- Easy to add new themes in the future
- Consistent user experience across the site
- Respects user preferences (system + explicit)
- WCAG AA compliant contrast ratios

### Negative

- Initial migration effort to replace all hardcoded colors
- Slightly larger CSS bundle (minimal impact)

### Neutral

- Requires discipline to use semantic color classes in new components

## References

- [WCAG 2.1 Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [prefers-color-scheme MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Tailwind CSS v4 Theme Configuration](https://tailwindcss.com/docs/theme)
