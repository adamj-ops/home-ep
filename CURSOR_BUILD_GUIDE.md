# Everyday Properties Website — Cursor AI Development Guide

## Overview
Build the Everyday Properties V4 website using Cursor AI + Next.js + Framer Motion + Tailwind CSS.

**Design Reference:** everyday-properties-v4.html (wireframes)
**Design Inspiration:** Type Five (typefive.com), Wunder
**Brand:** Modern. Efficient. Straightforward.
**Color Palette:** 
- Primary: #22c55e (green)
- Dark: #111111
- Light: #faf9f7 (cream)
- Text: #111, #555, #666, #888

---

## 1. Initial Setup Commands

```bash
# Create Next.js project
npx create-next-app@latest everyday-properties --typescript --tailwind --eslint --app --src-dir

cd everyday-properties

# Install dependencies
npm install framer-motion

# Initialize ShadCN UI
npx shadcn-ui@latest init

# Add Google Fonts to next.config.js or layout.tsx
# Fonts: DM Sans (400, 500, 600, 700), DM Serif Display (400)
```

---

## 2. Cursor Rules File

Create `.cursorrules` in project root:

```
You are building a real estate website for Everyday Properties, a Twin Cities-based company that helps homeowners sell properties that need work.

BRAND VOICE:
- Modern, efficient, straightforward
- Warm and human, not corporate
- Options-focused, not pressure sales
- Professional but approachable

DESIGN PRINCIPLES:
- Typography: DM Serif Display for headlines (emotive, warm), DM Sans for body
- Colors: Green (#22c55e) for CTAs and accents, Dark (#111) for contrast, Cream (#faf9f7) for warmth
- Spacing: Generous whitespace, 56px standard section padding
- Animations: Subtle, purposeful, using Framer Motion
- Images: Placeholder divs with descriptive text for now

TECH STACK:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- ShadCN UI components where appropriate

CODE STYLE:
- Use TypeScript strictly
- Component-based architecture
- Mobile-first responsive design
- Semantic HTML
- Accessibility-first (ARIA labels, focus states)

NEVER:
- Use stock photo URLs (use placeholder divs)
- Use generic Lorem ipsum (use real copy from wireframes)
- Over-animate (subtle is better)
- Use Inter or Roboto fonts
```

---

## 3. Design Mode Notepad

Create notepad in Cursor named "Design Mode":

```
We are in DESIGN MODE. Focus only on creating beautiful, modern front-end UI.

Current project: Everyday Properties website
Design reference: V4 wireframes (Type Five + Wunder inspired)

Key visual patterns:
1. Serif headlines (DM Serif Display) - emotive, warm
2. Large hero sections with full-bleed images
3. Alternating white/cream sections
4. Green accent color (#22c55e) for CTAs
5. Stats ticker with scrolling animation
6. Large numbered process steps
7. Split-screen testimonial cards
8. Dual CTA pattern (primary + consultation)

When I share a screenshot or describe a section, recreate it with:
- Framer Motion animations (fade in, slide up on scroll)
- Tailwind CSS styling
- Responsive design (mobile-first)
- Real copy from the wireframes
```

---

## 4. Component Prompts (Copy/Paste into Cursor)

### PROMPT 1: Project Structure & Layout

```
Set up the project structure for Everyday Properties website:

1. Create these directories:
   - src/components/layout (Navbar, Footer)
   - src/components/sections (Hero, Benefits, Options, etc.)
   - src/components/ui (Button, Card, etc.)
   - src/lib (utilities)

2. Create src/app/layout.tsx with:
   - Google Fonts: DM Sans (400, 500, 600, 700) and DM Serif Display (400)
   - Global styles
   - Metadata for SEO

3. Create a globals.css with:
   - CSS variables for colors:
     --green: #22c55e
     --green-dark: #16a34a
     --dark: #111111
     --cream: #faf9f7
     --text-primary: #111111
     --text-secondary: #555555
     --text-muted: #888888

4. Set up Tailwind config extending these colors
```

### PROMPT 2: Navbar Component

```
Create a sticky Navbar component matching this design:

Layout:
- Logo on left: "Everyday" in DM Serif Display + "Properties" in DM Sans (lighter weight)
- Nav links center-right: "Your Options", "How It Works", "About"
- CTA button far right: "Start here" (dark background, white text)

Styling:
- White background
- Subtle bottom border (rgba(0,0,0,0.06))
- Padding: 24px vertical, 56px horizontal
- Sticky with top: 0, z-index: 100
- Links: #555 color, hover to #111
- Button: #111 bg, rounded-lg, 13px 26px padding

Animation:
- Fade in on page load using Framer Motion
- Optional: background becomes slightly opaque on scroll
```

### PROMPT 3: Hero Section

```
Create the Hero section with this exact content:

Headline (DM Serif Display, 64px):
"A fresh start for your home. And for you."

Subheadline (DM Sans, 19px, #555):
"Whether you're ready to move on, need help with a property that needs work, or simply want to explore what's possible — we're here with real options, not pressure."

CTAs (two buttons side by side):
1. "Start here" - green background (#22c55e), white text
2. "See how it works" - outline style, dark border

Image placeholder below (full-width, extends past container):
- Height: 520px
- Gray gradient background
- Centered text: "[Warm, inviting home exterior — family arriving, keys in hand]"

Animation:
- Headline fades up on load (0.6s)
- Subheadline fades up after (0.8s delay)
- Buttons fade up after (1s delay)
- Image placeholder slides up (1.2s delay)

Spacing:
- Section padding: 100px top, 56px horizontal
- Max-width on text content: 720px
- 36px gap between subheadline and CTAs
- 48px gap between CTAs and image
```

### PROMPT 4: Trust Ticker

```
Create an animated Trust Ticker bar:

Content (repeating):
- "150+ Twin Cities families helped"
- "$2.4M additional value created"  
- "24hr response time"
- "100% transparent pricing"

Styling:
- Background: #111
- Text: #999 with green (#22c55e) numbers
- Padding: 18px vertical
- Font size: 14px for text, 18px for numbers

Animation:
- Infinite horizontal scroll using CSS animation
- Duration: 25 seconds
- Linear timing
- Content duplicated to create seamless loop
- Gap between items: 80px
```

### PROMPT 5: Re-shaping Section (Type Five Pattern)

```
Create a split-screen "Re-shaping" section:

Layout: 2-column grid, full viewport width, min-height 600px

LEFT SIDE (content):
- Background: #faf9f7 (cream)
- Padding: 100px 80px
- Vertically centered content

Headline (DM Serif Display, 40px):
"Re-shaping the way homeowners sell."

Body (DM Sans, 17px, #555):
"Most investors compete on one thing: buying as cheap as possible. We built something different — a company that gives you real options and helps you get the outcome you actually want."

CTA Button: "Explore your options" (dark style)

RIGHT SIDE (visual placeholder):
- Gray gradient background
- Centered text: "[Subtle video loop or before/after transformation]"

Animation:
- Content fades in from left
- Visual placeholder fades in from right
- Triggered on scroll into view
```

### PROMPT 6: Benefits Grid (Type Five 3-Pillar)

```
Create a Benefits section with 3-pillar grid:

Section header (centered):
- Label: "WHY EVERYDAY" (green, uppercase, 11px, letter-spacing: 2px)
- Headline: "A better way to sell your home." (DM Serif Display, 44px)

Grid: 3 columns, 64px gap, max-width 1100px centered

Each benefit card:
- Icon container: 64x64px, #f5f5f5 bg, rounded-xl, 28px emoji
- Title: 19px, semibold, #111
- Description: 15px, #666, line-height 1.7

Benefits:
1. 🏡 "Options, not ultimatums" - "Cash offer, renovation partnership, or bridge to market value — you choose the path that fits your life."
2. ⚡ "Answers in 24 hours" - "No weeks of waiting. We respond same-day and give you real numbers to consider, fast."
3. 🤝 "Honest, always" - "If we're not the right fit, we'll tell you. We'd rather earn trust than close a bad deal."

Animation: Stagger fade-up on scroll (0.2s delay between items)
Background: #faf9f7 (cream section)
```

### PROMPT 7: Options Cards (Large Image Style)

```
Create the Options section with 3 large cards stacked vertically:

Section header:
- Label: "YOUR OPTIONS" (green)
- Headline: "Three paths forward. You choose." (DM Serif Display, 44px)
- Subhead: "Every homeowner's situation is different. We offer multiple ways to help, so you can pick what works for you."

Card Layout: 2-column grid per card, min-height 480px, 32px gap between cards, rounded-[20px]

CARD 1 - Cash Offer:
- Left: Image placeholder "[Family handing over keys, relief on faces]"
- Right: Content on cream background
- Title: "Cash Offer" (DM Serif Display, 34px)
- Tagline: "Simple. Fast. Done." (green, 15px)
- Body copy + bullet list
- CTA: "Get a cash offer" (dark button)

CARD 2 - Remodel Partnership (FEATURED):
- REVERSED layout (image right, content left)
- Dark background (#111) with white text
- Badge: "Most Popular" (green pill)
- Title: "Remodel Partnership"
- Tagline: "We invest. You profit."
- CTA: "Learn more" (white button)

CARD 3 - Bridge to Goal:
- Same as Card 1 layout
- Title: "Bridge to Goal"
- Tagline: "Hit your number."
- CTA: "Explore bridge options"

Animation: Each card fades up on scroll
```

### PROMPT 8: Commitment Statement

```
Create a Commitment Statement section (Type Five pattern):

Full-width section, centered, white background
Padding: 120px vertical

Quote (DM Serif Display, 36px, #111, centered):
"Our commitment to honest guidance combined with real options means you get the outcome that's right for your situation — not just ours."

Max-width: 900px
Line-height: 1.35
Letter-spacing: -0.5px

Below quote:
CTA: "Meet our team" (outline style button)

Animation: Quote fades up, button fades up with delay
```

### PROMPT 9: Testimonials Grid (3-Card)

```
Create Testimonials section with 3-card grid:

Section header (centered):
- Label: "SUCCESS STORIES" (green)
- Headline: "Hear from homeowners like you."

Grid: 3 columns, 32px gap

Each testimonial card:
- Image area: 240px height, gray placeholder
- Content padding: 32px
- Quote: 17px, #111, semibold, line-height 1.6
- Author: 14px, #888
- Author name: bold, #333

Testimonials:
1. Kersti M., Plymouth, MN — Remodel Partnership
   "I got all the benefits of a full renovation without any of the stress. They handled everything."

2. John & Lisa R., Eden Prairie, MN — Cash Offer
   "We needed to move fast for a job relocation. They closed in 10 days with zero hassle."

3. Julie T., St. Louis Park, MN — Cash Offer
   "After inheriting my parents' home, I didn't know what to do. They walked me through every option with patience."

Background: #faf9f7 (cream)
Animation: Cards stagger fade-up on scroll
```

### PROMPT 10: Hand-off Section

```
Create the "You Choose, We Deliver" section:

Split layout: 2-column grid, min-height 550px

LEFT SIDE (visual):
- Gray gradient placeholder
- Text: "[Video: Project transformation timeline]"

RIGHT SIDE (content):
- White background
- Padding: 100px 80px
- Vertically centered

Headline (DM Serif Display, 38px):
"You choose your path. We handle the rest."

Body (17px, #555):
"Our team of renovation experts, agents, and transaction coordinators will guide you from first conversation to closing day, ensuring a seamless experience."

CTA: "See how it works" (dark button)

Animation: Content slides in from right on scroll
```

### PROMPT 11: Stats Bar

```
Create a Stats Bar section:

Full-width, dark background (#111)
Padding: 72px vertical
4-column grid, centered

Stats:
1. "150+" (52px, white, bold) / "Families helped" (14px, #888)
2. "$75K" (52px, white) / "Avg. extra with partnership" (14px, #888)
3. "45" (52px, white) / "Avg. days to close" (14px, #888)  
4. "4.9★" (52px, white with green star) / "Google rating" (14px, #888)

Numbers should use green (#22c55e) for symbols (+, $, ★)

Animation: Numbers count up when section scrolls into view (optional)
```

### PROMPT 12: Dual CTA Footer

```
Create a dual CTA section (Type Five pattern):

SECTION 1 - Primary CTA:
- White background
- Padding: 100px vertical
- Centered text

Headline (DM Serif Display, 38px):
"Ready to see your options?"

Body (17px, #666):
"Let's find out what's possible for your home — no obligation, no pressure."

CTA: "Get started →" (green button, large)

SECTION 2 - Consultation CTA:
- Cream background (#faf9f7)
- Border-top: 1px solid #eee
- Padding: 60px vertical
- Centered

Headline (20px, semibold):
"Prefer to talk first?"

Body (15px, #666):
"Schedule a free 15-minute call to discuss your situation and learn about your options."

CTA: "Book a call" (outline button)
```

### PROMPT 13: Footer

```
Create the Footer component:

Background: #0a0a0a (near black)
Padding: 80px top, 40px bottom, 56px horizontal

Grid: 4 columns (2fr 1fr 1fr 1fr), 64px gap

Column 1 - Brand:
- Logo: "Everyday Properties" (serif + sans style, white)
- Tagline: "Helping Twin Cities homeowners find better options for properties that need work." (14px, #888)

Column 2 - Explore:
- Header: "EXPLORE" (13px, white, uppercase)
- Links: Your Options, How It Works, About Us, FAQ (14px, #888, hover white)

Column 3 - Areas:
- Header: "AREAS"
- Links: Plymouth, Maple Grove, Eden Prairie, All Areas →

Column 4 - Contact:
- Header: "CONTACT"
- Links: (612) 555-0123, hello@everydayproperties.com, Minneapolis, MN

Bottom bar:
- Border-top: 1px solid #222
- Padding-top: 32px
- Flex between: "© 2026 Everyday Properties" and "Privacy • Terms"
- Font: 13px, #666
```

---

## 5. Page Assembly Prompt

```
Now assemble all components into the homepage (src/app/page.tsx):

Import order:
1. Navbar
2. Hero
3. TrustTicker
4. ReshapingSection
5. BenefitsGrid
6. OptionsSection
7. CommitmentStatement
8. TestimonialsGrid
9. HandoffSection
10. StatsBar
11. DualCTA
12. Footer

Wrap everything in a <main> tag.
Add smooth scroll behavior to html element.
Ensure all sections have proper IDs for navigation linking.
```

---

## 6. Additional Pages (Phase 2)

After homepage is complete, create:

1. `/options` - Detailed options page with comparison table
2. `/how-it-works` - Process page with timeline cards
3. `/get-started` - Form page with lead capture
4. `/about` - Team and values page

Use the V4 wireframes as reference for each page's content and structure.

---

## 7. Final Polish Prompts

```
Review and polish the entire site:

1. Check all animations are smooth and not jarring
2. Verify responsive design at 320px, 768px, 1024px, 1440px breakpoints
3. Add hover states to all interactive elements
4. Ensure proper focus states for accessibility
5. Add aria-labels to navigation and buttons
6. Optimize images with Next.js Image component
7. Add loading states for any async content
8. Test smooth scrolling between sections
```

---

## Reference: Key Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Font Display | DM Serif Display | Headlines, quotes |
| Font Body | DM Sans | Body text, UI |
| Green | #22c55e | CTAs, accents |
| Green Dark | #16a34a | Hover states |
| Dark | #111111 | Dark sections, text |
| Cream | #faf9f7 | Alternating sections |
| Border Radius | 8px buttons, 16-20px cards | |
| Section Padding | 110px vertical, 56px horizontal | |
| Max Content Width | 1100px-1200px | |

---

## Workflow Summary

1. ✅ Create Next.js project with dependencies
2. ✅ Add .cursorrules file
3. ✅ Create Design Mode notepad
4. 🔄 Build components one at a time using prompts
5. 🔄 Assemble into pages
6. 🔄 Polish and test
7. 🔄 Deploy

Start a **new Cursor chat** for each major component to keep context clean.
