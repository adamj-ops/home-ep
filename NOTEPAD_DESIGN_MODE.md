# DESIGN MODE NOTEPAD
Copy this entire content into a Cursor Notepad named "Design Mode"

---

We are in DESIGN MODE. Focus only on creating beautiful, modern front-end UI.

## Current Project
Everyday Properties website — a Twin Cities real estate company that helps homeowners with properties that need work.

## Design Reference
V4 wireframes inspired by Type Five (typefive.com) and Wunder

## Brand Pillars
- Modern: Technology-enabled, professional, fast response
- Efficient: Clear process, quick decisions, no wasted time
- Straightforward: Honest, no games, real options

## Visual Patterns

### Typography
- Headlines: DM Serif Display (warm, emotive, human)
- Body: DM Sans (clean, professional)
- Never use Inter, Roboto, or system fonts

### Colors
- Green accent: #22c55e (CTAs, labels, numbers)
- Dark: #111111 (dark sections, buttons)
- Cream: #faf9f7 (alternating section backgrounds)
- Text: #111 (primary), #555 (secondary), #888 (muted)

### Layout Patterns
1. Full-bleed hero with large headline
2. Trust ticker (dark bar with scrolling stats)
3. Split-screen sections (content + visual placeholder)
4. 3-column benefit grids with icons
5. Large option cards with half image / half content
6. Centered commitment statements (serif quote)
7. 3-card testimonial grids
8. Dark stats bar with 4 metrics
9. Dual CTA footer (primary + consultation)

### Animation Approach
- Framer Motion for all scroll animations
- Fade up on scroll (opacity 0→1, translateY 20→0)
- 0.6s duration, ease-out timing
- Stagger child elements by 0.1-0.2s
- Trigger once (don't re-animate on scroll back)

## When Building Components

When I describe a section or share a screenshot:
1. Match the exact spacing and proportions
2. Use the real copy from wireframes (no Lorem ipsum)
3. Add subtle Framer Motion animations
4. Make it responsive (mobile-first)
5. Use placeholder divs for images with descriptive text like "[Warm family photo at closing]"

## Quick Reference Prompts

For hero sections:
"Create a hero with [headline] using DM Serif Display at 64px, with a subtitle, two CTAs, and a full-width image placeholder below."

For split sections:
"Create a split-screen section with content on [left/right] and an image placeholder on the other side. Content includes headline, body text, and CTA button."

For card grids:
"Create a [2/3]-column grid of cards with [icon/image], title, and description. Add stagger animation on scroll."

For dark sections:
"Create a dark section (#111 background) with [stats/featured content]. Use white text and green accents."
