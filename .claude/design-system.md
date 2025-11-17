# Design System Reference - Plumbing X Template

> **Source**: Webflow Plumbing X Template by BRIX Templates  
> **Purpose**: Complete style guide for Hodinový opravár website rebuild  
> **Note**: Primary/Secondary colors may be customized in future iterations

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-blue: #3083FF;        /* Main CTA buttons, links, primary actions */
--primary-blue-hover: #1871F6;  /* Hover states for primary elements */
```

### Secondary Colors
```css
--secondary-light-blue: #F4F9FF; /* Light backgrounds, card backgrounds */
--secondary-yellow: #FDB52A;     /* Accents, warnings, highlights */
```

### Neutral Colors (Grayscale System)
```css
--neutral-800: #182944;  /* Darkest - hero backgrounds, dark sections, headers */
--neutral-700: #455266;  /* Dark text, subheadings */
--neutral-600: #6E7891;  /* Medium text, secondary content */
--neutral-500: #A0A8BD;  /* Muted text, placeholders */
--neutral-400: #DCE6FA;  /* Light borders, dividers */
--neutral-300: #EFF0F6;  /* Card backgrounds, light sections */
--neutral-200: #F7F7FC;  /* Section backgrounds, alternate rows */
--neutral-100: #FFFFFF;  /* White, main backgrounds */
```

### System Colors (Semantic)

**Blues - Info/Primary Actions**
```css
--blue-400: #086CD9;
--blue-300: #1D88FE;
--blue-200: #8FC3FF;
--blue-100: #EAF4FF;
```

**Greens - Success States**
```css
--green-400: #11845B;
--green-300: #05C168;
--green-200: #7FDCA4;
--green-100: #DEF2E6;
```

**Reds - Error/Urgent States**
```css
--red-400: #DC2B2B;
--red-300: #FF5A65;
--red-200: #FFBEC2;
--red-100: #FFEFF0;
```

**Oranges - Warning States**
```css
--orange-400: #D5691B;
--orange-300: #FF9E2C;
--orange-200: #FFD19B;
--orange-100: #FFF3E4;
```

---

## 📝 Typography System

### Font Family
```css
font-family: 'Outfit', sans-serif;
```

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap" rel="stylesheet">
```

### Special Headings (For Hero/Featured Sections)

| Style | Weight | Size | Line Height | Usage |
|-------|--------|------|-------------|-------|
| Display 1 | Bold (700) | 68px | 1.088em | Extra large hero headings |
| Display 2 | Bold (700) | 48px | 1.208em | Large hero headings |
| Display 3 | Bold (700) | 28px | 1.286em | Medium featured headings |
| Display 4 | Bold (700) | 24px | 1.417em | Small featured headings |

### Standard Headings

| Style | Weight | Size | Line Height | Usage |
|-------|--------|------|-------------|-------|
| H1 | Bold (700) | 65px | 1.077em | Page titles |
| H2 | Bold (700) | 38px | 1.316em | Section headings |
| H3 | Bold (700) | 24px | 1.417em | Subsection headings |
| H4 | Bold (700) | 22px | 1.273em | Card titles |
| H5 | Bold (700) | 18px | 1.333em | Small headings |
| H6 | Bold (700) | 16px | 1.375em | Tiny headings |

### Body Text

| Style | Weight | Size | Line Height | Usage |
|-------|--------|------|-------------|-------|
| Body Large | Regular (400) | 24px | 1.583em | Lead paragraphs, introductions |
| Body Default | Regular (400) | 18px | 1.667em | Standard body text |
| Body Small | Regular (400) | 14px | 1.714em | Captions, small print, metadata |

### Text Utility Sizes

| Size | Font Size | Line Height | Available Weights |
|------|-----------|-------------|-------------------|
| Text 400 | 24px | 1.583em | Regular, Medium, Bold |
| Text 300 | 20px | 1.6em | Regular, Medium, Bold |
| Text 200 | 18px | 1.556em | Regular, Medium, Bold |
| Text 100 | 16px | 1.625em | Regular, Medium, Bold |

---

## 🔘 Button System

### Primary Buttons
- **Background**: Primary Blue (#3083FF)
- **Text**: White (#FFFFFF)
- **Font**: Outfit Medium/Bold
- **Hover State**: Darker Blue (#1871F6)
- **Active State**: Further darkened with shadow inset
- **Shadow**: Custom button shadow

**Sizes:**
- **Small**: Compact padding
- **Default**: Standard size
- **Large**: Prominent CTAs

### Secondary Buttons
- **Background**: Transparent/White
- **Border**: 2px solid Primary Blue (#3083FF)
- **Text**: Primary Blue (#3083FF)
- **Hover State**: Light blue background (#F4F9FF)
- **Active State**: Slightly darker background

**Sizes:**
- **Small**: Compact padding
- **Default**: Standard size
- **Large**: Prominent secondary actions

### Circle Buttons
**Primary Circle:**
- Blue background
- White icon
- Used for: Play buttons, navigation arrows

**Secondary Circle:**
- White/transparent background
- Blue icon
- Outlined style

### Download App Buttons
- **iOS**: Apple logo + "Download for iOS"
- **Android**: Android logo + "Download for Android"
- Primary blue styling
- Icon + text horizontal layout

---

## 🏷️ Badge System

### Primary Badges
- **Background**: Solid colors (Blue, Green, Red, Orange)
- **Text**: White
- **Border-radius**: Rounded
- **Padding**: Compact

**Sizes:**
- **Small**: Minimal padding
- **Default**: Standard size
- **Large**: Prominent badges

### Secondary Badges
- **Background**: Light tints (#F4F9FF, #EAF4FF, etc.)
- **Text**: Corresponding darker color
- **Border-radius**: Rounded
- **Style**: Subtle, less prominent

**Sizes:**
- **Small**: Minimal padding
- **Default**: Standard size
- **Large**: Prominent badges

---

## 📦 Form Components

### Text Input
```css
Border: 1px solid #DCE6FA (neutral-400)
Border-radius: 8px (rounded)
Padding: 12-16px
Font-size: 16px
Font-weight: Regular (400)
Background: White (#FFFFFF)

Focus State:
Border-color: #3083FF (primary-blue)
Box-shadow: 0 0 0 3px rgba(48, 131, 255, 0.1)
```

**Label:**
- Font-size: 14-16px
- Font-weight: Medium (500)
- Color: Neutral 700 (#455266)
- Margin-bottom: 8px

**Placeholder:**
- Color: Neutral 500 (#A0A8BD)
- Font-style: Regular

### Textarea
- Same styling as Text Input
- Min-height: 120px
- Resize: Vertical only

### Checkboxes
- **Size**: 20x20px
- **Border**: 2px solid #DCE6FA
- **Border-radius**: 4px (slightly rounded)
- **Checked State**: 
  - Background: Primary Blue (#3083FF)
  - Checkmark: White
- **Hover**: Border color darkens

### Radio Buttons
- **Size**: 20x20px (outer circle)
- **Border**: 2px solid #DCE6FA
- **Border-radius**: 50% (full circle)
- **Checked State**:
  - Border: Primary Blue (#3083FF)
  - Inner dot: Primary Blue (#3083FF)
  - Inner dot size: 10x10px
- **Hover**: Border color darkens

---

## 🎭 Shadow System

### General Shadows (6 Variants)

**Usage:**
- **Shadow 01**: Subtle elevation for cards at rest
- **Shadow 02**: Medium elevation for hover states
- **Shadow 03**: Strong elevation for modals, dropdowns
- **Shadow 04**: Contextual use
- **Shadow 05**: Contextual use
- **Shadow 06**: Contextual use

**Approximate Values:**
```css
--shadow-01: 0 2px 8px rgba(24, 41, 68, 0.06);
--shadow-02: 0 4px 16px rgba(24, 41, 68, 0.08);
--shadow-03: 0 8px 24px rgba(24, 41, 68, 0.12);
--shadow-04: 0 12px 32px rgba(24, 41, 68, 0.15);
--shadow-05: 0 16px 40px rgba(24, 41, 68, 0.18);
--shadow-06: 0 20px 48px rgba(24, 41, 68, 0.20);
```

### Button Shadows (3 Variants)

```css
--button-shadow-01: 0 2px 8px rgba(48, 131, 255, 0.2);    /* Primary button rest */
--button-shadow-02: 0 4px 12px rgba(48, 131, 255, 0.3);   /* Primary button hover */
--button-shadow-03: 0 1px 4px rgba(48, 131, 255, 0.4);    /* Primary button active */
```

### White Button Shadows

```css
--white-button-shadow-01: 0 2px 8px rgba(24, 41, 68, 0.08);
--white-button-shadow-02: 0 4px 12px rgba(24, 41, 68, 0.12);
--white-button-shadow-03: 0 1px 4px rgba(24, 41, 68, 0.15);
```

---

## 🔣 Iconography

### Icon Styles

1. **Line Icons Rounded**
   - Stroke-based icons
   - Rounded line caps and corners
   - Consistent stroke width: 1.5-2px
   - Usage: Primary icon style

2. **Line Icons Square**
   - Stroke-based icons
   - Square line caps and corners
   - Consistent stroke width: 1.5-2px
   - Usage: Alternative style

3. **Filled Icons**
   - Solid fill, no stroke
   - Usage: Active states, emphasis

4. **Social Media Icons**
   - Platform-specific branded icons
   - Filled style
   - Usage: Footer, social links

### Icon Sizes

| Size | Dimensions | Usage |
|------|-----------|--------|
| Small | 16x16px | Inline with text, small buttons |
| Default | 20-24px | Standard UI elements |
| Large | 32-40px | Feature icons, service icons |
| Extra Large | 48-64px | Hero sections, major features |

### Square Icon Containers

- **Background**: Colored squares (Primary, Secondary, or Neutral)
- **Icon color**: White or contrasting color
- **Padding**: 12-16px
- **Border-radius**: 8-12px
- **Usage**: Service cards, feature highlights

---

## 🖼️ Image & Media Treatment

### Image Styles

**Border-radius:**
```css
--image-radius-sm: 8px;   /* Small images, thumbnails */
--image-radius-md: 12px;  /* Standard images, cards */
--image-radius-lg: 16px;  /* Large images, hero sections */
```

**Aspect Ratios:**
- **Square**: 1:1 (avatars, icons)
- **Landscape**: 16:9, 4:3 (service photos, gallery)
- **Portrait**: 3:4 (team photos, testimonials)

### Avatars

**Circle Avatars:**
- **Small**: 40x40px
- **Default**: 64x64px
- **Large**: 96x96px
- **Extra Large**: 128x128px

**Border**: Optional 2px white border with subtle shadow

### Image Hover Effects

```css
/* Typical hover effect */
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-03);
}
```

---

## 📏 Spacing System

### Base Unit: 8px Grid

```css
--spacing-1: 4px;    /* 0.5 unit - very tight */
--spacing-2: 8px;    /* 1 unit - tight */
--spacing-3: 12px;   /* 1.5 units */
--spacing-4: 16px;   /* 2 units - small */
--spacing-5: 20px;   /* 2.5 units */
--spacing-6: 24px;   /* 3 units - medium */
--spacing-8: 32px;   /* 4 units - large */
--spacing-10: 40px;  /* 5 units */
--spacing-12: 48px;  /* 6 units - extra large */
--spacing-16: 64px;  /* 8 units */
--spacing-20: 80px;  /* 10 units - section padding */
--spacing-24: 96px;  /* 12 units */
--spacing-32: 128px; /* 16 units - large sections */
```

### Component Spacing

**Card Padding:**
- Small cards: 16-24px
- Standard cards: 24-32px
- Large cards: 32-48px

**Section Padding (Vertical):**
- Small sections: 48-64px
- Standard sections: 80-96px
- Large sections: 120-160px

**Container Max-width:**
- Default: 1200-1280px
- Wide: 1400-1440px
- Full: 100%

**Grid Gaps:**
- Tight: 16px
- Standard: 24px
- Loose: 32-48px

---

## 📐 Layout Patterns

### Container System

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-wide {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-full {
  width: 100%;
  padding: 0 24px;
}
```

### Grid Patterns

**2-Column Split (50/50):**
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 48px;
```

**3-Column Grid:**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
```

**4-Column Grid:**
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 24px;
```

**60/40 Split:**
```css
display: grid;
grid-template-columns: 3fr 2fr;
gap: 48px;
```

---

## 🔗 Links & Navigation

### Text Links

```css
color: var(--primary-blue);
text-decoration: none;
font-weight: 500;
transition: color 0.2s ease;

&:hover {
  color: var(--primary-blue-hover);
  text-decoration: underline;
}
```

### Navigation Links

```css
/* Default state */
color: var(--neutral-700);
font-size: 16px;
font-weight: 500;
padding: 8px 16px;

/* Hover state */
&:hover {
  color: var(--primary-blue);
}

/* Active state */
&.active {
  color: var(--primary-blue);
  font-weight: 700;
}
```

---

## 🎬 Animation & Transitions

### Standard Transitions

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-medium: 0.3s ease;
--transition-slow: 0.4s ease;
```

### Common Animations

**Fade In:**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up:**
```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale In:**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Hover Effects

**Button Hover:**
```css
transition: all 0.2s ease;

&:hover {
  transform: translateY(-2px);
  box-shadow: var(--button-shadow-02);
}
```

**Card Hover:**
```css
transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-02);
}
```

---

## 📱 Responsive Breakpoints

### Breakpoint System

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices (phones) */
--breakpoint-md: 768px;   /* Medium devices (tablets) */
--breakpoint-lg: 1024px;  /* Large devices (laptops) */
--breakpoint-xl: 1280px;  /* Extra large devices (desktops) */
--breakpoint-2xl: 1536px; /* 2X large devices (large desktops) */
```

### Typography Responsive Scaling

**Display 1:**
- Mobile: 40px
- Tablet: 52px
- Desktop: 68px

**H1:**
- Mobile: 36px
- Tablet: 48px
- Desktop: 65px

**H2:**
- Mobile: 28px
- Tablet: 32px
- Desktop: 38px

**Body:**
- Mobile: 16px
- Desktop: 18px

---

## 🎨 Component Design Patterns

### Card Component

```css
.card {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-01);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-02);
  transform: translateY(-4px);
}
```

### Service Card

```css
.service-card {
  /* Base card styles */
  text-align: center;
}

.service-card__icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  /* Icon container with colored background */
}

.service-card__title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-card__description {
  font-size: 16px;
  color: var(--neutral-600);
  margin-bottom: 16px;
}

.service-card__link {
  color: var(--primary-blue);
  font-weight: 500;
}
```

### Testimonial Card

```css
.testimonial-card {
  background: var(--neutral-100);
  border-radius: 12px;
  padding: 32px;
  box-shadow: var(--shadow-01);
}

.testimonial-card__quote {
  font-size: 18px;
  line-height: 1.667;
  margin-bottom: 24px;
  color: var(--neutral-700);
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.testimonial-card__name {
  font-weight: 700;
  font-size: 16px;
  color: var(--neutral-800);
}

.testimonial-card__location {
  font-size: 14px;
  color: var(--neutral-600);
}
```

---

## 🎯 Design Principles

### 1. Consistency
- Use the 8px spacing grid throughout
- Maintain consistent border-radius values
- Apply shadow system consistently

### 2. Hierarchy
- Clear visual hierarchy through size, weight, and color
- Headings use bold weight (700)
- Body text uses regular weight (400)

### 3. Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Focus states clearly visible
- Interactive elements minimum 44x44px touch target

### 4. Color Usage
- Primary blue for actions and emphasis
- Neutral colors for content
- Semantic colors for states (success, error, warning)
- White space for breathing room

### 5. Typography
- Generous line-height for readability
- Clear hierarchy through size and weight
- Consistent font family throughout (Outfit)

---

## 📦 Component Library Structure

### Core Components
- Button (Primary, Secondary, Circle)
- Card (Standard, Service, Testimonial)
- Input (Text, Textarea, Checkbox, Radio)
- Badge (Primary, Secondary)
- Avatar
- Icon Container

### Layout Components
- Container
- Section
- Grid (2-col, 3-col, 4-col)
- Split Layout (50/50, 60/40)

### Navigation Components
- Header
- Navigation Menu
- Footer
- Link

### Content Components
- Heading (H1-H6, Display 1-4)
- Paragraph (Body Large, Default, Small)
- List (Bullet, Numbered)
- Blockquote
- Image with Caption

---

## 🔄 Future Customization Notes

### Planned Modifications
- [ ] Primary color may change from #3083FF
- [ ] Secondary color palette may be adjusted
- [ ] Additional service-specific colors may be added
- [ ] Slovak language typography considerations

### What to Keep Consistent
- ✅ Spacing system (8px grid)
- ✅ Typography scale (font sizes and line heights)
- ✅ Component structure and patterns
- ✅ Shadow system
- ✅ Border-radius values
- ✅ Responsive breakpoints

---

## 📚 Resources

### Font
- **Outfit**: [Google Fonts - Outfit](https://fonts.google.com/specimen/Outfit)
- Weights needed: 400 (Regular), 500 (Medium), 700 (Bold)

### Icons
- Consider: [Lucide Icons](https://lucide.dev/) - matches line rounded style
- Alternative: [Hero Icons](https://heroicons.com/)
- Social: [Simple Icons](https://simpleicons.org/)

### Tools
- Color contrast checker: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Design tokens: Export to Tailwind config
- Component storybook: For development reference

---

**Document Version**: 1.0  
**Last Updated**: November 13, 2025  
**Status**: Initial reference - pending customization
