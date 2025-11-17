# Typography Reference - Responsive Text Classes

Quick reference guide for all responsive typography utility classes in the Hodinový opravár design system.

## 📱 Responsive Behavior

All typography classes scale automatically across three breakpoints:
- **Mobile (default)**: 0-767px
- **Tablet (md)**: 768px-1023px
- **Desktop (lg)**: 1024px+

## 🎨 Display Headings (Hero/Featured Sections)

Perfect for large hero sections and featured content.

| Class | Mobile | Tablet | Desktop | Usage |
|-------|--------|--------|---------|-------|
| `.text-display-1` | 48px | 56px | 68px | Extra large hero headings |
| `.text-display-2` | 32px | 40px | 48px | Large hero headings |
| `.text-display-3` | 22px | 24px | 28px | Medium featured headings |
| `.text-display-4` | 20px | 22px | 24px | Small featured headings |

**Default styles**: `font-weight: 700` (Bold)

### Examples:
```html
<!-- Basic usage -->
<h1 class="text-display-1">Hero nadpis</h1>

<!-- With custom color -->
<h1 class="text-display-1 text-primary">Hero s modrou farbou</h1>

<!-- Override font weight -->
<h2 class="text-display-2 font-medium text-neutral-800">Lighter display text</h2>
```

---

## 📰 Standard Headings (Content Sections)

Use for regular page content, sections, and subsections.

| Class | Mobile | Tablet | Desktop | Usage |
|-------|--------|--------|---------|-------|
| `.text-h1` | 36px | 48px | 65px | Page titles |
| `.text-h2` | 28px | 32px | 38px | Section headings |
| `.text-h3` | 20px | 22px | 24px | Subsection headings |
| `.text-h4` | 18px | 20px | 22px | Card titles |
| `.text-h5` | 16px | 17px | 18px | Small headings |
| `.text-h6` | 14px | 15px | 16px | Tiny headings |

**Default styles**: `font-weight: 700` (Bold)

### Examples:
```html
<!-- Basic usage -->
<h1 class="text-h1">Stránka</h1>
<h2 class="text-h2">Sekcia</h2>
<h3 class="text-h3">Podsekcia</h3>

<!-- With custom styles -->
<h2 class="text-h2 text-primary font-bold">Important section</h2>
<h3 class="text-h3 text-neutral-600 font-normal">Subtle heading</h3>
<h4 class="text-h4 text-secondary-yellow">Accented card title</h4>
```

---

## 📝 Body Text (Paragraphs & Content)

For body copy, descriptions, and general text content.

| Class | Mobile | Desktop (md) | Usage |
|-------|--------|--------------|-------|
| `.text-body-lg` | 20px | 24px | Lead paragraphs, introductions |
| `.text-body` | 16px | 18px | Standard body text |
| `.text-body-sm` | 14px | 14px | Captions, small print, metadata |

**Default styles**: `font-weight: 400` (Regular)

---

## 🏷️ Subtitle (Section Labels)

For uppercase section labels that appear above headings.

| Class | Mobile | Desktop (md) | Usage |
|-------|--------|--------------|-------|
| `.text-subtitle` | 18px | 20px | Section labels (uppercase) |

**Default styles**: `font-weight: 700` (Bold), `line-height: 1.1`

**Common usage**:
```html
<p class="text-primary text-subtitle uppercase tracking-wide">NAŠE SLUŽBY</p>
```

### Examples:
```html
<!-- Basic usage -->
<p class="text-body-lg">Úvodný odstavec s väčším textom.</p>
<p class="text-body">Štandardný odstavec s normálnym textom.</p>
<p class="text-body-sm">Malý text pre poznámky a detaily.</p>

<!-- With custom styles -->
<p class="text-body-lg text-neutral-700 font-medium">Medium weight intro</p>
<p class="text-body text-neutral-600">Default paragraph</p>
<p class="text-body-sm text-neutral-500 italic">Small italic note</p>
```

---

## 🎯 Overriding Defaults

All typography classes can be customized with additional Tailwind utilities:

### Color Overrides
```html
<!-- Neutral colors -->
<h1 class="text-h1 text-neutral-800">Dark heading</h1>
<p class="text-body text-neutral-600">Medium text</p>
<p class="text-body-sm text-neutral-500">Light text</p>

<!-- Brand colors -->
<h2 class="text-h2 text-primary">Primary blue</h2>
<h3 class="text-h3 text-secondary-yellow">Yellow accent</h3>

<!-- System colors -->
<p class="text-body text-green-400">Success message</p>
<p class="text-body text-red-400">Error message</p>
```

### Font Weight Overrides
```html
<!-- Lighter headings -->
<h1 class="text-h1 font-normal">Normal weight</h1>
<h2 class="text-h2 font-medium">Medium weight</h2>

<!-- Bolder body text -->
<p class="text-body font-medium">Medium body text</p>
<p class="text-body font-bold">Bold body text</p>
```

### Additional Text Styles
```html
<!-- Text decoration -->
<p class="text-body underline">Underlined text</p>
<p class="text-body italic">Italic text</p>
<p class="text-body line-through">Strikethrough text</p>

<!-- Text alignment -->
<h2 class="text-h2 text-center">Centered heading</h2>
<p class="text-body text-right">Right-aligned text</p>

<!-- Letter spacing -->
<h3 class="text-h3 tracking-tight">Tight spacing</h3>
<p class="text-body tracking-wide">Wide spacing</p>

<!-- Text transform -->
<h4 class="text-h4 uppercase">Uppercase heading</h4>
<p class="text-body-sm lowercase">lowercase text</p>
```

---

## 💡 Best Practices

### 1. **Use semantic HTML elements**
Match text classes with appropriate HTML elements:
```html
<!-- ✅ Good -->
<h1 class="text-h1">Page Title</h1>
<h2 class="text-h2">Section Title</h2>
<p class="text-body">Body text</p>

<!-- ❌ Avoid -->
<div class="text-h1">Page Title</div>
<span class="text-h2">Section Title</span>
```

### 2. **Hierarchy matters**
Create clear visual hierarchy with proper heading order:
```html
<article>
  <h1 class="text-h1">Article Title</h1>
  <p class="text-body-lg">Lead paragraph</p>

  <h2 class="text-h2">Section 1</h2>
  <p class="text-body">Content...</p>

  <h3 class="text-h3">Subsection</h3>
  <p class="text-body">More content...</p>
</article>
```

### 3. **Color contrast**
Ensure sufficient contrast for readability:
```html
<!-- ✅ Good contrast -->
<h1 class="text-h1 text-neutral-800">Dark on light</h1>
<div class="bg-neutral-800">
  <h2 class="text-h2 text-neutral-100">Light on dark</h2>
</div>

<!-- ⚠️ Low contrast (avoid) -->
<h2 class="text-h2 text-neutral-400">Gray on light background</h2>
```

### 4. **Don't mix display and standard headings**
Choose one style for consistency:
```html
<!-- ✅ Good - consistent use -->
<section>
  <h1 class="text-display-1">Hero Heading</h1>
  <p class="text-body-lg">Hero description</p>
</section>

<section>
  <h2 class="text-h2">Content Section</h2>
  <p class="text-body">Standard content</p>
</section>

<!-- ❌ Avoid - mixing styles -->
<section>
  <h1 class="text-display-1">Hero</h1>
  <h2 class="text-h2">Subtitle</h2> <!-- Too small next to display-1 -->
</section>
```

---

## 📐 Responsive Sizing Reference

### Scaling Ratios

**Display Headings** (more dramatic scaling):
- Display 1: 40px → 52px (30% ↑) → 68px (30% ↑)
- Display 2: 32px → 40px (25% ↑) → 48px (20% ↑)

**Standard Headings** (moderate scaling):
- H1: 36px → 48px (33% ↑) → 65px (35% ↑)
- H2: 28px → 32px (14% ↑) → 38px (18% ↑)
- H3-H6: Subtle scaling for readability

**Body Text** (minimal scaling):
- Body Large: 20px → 24px (20% ↑)
- Body Default: 16px → 18px (12.5% ↑)
- Body Small: 14px (no scaling)

---

## 🔍 Testing Responsiveness

View the design system page at different screen sizes:

**Local development**:
```bash
npm run dev
# Visit: http://localhost:4321/design
```

**Breakpoint testing**:
- Mobile: Resize browser to 375px-767px
- Tablet: Resize to 768px-1023px
- Desktop: Full screen (1024px+)

---

## 📚 Related Documentation

- **Full Design System**: `.claude/design-system.md`
- **Component Patterns**: `.claude/component-patterns.md`
- **Project Structure**: `.claude/folder-structure.md`
- **Tailwind Config**: `src/styles/global.css` (line 205+)

---

**Last Updated**: November 17, 2025
**Version**: 1.0
