# Component Architecture

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles, CSS variables
│   ├── options/
│   │   └── page.tsx        # Your Options page
│   ├── how-it-works/
│   │   └── page.tsx        # How It Works page
│   ├── get-started/
│   │   └── page.tsx        # Lead form page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with headline, CTAs, image
│   │   ├── TrustTicker.tsx # Scrolling stats bar
│   │   ├── ReshapingSection.tsx
│   │   ├── BenefitsGrid.tsx
│   │   ├── OptionsSection.tsx
│   │   ├── CommitmentStatement.tsx
│   │   ├── TestimonialsGrid.tsx
│   │   ├── HandoffSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── DualCTA.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── FAQSection.tsx
│   │   ├── TeamGrid.tsx
│   │   └── AreasGrid.tsx
│   └── ui/
│       ├── Button.tsx      # Primary/secondary/outline variants
│       ├── SectionHeader.tsx
│       ├── SectionLabel.tsx
│       ├── ImagePlaceholder.tsx
│       ├── OptionCard.tsx
│       ├── BenefitCard.tsx
│       ├── TestimonialCard.tsx
│       ├── StatItem.tsx
│       ├── ProcessStep.tsx
│       ├── FAQItem.tsx
│       └── Container.tsx
└── lib/
    ├── animations.ts       # Framer Motion variants
    └── utils.ts            # Utility functions (cn, etc.)
```

---

## Component Specifications

### Layout Components

#### Navbar
```typescript
interface NavbarProps {
  transparent?: boolean;  // For overlay on hero
}
```
- Sticky positioning (top: 0)
- White background with subtle border
- Logo: DM Serif + DM Sans combo
- Nav links: Your Options, How It Works, About
- CTA button: "Start here" (dark)
- Mobile: Hamburger menu (future)

#### Footer
```typescript
interface FooterProps {}
```
- 4-column grid (2fr 1fr 1fr 1fr)
- Brand column with logo + tagline
- Link columns: Explore, Areas, Contact
- Bottom bar: Copyright + legal links

---

### Section Components

#### Hero
```typescript
interface HeroProps {
  headline: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  imagePlaceholder: string;
}
```

#### TrustTicker
```typescript
interface TrustTickerProps {
  items: Array<{ value: string; label: string }>;
}
```
- CSS animation: translateX infinite scroll
- Duplicated content for seamless loop

#### ReshapingSection
```typescript
interface ReshapingSectionProps {
  headline: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  visualPlaceholder: string;
  reversed?: boolean;
}
```

#### BenefitsGrid
```typescript
interface Benefit {
  icon: string;  // Emoji
  title: string;
  description: string;
}

interface BenefitsGridProps {
  label: string;
  headline: string;
  benefits: Benefit[];
}
```

#### OptionsSection
```typescript
interface Option {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  imagePlaceholder: string;
  featured?: boolean;
  badge?: string;
}

interface OptionsSectionProps {
  label: string;
  headline: string;
  subheadline: string;
  options: Option[];
}
```

#### CommitmentStatement
```typescript
interface CommitmentStatementProps {
  quote: string;
  ctaText?: string;
  ctaHref?: string;
}
```

#### TestimonialsGrid
```typescript
interface Testimonial {
  quote: string;
  author: string;
  location: string;
  program: string;
  imagePlaceholder: string;
}

interface TestimonialsGridProps {
  label: string;
  headline: string;
  testimonials: Testimonial[];
}
```

#### HandoffSection
```typescript
interface HandoffSectionProps {
  headline: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  visualPlaceholder: string;
}
```

#### StatsBar
```typescript
interface Stat {
  value: string;
  symbol?: string;  // +, $, ★
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}
```

#### DualCTA
```typescript
interface DualCTAProps {
  primary: {
    headline: string;
    body: string;
    ctaText: string;
    ctaHref: string;
  };
  secondary: {
    headline: string;
    body: string;
    ctaText: string;
    ctaHref: string;
  };
}
```

---

### UI Components

#### Button
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'white' | 'green';
  size: 'default' | 'large';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}
```

#### SectionHeader
```typescript
interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}
```

#### ImagePlaceholder
```typescript
interface ImagePlaceholderProps {
  description: string;
  height?: string | number;
  className?: string;
  variant?: 'light' | 'dark' | 'green';
}
```

---

## Animation Variants (Framer Motion)

```typescript
// lib/animations.ts

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeUpStagger = {
  container: {
    animate: { transition: { staggerChildren: 0.1 } }
  },
  item: fadeUp
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};
```

---

## Responsive Breakpoints

All components should be mobile-first:

```typescript
// Tailwind classes pattern:
// Mobile → sm → md → lg → xl

// Example:
// px-6 sm:px-8 md:px-14 lg:px-14
// grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// text-4xl sm:text-5xl lg:text-6xl
```

---

## Accessibility Requirements

1. **All buttons**: Must have visible focus states
2. **All images**: Alt text (even placeholders should describe intended content)
3. **Navigation**: Keyboard navigable, ARIA labels
4. **Color contrast**: All text must pass WCAG AA
5. **Form inputs**: Associated labels, error states
6. **Animations**: Respect `prefers-reduced-motion`

```typescript
// Example: Reduced motion handling
const shouldAnimate = typeof window !== 'undefined' 
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
