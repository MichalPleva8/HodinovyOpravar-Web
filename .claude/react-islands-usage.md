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
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h1 class="text-h1 font-bold text-neutral-800 mb-4">
          Kontaktujte nás
        </h1>
        <p class="text-body-lg text-neutral-600">
          Vyplňte formulár a my sa vám ozveme čo najskôr.
        </p>
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
    caption: 'Profesionálna oprava vodovodného potrubia v Žiline'
  },
  {
    src: '/images/gallery/project-2.jpg',
    alt: 'Elektroinštalácia',
    caption: 'Kompletná elektroinštalácia v byte'
  },
  {
    src: '/images/gallery/project-3.jpg',
    alt: 'Montáž radiátorov',
    caption: 'Výmena a montáž kúrenacích radiátorov'
  },
  // ... more images
];
---

<BaseLayout
  title="Galéria prác - Hodinový opravár"
  description="Pozrite si naše ukončené projekty a práce"
>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h1 class="text-h1 font-bold text-neutral-800 mb-4">
          Galéria našich prác
        </h1>
        <p class="text-body-lg text-neutral-600">
          Pozrite si ukážky z našich realizovaných projektov.
        </p>
      </div>

      {/* Use client:visible to load only when scrolled into view */}
      <ImageGallery
        images={galleryImages}
        columns={3}
        client:visible
      />
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
      <ul class="hidden md:flex items-center gap-8">
        {navigation.map(item => (
          <li>
            <a
              href={item.href}
              class={`font-medium transition-colors ${
                currentPath === item.href
                  ? 'text-primary font-bold'
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div class="hidden md:block">
        <Button href="tel:+421903566644" variant="primary">
          Zavolať teraz
        </Button>
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
    href: 'tel:+421903566644'
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'info@hodinovyopravar.sk',
    href: 'mailto:info@hodinovyopravar.sk'
  },
  {
    icon: 'map',
    label: 'Oblasť',
    value: 'Žilina a okolie',
    href: null
  }
];
---

<BaseLayout
  title="Kontakt - Hodinový opravár | Žilina"
  description="Kontaktujte nás pre cenovú ponuku. Telefón: 0903 56 66 44, Email: info@hodinovyopravar.sk"
>
  <section class="py-20 px-6 bg-neutral-200">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <p class="text-primary font-medium text-sm uppercase tracking-wide mb-2">
          KONTAKT
        </p>
        <h1 class="text-h1 font-bold text-neutral-800 mb-4">
          Ozvite sa nám
        </h1>
        <p class="text-body-lg text-neutral-600 max-w-2xl mx-auto">
          Máte otázky alebo potrebujete cenovú ponuku? Kontaktujte nás pomocou formulára alebo zavolajte.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div class="space-y-8">
          <div class="bg-white rounded-card p-8 shadow-card">
            <h2 class="text-h3 font-bold text-neutral-800 mb-6">
              Kontaktné informácie
            </h2>
            <div class="space-y-6">
              {contactInfo.map(item => (
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon === 'phone' && <Phone className="w-6 h-6 text-primary" />}
                    {item.icon === 'mail' && <Mail className="w-6 h-6 text-primary" />}
                    {item.icon === 'map' && <MapPin className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <p class="text-sm font-medium text-neutral-600 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        class="text-body font-medium text-neutral-800 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p class="text-body font-medium text-neutral-800">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div class="bg-primary text-white rounded-card p-8">
            <h3 class="text-h4 font-bold mb-4">
              Pracovné hodiny
            </h3>
            <div class="space-y-2 text-body">
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
        <div class="bg-white rounded-card p-8 shadow-card">
          <h2 class="text-h3 font-bold text-neutral-800 mb-6">
            Napíšte nám
          </h2>
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
