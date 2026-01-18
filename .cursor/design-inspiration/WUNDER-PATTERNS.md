# Wunder Design Patterns

## Overview
Wunder's design aesthetic complements Type Five with strong focus on trust indicators, social proof, and conversion optimization. Their patterns inform Everyday Properties' credibility and conversion elements.

---

## Key Patterns from Wunder

### 1. Trust Ticker / Stats Bar
Scrolling horizontal bar with key metrics:
- Dark background (#111)
- Numbers in accent color (green)
- Text in muted color (#888-#999)
- Infinite scroll animation (25-30s duration)
- Creates urgency and social proof without being pushy

```
[ 150+ families helped | $2.4M value created | 24hr response | 100% transparent ]
```

### 2. Stats Section
Large, bold numbers that command attention:
- Number: 52px, bold, white on dark bg
- Symbols (+, $, ★) in accent green
- Label: 14px, muted color
- 4-column grid layout

### 3. Testimonial Cards
Image + quote format:
- Top: Photo area (240px height)
- Bottom: Quote + author
- Quote: 17px, semibold, high contrast
- Author: 14px, muted, with location/program type
- Cards have subtle background (#faf9f7)

### 4. Large Option Cards
For showcasing service offerings:
- Split layout (image | content)
- Image area: 50% width
- Content includes:
  - Badge (optional, for featured items)
  - Serif headline
  - Tagline in accent color
  - Body copy
  - Bullet list with checkmarks
  - CTA button

### 5. Process Timeline
Numbered steps showing workflow:
- Large faded numbers (72px, #f0f0f0 or #1a1a1a on dark)
- Strong title
- Brief description
- Time indicator in green

---

## Conversion Patterns

### Form Design
- Clean, generous padding (14-16px inputs)
- Clear labels with required indicators
- Grouped fields where logical (name: first/last)
- Single-column layout preferred
- Strong CTA button (full-width)
- Trust note below submit ("No obligation")

### Dual CTA Strategy
Two levels of commitment:
1. High commitment: "Get started" (green button)
2. Low commitment: "Book a call" (outline button)

This reduces friction for hesitant visitors.

### Comparison Tables
For options/pricing pages:
- Clean grid layout
- Key features as rows
- Options as columns
- Checkmarks (green) and X marks (red) for boolean
- Highlight recommended option

---

## Trust Elements

### Social Proof Indicators
- Total customers/families helped
- Average outcome improvement
- Response time guarantee
- Rating with star symbol
- Testimonial quotes with real names/locations

### Credibility Signals
- Local area emphasis (Twin Cities-specific)
- Team photos (approachable, professional)
- Process transparency
- "No obligation" language

---

## Animation Approach

Similar to Type Five but with these additions:

### Count-Up Animation
Stats numbers count up from 0 when scrolling into view:
- Duration: 1.5-2s
- Use IntersectionObserver trigger
- Easing: ease-out

### Ticker Animation
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
/* Duration: 25s, linear, infinite */
/* Content duplicated for seamless loop */
```

---

## Color Notes

Wunder uses similar color philosophy:
- High contrast for readability
- Accent color for actions and emphasis
- Muted colors for supporting text
- Dark backgrounds for premium feel (used sparingly)

---

## Mobile Considerations

From Wunder's responsive patterns:
- Single column for all card grids
- Reduced padding (24px horizontal)
- Smaller typography scale (hero: 36-40px)
- Full-width buttons
- Simplified navigation (hamburger)
- Stats bar: 2x2 grid instead of 4 columns
