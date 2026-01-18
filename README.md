# Everyday Properties Website

Modern real estate website for Everyday Properties, a Twin Cities-based company that helps homeowners sell properties that need work.

## Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** DM Sans (body) + DM Serif Display (headlines)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, Benefits, etc.)
│   └── ui/                 # Reusable UI components
└── lib/
    ├── animations.ts       # Framer Motion variants
    └── utils.ts            # Utility functions
```

## Design System

### Colors
- **Green:** #22c55e (CTAs, accents)
- **Dark:** #111111 (dark sections, text)
- **Cream:** #faf9f7 (alternating backgrounds)

### Typography
- **Headlines:** DM Serif Display (warm, emotive)
- **Body:** DM Sans (clean, professional)

### Reference Files
- `.cursor/references/` - Design tokens, component specs, copy
- `.cursor/design-inspiration/` - Type Five & Wunder patterns
- `wireframes-v4.html` - Visual wireframes (open in browser)

## Development Guide

See `CURSOR_BUILD_GUIDE.md` for detailed component prompts and build order.

### Recommended Build Order
1. Layout components (Navbar ✓, Footer ✓)
2. Hero section ✓ + TrustTicker ✓
3. ReshapingSection + BenefitsGrid
4. OptionsSection + CommitmentStatement
5. TestimonialsGrid + StatsBar
6. HandoffSection + DualCTA
7. Additional pages

## Design Inspiration
- [Type Five](https://typefive.com) - Typography, whitespace, split-screen layouts
- Wunder - Trust indicators, conversion patterns, stats
