# Component Patterns - Hodinový Opravár

This document provides code examples and patterns for building components in the Hodinový opravár project.

---

## General Guidelines

### Component Choice Decision Tree
```
Does it need JavaScript interactivity?
├─ NO → Use Astro component (.astro)
└─ YES → Is it critical for page function?
    ├─ YES → React with client:load
    └─ NO → React with client:visible or client:idle
```

### Styling Rules
1. **Use Tailwind classes** for all styling
2. **No separate CSS files** unless absolutely necessary (complex animations, unique effects)
3. **Reference design tokens** from Tailwind config (text-h2, bg-primary, etc.)
4. **Mobile-first** - base styles for mobile, add md:, lg:, xl: prefixes for larger screens

---

## Layout Components

### BaseLayout Component
```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  image?: string;
}

const { title, description, image = '/images/og-image.jpg' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="sk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    
    <!-- SEO -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body class="font-sans antialiased">
    <slot />
  </body>
</html>
```

### Header Component
```astro
---
// src/components/layout/Header.astro
import Button from '../ui/Button.astro';

const navigation = [
  { name: 'Domov', href: '/' },
  { name: 'Služby', href: '/sluzby' },
  { name: 'Kontakt', href: '/kontakt' },
];
---

<header class="sticky top-0 z-50 bg-white shadow-sm">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/images/logo.png" alt="Hodinový opravár" class="h-12" />
      </a>
      
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-8">
        {navigation.map(item => (
          <li>
            <a 
              href={item.href}
              class="text-neutral-700 hover:text-primary font-medium transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      
      <!-- CTA Button -->
      <div class="hidden md:block">
        <Button href="tel:+421903566644" variant="primary">
          Zavolať teraz
        </Button>
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden" aria-label="Open menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</header>
```

### Footer Component
```astro
---
// src/components/layout/Footer.astro
const currentYear = new Date().getFullYear();

const navigation = {
  main: [
    { name: 'Domov', href: '/' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
  ]
};
---

<footer class="bg-neutral-800 text-white">
  <div class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo & Description -->
      <div>
        <img src="/images/logo.png" alt="Hodinový opravár" class="h-12 mb-4" />
        <p class="text-neutral-400 text-sm">
          Spoľahlivé opravárenské služby v Žiline a okolí. Voda, elektrika, kúrenie a mnoho ďalších služieb.
        </p>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h3 class="font-bold mb-4">Rýchle odkazy</h3>
        <ul class="space-y-2">
          {navigation.main.map(item => (
            <li>
              <a href={item.href} class="text-neutral-400 hover:text-white transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <!-- Contact -->
      <div>
        <h3 class="font-bold mb-4">Kontakt</h3>
        <ul class="space-y-2 text-neutral-400">
          <li>Tel: 0903 56 66 44</li>
          <li>Email: info@hodinovyopravar.sk</li>
          <li>Žilina a okolie</li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400 text-sm">
      <p>&copy; {currentYear} Hodinový opravár. Všetky práva vyhradené.</p>
    </div>
  </div>
</footer>
```

---

## UI Components

### Button Component
```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  class?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  href,
  type = 'button',
  class: className = ''
} = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-button transition-all duration-200';

const variantClasses = {
  primary: 'bg-primary hover:bg-primary-hover text-white shadow-button hover:shadow-button/60 hover:-translate-y-0.5',
  secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-light',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href}
  type={!href ? type : undefined}
  class={classes}
>
  <slot />
</Tag>
```

### Card Component
```astro
---
// src/components/ui/Card.astro
interface Props {
  class?: string;
  hoverable?: boolean;
}

const { class: className = '', hoverable = false } = Astro.props;

const hoverClasses = hoverable 
  ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' 
  : '';

const classes = `bg-white rounded-card p-6 shadow-card transition-all duration-300 ${hoverClasses} ${className}`;
---

<div class={classes}>
  <slot />
</div>
```

### ServiceCard Component
```astro
---
// src/components/ui/ServiceCard.astro
interface Props {
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
}

const { title, description, icon, href, image } = Astro.props;
---

<div class="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
  {image ? (
    <img 
      src={image} 
      alt={title} 
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
  ) : (
    <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- Icon SVG path -->
      </svg>
    </div>
  )}
  
  <h3 class="text-h4 font-bold text-neutral-800 mb-2">{title}</h3>
  <p class="text-body-sm text-neutral-600 mb-4 line-clamp-3">{description}</p>
  
  <a 
    href={href} 
    class="text-primary hover:text-primary-hover font-medium inline-flex items-center gap-2 group"
  >
    Zistiť viac
    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>
```

### TestimonialCard Component
```astro
---
// src/components/ui/TestimonialCard.astro
interface Props {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
}

const { name, location, rating, text, avatar } = Astro.props;
---

<div class="bg-white rounded-card p-6 shadow-card">
  <!-- Rating Stars -->
  <div class="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg 
        class={`w-5 h-5 ${i < rating ? 'text-secondary-yellow fill-current' : 'text-neutral-300'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
  
  <!-- Testimonial Text -->
  <p class="text-body text-neutral-700 mb-6 italic">
    "{text}"
  </p>
  
  <!-- Author Info -->
  <div class="flex items-center gap-3">
    {avatar ? (
      <img src={avatar} alt={name} class="w-12 h-12 rounded-full object-cover" />
    ) : (
      <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <span class="text-primary font-bold text-lg">
          {name.charAt(0)}
        </span>
      </div>
    )}
    
    <div>
      <p class="font-bold text-neutral-800">{name}</p>
      <p class="text-sm text-neutral-600">{location}</p>
    </div>
  </div>
</div>
```

### Input Component
```astro
---
// src/components/ui/Input.astro
interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const { 
  label, 
  name, 
  type = 'text', 
  placeholder = '', 
  required = false,
  rows = 4
} = Astro.props;

const inputClasses = 'w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all';
---

<div class="space-y-2">
  <label for={name} class="block text-sm font-medium text-neutral-700">
    {label}
    {required && <span class="text-red-500">*</span>}
  </label>
  
  {type === 'textarea' ? (
    <textarea
      id={name}
      name={name}
      rows={rows}
      placeholder={placeholder}
      required={required}
      class={inputClasses}
    />
  ) : (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      class={inputClasses}
    />
  )}
</div>
```

### Badge Component
```astro
---
// src/components/ui/Badge.astro
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

const { variant = 'primary', size = 'md' } = Astro.props;

const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-primary-light text-primary',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

const classes = `inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`;
---

<span class={classes}>
  <slot />
</span>
```

---

## Section Components

### Hero Section
```astro
---
// src/components/sections/Hero.astro
import Button from '../ui/Button.astro';
---

<section class="relative bg-neutral-200 py-20 px-6">
  <div class="container mx-auto max-w-7xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div>
        <p class="text-primary font-medium text-sm uppercase tracking-wide mb-4">
          HODINOVÝ OPRAVÁR
        </p>
        <h1 class="text-h1 font-bold text-neutral-800 mb-6">
          Váš spoľahlivý opravár v Žiline
        </h1>
        <p class="text-body-lg text-neutral-600 mb-8">
          Poskytujeme komplexné opravárenské služby pre váš domov alebo firmu. 
          Voda, elektrika, kúrenie, opravy áut a bicyklov, maľovanie a mnoho ďalších služieb.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <Button href="tel:+421903566644" variant="primary" size="lg">
            Zavolať teraz
          </Button>
          <Button href="/sluzby" variant="secondary" size="lg">
            Naše služby
          </Button>
        </div>
        
        <!-- Quick Contact Info -->
        <div class="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>0903 56 66 44</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Žilina a okolie</span>
          </div>
        </div>
      </div>
      
      <!-- Right: Image -->
      <div class="relative">
        <img 
          src="/images/hero-handyman.png" 
          alt="Profesionálny opravár"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>
```

### Services Grid Section
```astro
---
// src/components/sections/Services.astro
import ServiceCard from '../ui/ServiceCard.astro';
import Button from '../ui/Button.astro';
import type { Service } from '../../data/services';

interface Props {
  services: Service[];
}

const { services } = Astro.props;
---

<section class="py-20 px-6 bg-white">
  <div class="container mx-auto max-w-7xl">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <p class="text-primary font-medium text-sm uppercase tracking-wide mb-2">
        NAŠE SLUŽBY
      </p>
      <h2 class="text-h2 font-bold text-neutral-800 mb-4">
        Široká škála služieb
      </h2>
      <p class="text-body text-neutral-600 max-w-2xl mx-auto">
        Poskytujeme komplexné opravárenské služby pre váš domov alebo firmu. 
        Od vody a kúrenia až po elektro práce a opravy.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {services.map(service => (
        <ServiceCard {...service} />
      ))}
    </div>
    
    <!-- CTA -->
    <div class="text-center">
      <Button href="/sluzby" variant="primary" size="lg">
        Zobraziť všetky služby
      </Button>
    </div>
  </div>
</section>
```

### Stats Section
```astro
---
// src/components/sections/Stats.astro
interface Props {
  data: {
    yearsExperience: number;
    happyClients: number;
    projectsCompleted: number;
    servicesOffered: number;
  };
}

const { data } = Astro.props;

const stats = [
  { label: 'Rokov skúseností', value: `${data.yearsExperience}+` },
  { label: 'Spokojných zákazníkov', value: `${data.happyClients}+` },
  { label: 'Dokončených projektov', value: `${data.projectsCompleted}+` },
  { label: 'Služieb', value: `${data.servicesOffered}+` },
];
---

<section class="py-20 px-6 bg-neutral-800 text-white">
  <div class="container mx-auto max-w-7xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Image/Content -->
      <div>
        <p class="text-primary font-medium text-sm uppercase tracking-wide mb-4">
          NAŠE SKÚSENOSTI
        </p>
        <h2 class="text-h2 font-bold mb-6">
          Zameravame sa na spokojnosť zákazníka a kvalitu
        </h2>
        <p class="text-body text-neutral-300 mb-8">
          S viac ako 15 rokmi skúseností v odvetví poskytujeme profesionálne služby,
          na ktoré sa môžete spoľahnúť.
        </p>
        <Button href="/kontakt" variant="primary" size="lg">
          Získať cenovú ponuku
        </Button>
      </div>
      
      <!-- Right: Stats Grid -->
      <div class="grid grid-cols-2 gap-8">
        {stats.map(stat => (
          <div class="text-center">
            <p class="text-5xl font-bold text-primary mb-2">
              {stat.value}
            </p>
            <p class="text-neutral-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

### CTA Banner Section
```astro
---
// src/components/sections/CTABanner.astro
import Button from '../ui/Button.astro';
---

<section class="py-16 px-6 bg-primary text-white">
  <div class="container mx-auto max-w-4xl text-center">
    <h2 class="text-h2 font-bold mb-4">
      Máte problém? Vyriešime ho ešte dnes!
    </h2>
    <p class="text-body-lg mb-8">
      Kontaktujte nás telefonicky alebo cez formulár a my sa vám ozveme čo najskôr.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="tel:+421903566644"
        class="inline-flex items-center gap-2 text-2xl font-bold hover:underline"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        0903 56 66 44
      </a>
      
      <span class="text-neutral-200">alebo</span>
      
      <Button href="/kontakt" variant="secondary" size="lg">
        Získať cenovú ponuku
      </Button>
    </div>
  </div>
</section>
```

---

## Data File Patterns

### Services Data
```typescript
// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  image?: string;
  slug: string;
  included: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Voda & kúrenie',
    icon: 'wrench',
    description: 'Opravy vodovodov, inštalácie, výmena batérií a radiátorov.',
    slug: 'voda-kurenie',
    image: '/images/services/voda.jpg',
    included: [
      'Opravy vodovodných potrubí',
      'Výmena batérií a spŕch',
      'Inštalácie kúrenia',
      'Údržba radiátorov',
    ],
  },
  {
    id: '2',
    title: 'Elektrika',
    icon: 'zap',
    description: 'Elektroinštalácie, opravy elektrospotrebičov a montáže.',
    slug: 'elektrika',
    image: '/images/services/elektrika.jpg',
    included: [
      'Elektroinštalácie',
      'Opravy elektrospotrebičov',
      'Montáž svietidiel',
      'Výmena zásuviek a vypínačov',
    ],
  },
  // ... more services
];
```

### Testimonials Data
```typescript
// src/data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ján Novák',
    location: 'Žilina',
    rating: 5,
    text: 'Výborná práca, rýchla reakcia. Opravil mi vodovodné potrubie za pár hodín. Určite odporúčam!',
    date: '2024-10-15',
    service: 'Voda & kúrenie',
  },
  {
    id: 2,
    name: 'Mária Kovačová',
    location: 'Bytča',
    rating: 5,
    text: 'Profesionálny prístup, férové ceny. Pomohol mi s elektroinštaláciou v celom byte.',
    date: '2024-09-22',
    service: 'Elektrika',
  },
  // ... more testimonials
];
```

### Stats Data
```typescript
// src/data/stats.ts
export const stats = {
  yearsExperience: 15,
  happyClients: 500,
  projectsCompleted: 1200,
  servicesOffered: 12,
};
```

---

## React Island Patterns

### Contact Form (React)
```tsx
// src/components/interactive/ContactForm.tsx
import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Developer will implement actual API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Meno <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Telefón <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
          Služba
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        >
          <option value="">Vyberte službu</option>
          <option value="voda-kurenie">Voda & kúrenie</option>
          <option value="elektrika">Elektrika</option>
          <option value="opravy-aut">Opravy áut/bicyklov</option>
          <option value="malovanie">Maľovanie</option>
          <option value="ine">Iné</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Správa <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">Správa bola úspešne odoslaná!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">Chyba pri odosielaní. Skúste to znovu.</p>
      )}
    </form>
  );
}
```

**Usage in Astro:**
```astro
---
import ContactForm from '../components/interactive/ContactForm';
---

<section class="py-20 px-6">
  <ContactForm client:load />
</section>
```

---

## Page Patterns

### Homepage
```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import Stats from '../components/sections/Stats.astro';
import Services from '../components/sections/Services.astro';
import Testimonials from '../components/sections/Testimonials.astro';
import CTABanner from '../components/sections/CTABanner.astro';

import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { stats } from '../data/stats';
---

<BaseLayout 
  title="Hodinový opravár - Žilina a okolie | Spoľahlivé opravárenské služby"
  description="Profesionálne opravárenské služby v Žiline. Voda, kúrenie, elektrika, opravy áut a mnoho ďalších služieb. Zavolajte 0903 56 66 44"
>
  <Hero />
  <Stats data={stats} />
  <Services services={services} />
  <CTABanner />
  <Testimonials testimonials={testimonials} />
</BaseLayout>
```

### Service Detail Page (Dynamic)
```astro
---
// src/pages/sluzby/[slug].astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import Button from '../../components/ui/Button.astro';
import { services } from '../../data/services';

export function getStaticPaths() {
  return services.map(service => ({
    params: { slug: service.slug },
    props: { service },
  }));
}

const { service } = Astro.props;
---

<BaseLayout 
  title={`${service.title} - Hodinový opravár`}
  description={service.description}
>
  <section class="py-20 px-6">
    <div class="container mx-auto max-w-7xl">
      <!-- Service Header -->
      <div class="mb-12">
        <p class="text-primary font-medium text-sm uppercase tracking-wide mb-2">
          SLUŽBA
        </p>
        <h1 class="text-h1 font-bold text-neutral-800 mb-4">
          {service.title}
        </h1>
        <p class="text-body-lg text-neutral-600">
          {service.description}
        </p>
      </div>

      <!-- Service Image -->
      {service.image && (
        <img 
          src={service.image} 
          alt={service.title}
          class="w-full h-96 object-cover rounded-card mb-12"
        />
      )}

      <!-- What's Included -->
      <div class="mb-12">
        <h2 class="text-h3 font-bold text-neutral-800 mb-6">
          Čo je zahrnuté?
        </h2>
        <ul class="space-y-3">
          {service.included.map(item => (
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-body text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-primary-light rounded-card p-8 text-center">
        <h3 class="text-h3 font-bold text-neutral-800 mb-4">
          Potrebujete túto službu?
        </h3>
        <p class="text-body text-neutral-600 mb-6">
          Kontaktujte nás ešte dnes a my sa vám ozveme čo najskôr.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="tel:+421903566644" variant="primary" size="lg">
            Zavolať teraz
          </Button>
          <Button href="/kontakt" variant="secondary" size="lg">
            Kontaktný formulár
          </Button>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>
```

---

## Best Practices Summary

1. **Always use Astro components by default** - only React for interactivity
2. **Reference design tokens** - use `text-h2`, `bg-primary`, not arbitrary values
3. **Mobile-first responsive** - base styles for mobile, add `md:`, `lg:` for larger
4. **Semantic HTML** - use proper heading hierarchy, semantic elements
5. **Accessibility** - alt text, ARIA labels, keyboard navigation
6. **TypeScript everything** - interfaces for all data structures
7. **Keep components focused** - single responsibility principle
8. **Reuse UI components** - don't repeat button/card styling

---

**Last Updated**: November 2024
