# Component Inventory - Brittany Chiang Portfolio Analysis

_Comprehensive analysis for CV portfolio inspired by brittanychiang.com_

## Layout Architecture

### Desktop Layout Structure

- **Main Container**: Single-page scrolling application
- **Sidebar Navigation** (Right-aligned):
  - Fixed position navigation
  - Collapsible without content reflow
  - Anchor links to sections
  - Social media icons cluster
- **Content Area**: Left-aligned, responsive width
- **Grid System**: CSS Grid/Flexbox hybrid approach

### Responsive Behavior

- **Desktop (1024px+)**: Sidebar + main content
- **Tablet (768px-1023px)**: Top navigation, full-width content
- **Mobile (<768px)**: Stacked, vertical layout

---

## Navigation Components

### Primary Navigation

- **NavBar Component**
  - Links: About, Experience, Projects
  - Smooth scroll behavior
  - Active section highlighting
- **Sidebar Navigation** (Desktop)
  - Fixed positioning (right: 2rem)
  - Vertical link stack
  - Collapsible state management
- **Social Links Cluster**
  - GitHub, LinkedIn, Email, Resume icons
  - External link indicators
  - Hover state animations

### Navigation States

- **Active State**: Current section highlight
- **Hover State**: Link color transition
- **Focus State**: Accessibility outline
- **Mobile State**: Hamburger menu (if needed)

---

## Typography System

### Heading Hierarchy

- **H1 - Hero Name**: `text-5xl md:text-6xl font-bold`
- **H2 - Section Headers**: `text-3xl md:text-4xl font-semibold`
- **H3 - Subsections**: `text-xl md:text-2xl font-medium`
- **H4 - Card Titles**: `text-lg font-medium`

### Body Text Variants

- **Primary Text**: `text-base leading-relaxed`
- **Secondary Text**: `text-sm text-gray-600`
- **Caption Text**: `text-xs text-gray-500`
- **Code/Tech Tags**: `font-mono text-sm`

### Typography Components

- **Heading** (H1-H6 variants)
- **Paragraph** (with text sizing props)
- **TechTag** (monospace, pill-shaped)
- **Link** (internal/external variants)

---

## Card Components

### Experience Card

**Structure:**

- Date range (right-aligned)
- Company name + role title
- Description paragraph
- Technology stack (pill tags)
- Optional company logo/link

**Variants:**

- `ExperienceCard` (full details)
- `ExperienceCardCompact` (condensed view)

**Props:**

```typescript
interface ExperienceCardProps {
  dateRange: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
  location?: string;
}
```

### Project Card (Future - when projects are ready)

**Structure:**

- Project thumbnail/image
- Project title + subtitle
- Description text
- Technology stack tags
- Action links (Demo, Code)

**Variants:**

- `ProjectCardFeatured` (large, detailed)
- `ProjectCardStandard` (grid item)
- `ProjectCardArchive` (list item)

---

## Interactive Elements

### Button Components

- **PrimaryButton**: Main action buttons
- **SecondaryButton**: Secondary actions
- **LinkButton**: Text-only, underline on hover
- **IconButton**: Social media, external links

### Button States

- Default, Hover, Focus, Disabled
- Loading state (spinner)
- External link indicator (arrow icon)

### Form Components (Contact section)

- **Input**: Text, email, textarea variants
- **FormGroup**: Label + input wrapper
- **ValidationMessage**: Error/success states

---

## Content Sections

### Hero Section

**Components:**

- Hero name (animated typing effect?)
- Subtitle/role description
- Brief introduction paragraph
- Call-to-action buttons

### About Section

**Components:**

- About text blocks
- Skills/technologies list
- Profile image (optional)
- Downloadable resume link

### Experience Section

**Components:**

- Section header
- Experience timeline
- Experience cards container
- "View Full Resume" link

### Footer Section

**Components:**

- Credits text
- Built with technology mentions
- Social links repeat

---

## Atomic UI Components

### Base Elements

- **Badge/Tag**: For technology stacks
- **Separator**: Section dividers
- **Icon**: SVG icon system
- **Avatar**: Profile images
- **Container**: Layout containers with max-width
- **Grid**: Responsive grid layouts

### Animation Components

- **FadeIn**: Scroll-triggered animations
- **SlideIn**: Directional entrance animations
- **Hover**: Interactive hover effects
- **Loading**: Page load animations

---

## Essential Components for Immediate Development

### Phase 1 (Core Infrastructure)

1. **Layout Components**
   - `Header` with navigation
   - `Sidebar` (desktop navigation)
   - `Main` (content container)
   - `Footer`

2. **Typography Components**
   - `Heading` (H1-H6)
   - `Text` (body variants)
   - `Link` (internal/external)

3. **Basic UI Elements**
   - `Button` (primary/secondary/link variants)
   - `Badge` (technology tags)
   - `Container` (layout wrapper)

### Phase 2 (Content Components)

1. **Section Components**
   - `HeroSection`
   - `AboutSection`
   - `ExperienceSection`

2. **Card Components**
   - `ExperienceCard`

3. **Navigation Enhancement**
   - Active section detection
   - Smooth scrolling
   - Mobile menu (if needed)

### Phase 3 (Future - Projects Ready)

1. **Project Components**
   - `ProjectCard` (various sizes)
   - `ProjectsSection`
   - `ProjectsArchive`

2. **Advanced Features**
   - Contact form
   - Blog/writing section
   - Advanced animations

---

## Technical Implementation Notes

### Color System (to be customized)

- Primary colors: Custom brand palette
- Neutral grays: Text and backgrounds
- Accent colors: Links and highlights
- Semantic colors: Success, error, warning

### Responsive Breakpoints

```css
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px',
2xl: '1536px'
```

### Animation Patterns

- Subtle hover transitions (0.2s ease)
- Scroll-triggered fade-ins
- Smooth scrolling between sections
- Loading states and micro-interactions

---

## Development Priority

✅ **Immediate (Essential for MVP)**

- Layout structure
- Typography system
- Hero + About sections
- Basic navigation

⏳ **Next Phase (Content Expansion)**

- Experience section
- Enhanced navigation
- Responsive refinements

🔮 **Future (Feature Complete)**

- Projects section (when ready)
- Advanced animations
- Contact functionality
- Performance optimizations
