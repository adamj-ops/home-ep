# Everyday Properties — Design Tokens

## Colors

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `green` | #22c55e | Primary CTAs, accent color, labels |
| `green-dark` | #16a34a | Hover states for green elements |
| `dark` | #111111 | Dark backgrounds, primary text, secondary buttons |
| `cream` | #faf9f7 | Alternating section backgrounds |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | #111111 | Headlines, strong emphasis |
| `text-secondary` | #555555 | Body text, subheadlines |
| `text-muted` | #888888 | Labels, captions, meta text |
| `text-light` | #999999 | Text on dark backgrounds (ticker) |

### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-white` | #ffffff | Default section background |
| `bg-cream` | #faf9f7 | Alternating sections, cards |
| `bg-dark` | #111111 | Dark sections, featured cards |
| `bg-footer` | #0a0a0a | Footer background |

### Border Colors
| Token | Hex/RGBA | Usage |
|-------|----------|-------|
| `border-light` | rgba(0,0,0,0.06) | Navbar border, subtle dividers |
| `border-medium` | #e5e5e5 | Form inputs, card borders |
| `border-dark` | #222222 | Footer dividers |

---

## Typography

### Font Families
| Token | Font Stack | Usage |
|-------|------------|-------|
| `font-serif` | 'DM Serif Display', Georgia, serif | Headlines, quotes |
| `font-sans` | 'DM Sans', system-ui, sans-serif | Body, UI elements |

### Font Sizes
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-hero` | 64px | 1.08 | Hero headline |
| `text-h1` | 52px | 1.1 | Page titles |
| `text-h2` | 44px | 1.15 | Section headlines |
| `text-h3` | 38px | 1.2 | Sub-section headlines |
| `text-h4` | 34px | 1.2 | Card titles |
| `text-quote` | 36px | 1.35 | Commitment statements |
| `text-xl` | 19px | 1.7 | Hero subtitle |
| `text-lg` | 17px | 1.7 | Body text |
| `text-base` | 15px | 1.65 | Small body, lists |
| `text-sm` | 14px | 1.5 | Links, meta |
| `text-xs` | 13px | 1.4 | Footer text |
| `text-label` | 11px | 1.2 | Section labels |

### Font Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text, serif headlines |
| `font-medium` | 500 | Links, buttons |
| `font-semibold` | 600 | Card titles, labels |
| `font-bold` | 700 | Stats numbers |

### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | -1px | Hero headlines |
| `tracking-snug` | -0.5px | Section headlines |
| `tracking-normal` | -0.1px | Body, buttons |
| `tracking-wide` | 2px | Labels (uppercase) |

---

## Spacing

### Section Padding
| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| `section-y` | 110px | 64px | Vertical section padding |
| `section-x` | 56px | 24px | Horizontal section padding |
| `section-y-sm` | 70px | 48px | Smaller sections |
| `section-y-lg` | 120px | 80px | Hero, commitment |

### Component Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Minimal gaps |
| `space-2` | 8px | Icon/text gaps |
| `space-3` | 12px | List item margins |
| `space-4` | 16px | Button groups, form gaps |
| `space-5` | 20px | Section header gaps |
| `space-6` | 24px | Card content padding |
| `space-8` | 32px | Between cards |
| `space-10` | 40px | Team member gaps |
| `space-12` | 48px | Grid gaps |
| `space-16` | 64px | Large grid gaps |
| `space-18` | 72px | Section header bottom |
| `space-20` | 80px | Split section padding |

### Content Max-Widths
| Token | Value | Usage |
|-------|-------|-------|
| `max-w-text` | 540px | Hero subtitle |
| `max-w-content` | 620-720px | Section headers |
| `max-w-section` | 1100px | Benefits grid |
| `max-w-page` | 1200px | Page container |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 6px | Small elements, badges |
| `rounded` | 8px | Buttons, inputs |
| `rounded-lg` | 12px | Small cards |
| `rounded-xl` | 16px | Cards, icons |
| `rounded-2xl` | 20px | Large cards, option rows |
| `rounded-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | 0 2px 8px rgba(0,0,0,0.04) | Subtle lift |
| `shadow` | 0 4px 16px rgba(0,0,0,0.08) | Cards, form container |
| `shadow-lg` | 0 8px 32px rgba(0,0,0,0.12) | Modals, dropdowns |

---

## Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 150ms | Instant feedback |
| `duration-base` | 200ms | Default transitions |
| `duration-slow` | 300ms | Larger animations |
| `duration-animation` | 600ms | Scroll animations |
| `ease-default` | ease-out | Most transitions |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Default |
| `z-above` | 10 | Elevated elements |
| `z-sticky` | 100 | Sticky navbar |
| `z-modal` | 1000 | Modals, overlays |
| `z-toast` | 1100 | Notifications |

---

## Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1440px | Large screens |
