# Type Five Design Patterns

## Overview
Type Five (typefive.com) is a premium digital agency with exceptional typography, whitespace, and sophisticated animations. Their design language serves as primary inspiration for Everyday Properties.

---

## Key Visual Patterns

### 1. Typography Hierarchy
- **Headlines**: Large serif fonts, emotive language, humanizing tone
- **Size**: 52-64px for hero headlines
- **Line-height**: 1.08-1.15 (tight for impact)
- **Letter-spacing**: -0.5px to -1px (slightly condensed)
- **Body text**: Clean sans-serif, 17-19px, generous line-height (1.7)

### 2. Split-Screen Sections
Type Five frequently uses 50/50 split layouts:
- Left side: Content (headline, body, CTA)
- Right side: Full-height visual/video placeholder
- Content side has generous padding (80-100px)
- Visual side bleeds to edge

```
┌─────────────────────────────────────┐
│  Content Area  │    Visual Area    │
│                │                   │
│  Headline      │   [Image/Video]   │
│  Body text     │                   │
│  CTA Button    │                   │
│                │                   │
└─────────────────────────────────────┘
```

### 3. Section Rhythm
Alternating backgrounds create visual rhythm:
1. White (#ffffff)
2. Cream (#faf9f7)
3. Dark (#111111) - used sparingly for emphasis

### 4. Commitment Statements
Large, centered serif quotes that serve as brand manifestos:
- Font: Serif, 34-40px
- Centered, max-width ~900px
- Line-height: 1.35
- Often preceded/followed by simple CTA

### 5. Three-Pillar Grids
Benefits presented in 3-column layouts:
- Icon above (subtle, not cartoon-y)
- Bold title
- Short description
- Equal spacing (64px gap)

### 6. Dual CTA Pattern (Footer)
Two-tiered call-to-action before footer:
1. **Primary CTA**: White bg, large headline, green button
2. **Secondary CTA**: Cream bg, smaller, outline button ("Prefer to talk first?")

---

## Animation Principles

### Scroll Animations
- Elements fade up from opacity 0 → 1
- Translate Y from 20-30px → 0
- Duration: 0.5-0.7s
- Easing: ease-out
- **Trigger once** (don't re-animate on scroll back)

### Stagger Pattern
For grids and lists:
- First item: 0s delay
- Second item: 0.1s delay
- Third item: 0.2s delay
- Creates a "wave" effect

### Hover States
- Buttons: subtle lift (translateY -2px) + shadow
- Links: color transition 0.2s
- Cards: very subtle scale (1.01-1.02) or shadow increase

---

## Color Usage

### Primary Actions
- Green (#22c55e) for primary CTAs
- Dark (#111111) for secondary CTAs
- Never outline for primary actions

### Text Hierarchy
- #111111 - Headlines, strong emphasis
- #555555 - Body text, subheadlines
- #888888 - Muted text, labels, timestamps

### Section Labels
- Green (#22c55e)
- Uppercase, 11px
- Letter-spacing: 2px
- Font-weight: 600

---

## Spacing System

### Section Padding
- Vertical: 100-120px
- Horizontal: 56px (desktop), 24px (mobile)

### Content Max-Width
- Text blocks: 620-720px
- Full sections: 1100-1200px

### Component Gaps
- Between cards: 32px
- Grid gaps: 48-64px
- Button groups: 16px

---

## Implementation Notes

When building components inspired by Type Five:

1. **Never crowd elements** - When in doubt, add more whitespace
2. **Headlines should breathe** - Large bottom margins (24-32px)
3. **CTAs need room** - 36-48px margin-top before buttons
4. **Images should be large** - Min-height 400-520px for hero images
5. **Dark sections are statement pieces** - Use sparingly, with high contrast text
