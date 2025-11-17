# Hodinový opravár - Website

Professional handyman service website built with Astro 4, Tailwind CSS, and React Islands.

## Project Overview

Static website for Hodinový opravár, providing comprehensive handyman services in Žilina, Slovakia. The site features a modern, responsive design with optimized performance using Astro's island architecture.

## Tech Stack

-   **Framework**: Astro 4.x (Static Site Generator)
-   **Styling**: Tailwind CSS v4 (CSS-based configuration)
-   **Interactivity**: React Islands (minimal JavaScript)
-   **Icons**: Lucide React
-   **Language**: TypeScript
-   **Fonts**: Outfit (Google Fonts)

## Project Structure

```
hodinovy-opravar/
├── .claude/                    # Project reference documentation
│   ├── design-system.md        # Complete design tokens
│   ├── component-patterns.md   # Code examples
│   ├── folder-structure.md     # Project structure guide
│   └── claude-code-starter.txt # Setup instructions
├── public/
│   └── images/
│       ├── hero/               # Hero section images
│       ├── services/           # Service images
│       └── gallery/            # Work gallery photos
├── src/
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Hero, Services, Stats, etc.
│   │   ├── ui/                # Button, Card, Input, Badge
│   │   └── interactive/       # React islands (ContactForm, Gallery, Menu)
│   ├── data/                  # All static content (TypeScript)
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── stats.ts
│   │   └── faq.ts
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base page layout
│   ├── pages/                 # File-based routing
│   │   ├── index.astro        # Homepage
│   │   ├── kontakt.astro      # Contact page
│   │   ├── sluzby/            # Services
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── api/               # API endpoints
│   └── styles/
│       └── global.css         # Tailwind + design system tokens
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Design System

The project uses a comprehensive design system based on the Plumbing X template. All design tokens are configured in `src/styles/global.css` using Tailwind CSS v4's `@theme` directive.

### Key Features

-   **8px spacing grid** for consistent spacing
-   **Complete color palette** with primary blue (#3083FF) and neutral grays
-   **Typography system** with Outfit font family
-   **Component shadows** for depth and hierarchy
-   **Responsive breakpoints** (mobile-first approach)

### Using Design Tokens

```astro
<!-- Typography -->
<h1 class="text-h1 font-bold text-neutral-800">Heading</h1>
<p class="text-body text-neutral-600">Body text</p>

<!-- Colors -->
<button class="bg-primary hover:bg-primary-hover text-white">Button</button>

<!-- Spacing & Shadows -->
<div class="p-6 rounded-card shadow-card hover:shadow-card-hover">Card</div>
```

## Development

### Prerequisites

-   Node.js 18.20.8+ or 20.3.0+ or 22.0.0+
-   npm 9.6.5+

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check
```

## Component Guidelines

### When to Use Astro vs React

**Use Astro components (.astro) for:**

-   Static content (default choice)
-   Layout components (Header, Footer)
-   Section components (Hero, Services, Stats)
-   UI components without interactivity

**Use React components (.tsx) only for:**

-   Contact forms (validation, submission)
-   Image galleries (lightbox functionality)
-   Mobile menu (toggle state)

### Client Directives

```astro
<!-- Critical functionality - loads immediately -->
<ContactForm client:load />

<!-- Non-critical - loads when visible -->
<ImageGallery client:visible />

<!-- Low priority - loads when idle -->
<MobileMenu client:idle />
```

## Content Management

All content is stored as TypeScript files in `src/data/`. This provides:

-   Type safety with interfaces
-   No CMS required
-   Version controlled
-   Easy to update

Example:

```typescript
// src/data/services.ts
export interface Service {
	id: string
	title: string
	description: string
	slug: string
	image?: string
}

export const services: Service[] = [
	{
		id: '1',
		title: 'Voda & kúrenie',
		description: 'Opravy vodovodov...',
		slug: 'voda-kurenie',
		image: '/images/services/voda.jpg',
	},
]
```

## Styling Approach

### Mobile-First Responsive Design

```astro
<!-- Base styles for mobile, add breakpoints for larger screens -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid adapts to screen size -->
</div>
```

### Design System Tokens

Always use design tokens instead of arbitrary values:

✅ **Good:**

```astro
<button class="bg-primary text-white rounded-button shadow-button">
```

❌ **Bad:**

```astro
<button class="bg-[#3083FF] text-white rounded-lg shadow-md">
```

## Language & Tone

-   **Language**: Slovak (Slovenčina)
-   **Tone**: Professional yet friendly
-   **Form**: Formal (vykanie - "vy" not "ty")

Examples:

-   "Kontaktujte nás" (not "Kontaktuj nás")
-   "Potrebujete pomoc?" (not "Potrebuješ pomoc?")

## Reference Files

Detailed documentation is available in the `.claude/` directory:

-   `design-system.md` - Complete design tokens and component styles
-   `component-patterns.md` - Code examples and best practices
-   `folder-structure.md` - Detailed project structure
-   `claude-code-starter.txt` - Quick setup guide

## Browser Support

-   Modern browsers (Chrome, Firefox, Safari, Edge)
-   Mobile browsers (iOS Safari, Chrome for Android)
-   ES2020+ JavaScript features

## Performance

-   Static site generation (no server required)
-   Minimal JavaScript (only for interactive components)
-   Optimized CSS with Tailwind
-   Lazy loading for images and interactive components

## Deployment

The project builds to static files in `dist/` directory. Deploy to any static hosting:

-   Netlify
-   Vercel
-   GitHub Pages
-   Cloudflare Pages

## License

Private project for Hodinový opravár.

## Contact

For questions about the website, contact: michal.pleva8@gmail.com
