# Hodinový Opravár - Project Brief

## Project Overview

Building a modern, static website for a local handyman service business in Žilina, Slovakia. The site will showcase services, build trust through testimonials, and generate leads through contact forms.

## Business Context

- **Business**: Hodinový opravár (Hourly Repairman)
- **Owner**: Professional handyman with red hard hat branding
- **Location**: Žilina and surrounding areas (Žilina + okolie)
- **Services**: Wide range - plumbing, electrical, bike/car repairs, furniture, painting, heating, transport, etc.
- **Target Audience**: Homeowners, property managers, small businesses
- **Goal**: Generate phone calls and quote requests

## Tech Stack

### Core Technologies

- **Framework**: Astro 4.x (static site generator)
- **Styling**: Tailwind CSS (utility-first, no separate CSS files)
- **Language**: TypeScript
- **Interactivity**: React Islands (minimal use)
- **Icons**: Lucide React
- **Fonts**: Outfit (Google Fonts)

### Why These Choices?

- **Astro**: Perfect for static content, excellent performance, familiar to developer
- **Tailwind**: Fast development, works great with Claude Code, design system mapping
- **Static Content**: No CMS needed, all content in data files
- **React Islands**: Only for forms and galleries (minimal JS)

## Content Strategy

### All Content is Static

- **Services**: Defined in `src/data/services.ts`
- **Testimonials**: Defined in `src/data/testimonials.ts`
- **Stats/Numbers**: Defined in `src/data/stats.ts`
- **FAQ**: Defined in `src/data/faq.ts`
- **Gallery**: Image references in `src/data/gallery.ts`

**No Database. No CMS. Just TypeScript data files.**

### Language & Tone

- **Language**: Slovak (Slovenčina)
- **Tone**: Professional but friendly, formal (vykanie - using "vy")
- **Style**: Clear, direct, action-oriented

## Design System

### Visual Style

- **Inspiration**: Plumbing X Webflow template (primary structure)
- **Secondary**: Handyflow Webflow template (contact/service pages)
- **Brand**: Red color scheme (from logo), comic book energy
- **Current Build**: Blue theme (#3083FF) - will adjust shade later

### Key Visual Elements

- Clean, modern, professional
- Alternating light/dark sections
- Card-based layouts
- Bold typography
- Generous white space
- High-quality photography (client photos available)

### Design Principles

1. **Mobile-first** - most users on phones
2. **Performance-critical** - fast load times for SEO
3. **Trust-building** - testimonials, stats, real photos
4. **Clear CTAs** - multiple conversion points
5. **Scannable** - easy to digest information

## Site Structure

### Pages

1. **Homepage** (`/`) - Hero, Services, Stats, Gallery, Testimonials, CTA
2. **Services Overview** (`/sluzby`) - All services grid
3. **Service Detail Pages** (`/sluzby/[slug]`) - Individual service info
4. **Contact Page** (`/kontakt`) - Contact form, info, service areas, FAQ

### Key Sections (Homepage)

1. Hero - headline, CTAs, client photo
2. Stats - years experience, happy clients, projects
3. Services Grid - 3-column service cards
4. Gallery/Work - photos of completed work
5. Urgent CTA Banner - bright, attention-grabbing
6. Testimonials - customer reviews carousel
7. Final CTA - quote request
8. Footer - navigation, contact, social

## Component Architecture

### Component Types

**1. Layout Components** (`src/components/layout/`)

- Header, Footer, BaseLayout

**2. Section Components** (`src/components/sections/`)

- Hero, Services, Stats, Gallery, Testimonials, CTABanner, FAQ

**3. UI Components** (`src/components/ui/`)

- Button, Card, ServiceCard, TestimonialCard, Input, Badge

**4. Interactive Components** (`src/components/interactive/`)

- ContactForm.tsx (React)
- ImageGallery.tsx (React)
- MobileMenu.tsx (React)

### Component Rules

- **Default to Astro** - use `.astro` for everything static
- **React Islands Only For**:
  - ContactForm (validation, submission)
  - ImageGallery (lightbox interactions)
  - MobileMenu (toggle state)
- **Client Directives**:
  - `client:load` - forms (need immediate interactivity)
  - `client:visible` - galleries (can wait until visible)
  - `client:idle` - non-critical interactions

## Development Workflow

### Phase 1: Foundation (Current)

- ✅ Project planning complete
- ✅ Design system documented
- 🔄 Next: Setup Astro + Tailwind
- 🔄 Next: Base layouts and data files

### Phase 2: Components

- Build UI component library
- Create section components
- Test responsive behavior

### Phase 3: Pages

- Homepage
- Services pages
- Contact page

### Phase 4: Interactive Features

- Contact form (React)
- Image gallery (React)
- Mobile menu

### Phase 5: Polish

- Animations
- Performance optimization
- Color adjustment (blue shade tweaking)
- Testing

## Key Technical Decisions

### No Package Installation For

- ❌ Email services (Resend, Nodemailer, etc.) - developer handles API separately
- ❌ CMS integrations - all static
- ❌ Auth packages - not needed
- ❌ Database packages - not needed

### What We DO Install

- ✅ Astro core
- ✅ @astrojs/tailwind
- ✅ @astrojs/react
- ✅ Tailwind CSS
- ✅ React + React DOM
- ✅ Lucide React (icons)
- ✅ TypeScript
- ✅ Framer Motion (for animations)

### File Organization

- Images in `/public/images/`
- Data files in `src/data/`
- Components organized by type (layout, sections, ui, interactive)
- Pages in `src/pages/` (file-based routing)
- Shared styles in `src/styles/global.css`

## Design System Reference

All design tokens (colors, typography, spacing, shadows, etc.) are fully documented in:

- `design-system.md` - Complete reference

All component patterns and code examples in:

- `component-patterns.md` - Reusable patterns

Target folder structure in:

- `folder-structure.md` - Complete tree

Tailwind configuration in:

- `tailwind-config-spec.md` - Ready to copy config

## Client Assets

### Available

- ✅ Logo (comic book style, red/black/cyan)
- ✅ Professional photos (client with red hard hat, polo, tool box)
- ✅ Brand identity (red is primary color)

### Needed

- 📸 Work photos (before/after if available)
- 📝 Service descriptions (from client)
- 💬 Testimonials (from client)
- 📞 Contact details
- 🗺️ Service area specifics

## Performance Requirements

### Critical Metrics

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Keep JS minimal (< 100kb)

### Optimization Strategy

- Astro's zero-JS by default
- Image optimization (Astro Image component)
- Minimal React islands
- Tailwind CSS purging (automatic)
- Font subsetting

## SEO Strategy

### Local SEO Focus

- Target: "opravár Žilina", "handyman Žilina", "domáce opravy Žilina"
- Service pages for each offering
- Location mentions throughout
- Schema markup for LocalBusiness
- Fast load times (Core Web Vitals)

### Meta Information

- Unique title/description per page
- Open Graph tags
- Alt text for all images
- Semantic HTML structure

## Notes & Reminders

### Building with Claude Code

- Start each session by referencing `.claude/` files
- Claude Code works best with clear, specific instructions
- Reference design system tokens by name (e.g., "use text-h2 and text-primary")
- Provide examples when Claude makes mistakes

### Future Considerations

- Color scheme will be adjusted after visual review
- Possible CMS integration later (Contentful, Sanity)
- Analytics integration (client to decide)
- Possible e-commerce for products (future phase)

### Developer Handles Separately

- Email API integration
- Form submission logic
- Deployment configuration
- Domain setup
- Analytics setup

---

**Created**: November 2024  
**Status**: Active Development  
**Developer**: Michal (GoodRequest Tech Team Leader)
