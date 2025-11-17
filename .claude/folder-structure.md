# Folder Structure - Hodinový Opravár

Complete directory structure for the Astro project.

---

## Root Level

```
hodinovy-opravar/
├── .claude/                        # Claude Code reference files
│   ├── project-brief.md
│   ├── design-system.md
│   ├── component-patterns.md
│   ├── folder-structure.md
│   └── claude-code-starter.txt
├── public/                         # Static assets (not processed)
├── src/                            # Source code
├── .gitignore
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

---

## Public Directory

```
public/
├── images/
│   ├── logo.png                    # Main logo
│   ├── logo-white.png              # White version for dark backgrounds
│   ├── favicon.svg
│   ├── og-image.jpg                # Open Graph default image
│   ├── hero/
│   │   └── handyman.png            # Hero section image
│   ├── services/
│   │   ├── voda.jpg
│   │   ├── elektrika.jpg
│   │   ├── auto.jpg
│   │   ├── malovanie.jpg
│   │   └── ... (more service images)
│   └── gallery/
│       ├── 01.jpg
│       ├── 02.jpg
│       └── ... (work photos)
└── fonts/                          # Optional: if using local fonts
```

**Notes:**

- Files in `/public/` are served as-is
- Reference them with `/images/filename.jpg` in code
- No optimization, so keep images reasonably sized

---

## Source Directory (src/)

```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── interactive/
├── data/
├── layouts/
├── pages/
└── styles/
```

---

## Components Directory

### Layout Components (`src/components/layout/`)

```
components/layout/
├── Header.astro                    # Main navigation header
├── Footer.astro                    # Site footer
└── BaseLayout.astro                # Wrapper layout (not actually a component, goes in layouts/)
```

**Purpose**: Structural components used across all pages

---

### Section Components (`src/components/sections/`)

```
components/sections/
├── Hero.astro                      # Homepage hero section
├── Services.astro                  # Services grid section
├── Stats.astro                     # Statistics/numbers section
├── Gallery.astro                   # Work gallery section
├── Testimonials.astro              # Customer reviews section
├── CTABanner.astro                 # Call-to-action banner
├── FAQ.astro                       # FAQ accordion section
├── ContactInfo.astro               # Contact information block
└── ServiceAreas.astro              # Service coverage areas
```

**Purpose**: Large, page-level sections that combine UI components

**Naming Convention**: Descriptive name for what the section shows

---

### UI Components (`src/components/ui/`)

```
components/ui/
├── Button.astro                    # Reusable button component
├── Card.astro                      # Base card component
├── ServiceCard.astro               # Service-specific card
├── TestimonialCard.astro           # Testimonial/review card
├── Input.astro                     # Form input field
├── Badge.astro                     # Label/badge component
├── IconBox.astro                   # Icon with background container
└── SectionHeader.astro             # Reusable section header
```

**Purpose**: Small, reusable UI building blocks

**Props**: Each should accept props for customization

**Styling**: Uses Tailwind, follows design system tokens

---

### Interactive Components (`src/components/interactive/`)

```
components/interactive/
├── ContactForm.tsx                 # Contact form (React)
├── ImageGallery.tsx                # Gallery with lightbox (React)
└── MobileMenu.tsx                  # Mobile navigation menu (React)
```

**Purpose**: Components requiring JavaScript interactivity

**File Extension**: `.tsx` (React + TypeScript)

**Usage**: Used with `client:load`, `client:visible`, or `client:idle`

---

## Data Directory

```
data/
├── services.ts                     # Service definitions
├── testimonials.ts                 # Customer testimonials
├── stats.ts                        # Business statistics
├── faq.ts                          # FAQ questions and answers
├── gallery.ts                      # Gallery image references
└── navigation.ts                   # Navigation menu items
```

**Purpose**: All static content in TypeScript files

**Structure**: Each exports interfaces and data arrays/objects

**Example**:

```typescript
// services.ts
export interface Service {
  id: string;
  title: string;
  // ... more fields
}

export const services: Service[] = [
  /* ... */
];
```

---

## Layouts Directory

```
layouts/
└── BaseLayout.astro                # Base page layout
```

**Purpose**: Page-level layouts that wrap content

**BaseLayout.astro includes**:

- `<html>`, `<head>`, `<body>` tags
- Meta tags, SEO
- Font imports
- Header component
- Footer component
- Slot for page content

---

## Pages Directory

```
pages/
├── index.astro                     # Homepage (/)
├── kontakt.astro                   # Contact page (/kontakt)
├── sluzby/
│   ├── index.astro                 # Services overview (/sluzby)
│   └── [slug].astro                # Service detail pages (/sluzby/*)
└── api/
    └── contact.ts                  # Contact form API endpoint
```

**Purpose**: File-based routing (each file = a route)

### Homepage (`index.astro`)

- URL: `/`
- Sections: Hero, Stats, Services, Gallery, Testimonials, CTA

### Contact Page (`kontakt.astro`)

- URL: `/kontakt`
- Sections: Hero, Contact form, Info, Service areas, FAQ

### Services Overview (`sluzby/index.astro`)

- URL: `/sluzby`
- Content: All services in grid layout

### Service Detail (`sluzby/[slug].astro`)

- URL: `/sluzby/voda-kurenie`, `/sluzby/elektrika`, etc.
- Dynamic routing using `getStaticPaths()`
- Content: Individual service details

### API Routes (`api/`)

- Contact form endpoint (handled by developer)
- Returns JSON responses

---

## Styles Directory

```
styles/
└── global.css                      # Global styles + Tailwind imports
```

**global.css contents**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles if needed */
@layer base {
  body {
    @apply font-sans antialiased;
  }
}

@layer components {
  /* Custom component classes if needed */
}
```

---

## Configuration Files

### `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://hodinovyopravar.sk',
});
```

### `tailwind.config.mjs`

Complete Tailwind configuration with design system tokens (see design-system.md)

### `tsconfig.json`

TypeScript configuration for Astro

### `package.json`

Dependencies and scripts

---

## Full Tree View

```
hodinovy-opravar/
│
├── .claude/
│   ├── project-brief.md
│   ├── design-system.md
│   ├── component-patterns.md
│   ├── folder-structure.md
│   └── claude-code-starter.txt
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── favicon.svg
│   │   ├── og-image.jpg
│   │   ├── hero/
│   │   │   └── handyman.png
│   │   ├── services/
│   │   │   ├── voda.jpg
│   │   │   ├── elektrika.jpg
│   │   │   ├── auto.jpg
│   │   │   └── ...
│   │   └── gallery/
│   │       ├── 01.jpg
│   │       ├── 02.jpg
│   │       └── ...
│   └── fonts/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── Stats.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── CTABanner.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── ContactInfo.astro
│   │   │   └── ServiceAreas.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── ServiceCard.astro
│   │   │   ├── TestimonialCard.astro
│   │   │   ├── Input.astro
│   │   │   ├── Badge.astro
│   │   │   ├── IconBox.astro
│   │   │   └── SectionHeader.astro
│   │   └── interactive/
│   │       ├── ContactForm.tsx
│   │       ├── ImageGallery.tsx
│   │       └── MobileMenu.tsx
│   │
│   ├── data/
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── stats.ts
│   │   ├── faq.ts
│   │   ├── gallery.ts
│   │   └── navigation.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── kontakt.astro
│   │   ├── sluzby/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── api/
│   │       └── contact.ts
│   │
│   └── styles/
│       └── global.css
│
├── .gitignore
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

---

## File Naming Conventions

### Components

- **PascalCase** for React components: `ContactForm.tsx`
- **PascalCase** for Astro components: `Hero.astro`, `Button.astro`
- Descriptive names: `ServiceCard.astro` not `Card2.astro`

### Data Files

- **camelCase**: `services.ts`, `testimonials.ts`
- Plural for collections: `services.ts` (not `service.ts`)

### Pages

- **kebab-case** for routes: `kontakt.astro`, `service-detail.astro`
- Match URL structure: `/sluzby` = `sluzby/index.astro`

### Images

- **kebab-case**: `hero-handyman.png`, `service-voda.jpg`
- Descriptive: `service-elektrika.jpg` not `img-02.jpg`

---

## Growth Considerations

### If You Add More Pages Later:

```
pages/
├── o-nas.astro                     # About page
├── referencie.astro                # Portfolio/references
├── blog/
│   ├── index.astro                 # Blog listing
│   └── [slug].astro                # Blog post
```

### If You Add More Components:

```
components/ui/
├── Avatar.astro                    # User avatar
├── Modal.astro                     # Modal dialog
└── Tabs.astro                      # Tab navigation
```

### If You Add CMS Later:

```
src/
├── content/                        # Astro Content Collections
│   ├── config.ts
│   ├── blog/
│   └── services/
```

---

## Important Notes

### Do NOT Create:

- ❌ Separate CSS files (use Tailwind in components)
- ❌ `lib/` or `utils/` folders yet (wait until needed)
- ❌ `hooks/` folder (React hooks live with components)
- ❌ `types/` folder (types live with data files)

### Keep Flat Until Necessary:

- Start simple, add structure as needed
- Don't over-engineer at the beginning
- Components can always be reorganized later

### Remember:

- **Images** → `/public/images/`
- **Data** → `src/data/`
- **Static pages** → `src/pages/`
- **Reusable components** → `src/components/ui/`
- **Large sections** → `src/components/sections/`

---

**Last Updated**: November 2024
