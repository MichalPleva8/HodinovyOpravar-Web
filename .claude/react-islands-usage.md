# React Islands Usage Guide

This document shows how to use the interactive React components in Astro pages.

---

## 1. ContactForm (client:load)

**Usage:** Contact page form with validation and submission handling.

```astro
---
// src/pages/kontakt.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ContactForm from '../components/interactive/ContactForm';
---

<BaseLayout
  title="Kontakt - Hodinový opravár"
  description="Kontaktujte nás pre rýchlu cenovú ponuku"
>
  <section class="bg-white px-6 py-20">
    <div class="container mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="text-h1 mb-4 font-bold text-neutral-800">Kontaktujte nás</h1>
        <p class="text-body-lg text-neutral-600">Vyplňte formulár a my sa vám ozveme čo najskôr.</p>
      </div>

      {/* Use client:load for critical interactivity */}
      <ContactForm client:load />
    </div>
  </section>
</BaseLayout>
```

**Why client:load?** The form is critical for the contact page functionality and should be interactive immediately.

---

## 2. ImageGallery (client:visible)

**Usage:** Photo gallery with lightbox for services, projects, or about page.

```astro
---
// src/pages/galeria.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ImageGallery from '../components/interactive/ImageGallery';

const galleryImages = [
  {
    src: '/images/gallery/project-1.jpg',
    alt: 'Oprava vodovodného potrubia',
    caption: 'Profesionálna oprava vodovodného potrubia v Žiline',
  },
  {
    src: '/images/gallery/project-2.jpg',
    alt: 'Elektroinštalácia',
    caption: 'Kompletná elektroinštalácia v byte',
  },
  {
    src: '/images/gallery/project-3.jpg',
    alt: 'Montáž radiátorov',
    caption: 'Výmena a montáž kúrenacích radiátorov',
  },
  // ... more images
];
---

<BaseLayout
  title="Galéria prác - Hodinový opravár"
  description="Pozrite si naše ukončené projekty a práce"
>
  <section class="bg-white px-6 py-20">
    <div class="container mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="text-h1 mb-4 font-bold text-neutral-800">Galéria našich prác</h1>
        <p class="text-body-lg text-neutral-600">
          Pozrite si ukážky z našich realizovaných projektov.
        </p>
      </div>

      {/* Use client:visible to load only when scrolled into view */}
      <ImageGallery images={galleryImages} columns={3} client:visible />
    </div>
  </section>
</BaseLayout>
```

**Props:**

- `images`: Array of image objects with `src`, `alt`, and optional `caption`
- `columns`: Grid columns - 2, 3, or 4 (default: 3)

**Why client:visible?** The gallery might be below the fold, so we load it only when the user scrolls to it, improving initial page load.

---

## 3. MobileMenu (client:idle)

**Usage:** Mobile navigation menu (typically integrated into Header component).

### Option A: Standalone Usage

```astro
---
// src/components/layout/Header.astro
import MobileMenu from '../interactive/MobileMenu';
import Button from '../ui/Button.astro';

const navigation = [
  { name: 'Domov', href: '/' },
  { name: 'Služby', href: '/sluzby' },
  { name: 'Galéria', href: '/galeria' },
  { name: 'Kontakt', href: '/kontakt' },
];

const currentPath = Astro.url.pathname;
---

<header class="sticky top-0 z-50 bg-white shadow-sm">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      {/* Logo */}
      <a href="/" class="flex items-center">
        <img src="/images/logo.png" alt="Hodinový opravár" class="h-12" />
      </a>

      {/* Desktop Navigation */}
      <ul class="hidden items-center gap-8 md:flex">
        {
          navigation.map((item) => (
            <li>
              <a
                href={item.href}
                class={`font-medium transition-colors ${
                  currentPath === item.href
                    ? 'text-primary font-bold'
                    : 'hover:text-primary text-neutral-700'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>

      {/* Desktop CTA */}
      <div class="hidden md:block">
        <Button href="tel:+421903566644" variant="primary"> Zavolať teraz </Button>
      </div>

      {/* Mobile Menu - Use client:idle for non-critical interactivity */}
      <MobileMenu
        navigation={navigation}
        phoneNumber="+421903566644"
        currentPath={currentPath}
        client:idle
      />
    </div>
  </nav>
</header>
```

**Props:**

- `navigation`: Array of navigation items with `name` and `href`
- `phoneNumber`: Phone number for CTA button (default: '+421903566644')
- `currentPath`: Current page path for active state highlighting (optional)

**Why client:idle?** The mobile menu is not immediately needed - it loads after the browser is idle, reducing initial load time.

---

## Client Directive Quick Reference

### client:load

- **When:** Critical, immediately needed interactivity
- **Examples:** Contact forms, checkout flows, critical UI
- **JavaScript loads:** Immediately on page load

### client:visible

- **When:** Interactive content that might be below the fold
- **Examples:** Image galleries, carousels, lazy-loaded sections
- **JavaScript loads:** When element enters viewport

### client:idle

- **When:** Non-critical interactive elements
- **Examples:** Mobile menus, chat widgets, newsletter popups
- **JavaScript loads:** After browser is idle (requestIdleCallback)

---

## Example: Complete Contact Page

```astro
---
// src/pages/kontakt.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ContactForm from '../components/interactive/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: 'phone',
    label: 'Telefón',
    value: '0903 56 66 44',
    href: 'tel:+421903566644',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'info@hodinovyopravar.sk',
    href: 'mailto:info@hodinovyopravar.sk',
  },
  {
    icon: 'map',
    label: 'Oblasť',
    value: 'Žilina a okolie',
    href: null,
  },
];
---

<BaseLayout
  title="Kontakt - Hodinový opravár | Žilina"
  description="Kontaktujte nás pre cenovú ponuku. Telefón: 0903 56 66 44, Email: info@hodinovyopravar.sk"
>
  <section class="bg-neutral-200 px-6 py-20">
    <div class="container mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <p class="text-primary mb-2 text-sm font-medium tracking-wide uppercase">KONTAKT</p>
        <h1 class="text-h1 mb-4 font-bold text-neutral-800">Ozvite sa nám</h1>
        <p class="text-body-lg mx-auto max-w-2xl text-neutral-600">
          Máte otázky alebo potrebujete cenovú ponuku? Kontaktujte nás pomocou formulára alebo
          zavolajte.
        </p>
      </div>

      <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div class="space-y-8">
          <div class="rounded-card shadow-card bg-white p-8">
            <h2 class="text-h3 mb-6 font-bold text-neutral-800">Kontaktné informácie</h2>
            <div class="space-y-6">
              {
                contactInfo.map((item) => (
                  <div class="flex items-start gap-4">
                    <div class="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      {item.icon === 'phone' && <Phone className="w-6 h-6 text-primary" />}
                      {item.icon === 'mail' && <Mail className="w-6 h-6 text-primary" />}
                      {item.icon === 'map' && <MapPin className="w-6 h-6 text-primary" />}
                    </div>
                    <div>
                      <p class="mb-1 text-sm font-medium text-neutral-600">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          class="text-body hover:text-primary font-medium text-neutral-800 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p class="text-body font-medium text-neutral-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Working Hours */}
          <div class="bg-primary rounded-card p-8 text-white">
            <h3 class="text-h4 mb-4 font-bold">Pracovné hodiny</h3>
            <div class="text-body space-y-2">
              <div class="flex justify-between">
                <span>Pondelok - Piatok:</span>
                <span class="font-medium">8:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>Sobota:</span>
                <span class="font-medium">9:00 - 14:00</span>
              </div>
              <div class="flex justify-between">
                <span>Nedeľa:</span>
                <span class="font-medium">Zatvorené</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div class="rounded-card shadow-card bg-white p-8">
          <h2 class="text-h3 mb-6 font-bold text-neutral-800">Napíšte nám</h2>
          <ContactForm client:load />
        </div>
      </div>
    </div>
  </section>
</BaseLayout>
```

---

## TypeScript Types

All components are fully typed with TypeScript. Here are the interfaces:

### ContactForm

```typescript
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
```

### ImageGallery

```typescript
interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: 2 | 3 | 4;
}
```

### MobileMenu

```typescript
interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
  phoneNumber?: string;
  currentPath?: string;
}
```

---

## Accessibility Features

All components follow accessibility best practices:

- **ContactForm**: Proper labels, required field indicators, ARIA attributes
- **ImageGallery**: Keyboard navigation (Escape, Arrow keys), focus management, ARIA labels
- **MobileMenu**: Keyboard support (Escape to close), focus trap, ARIA expanded/hidden states

---

## Styling Notes

- All components use Tailwind CSS classes matching the design system
- Colors reference: `primary`, `primary-hover`, `primary-light`, `neutral-*`
- Responsive: Mobile-first approach with `md:` and `lg:` breakpoints
- Transitions: Consistent with design system (`duration-200`, `duration-300`)

---

**Last Updated**: November 2024
