# Everyday Properties — Quick Start Setup

## Step 1: Create Project

Open terminal and run:

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest everyday-properties --typescript --tailwind --eslint --app --src-dir

# Navigate to project
cd everyday-properties

# Install Framer Motion for animations
npm install framer-motion

# Initialize ShadCN UI (select defaults, use CSS variables)
npx shadcn-ui@latest init
```

## Step 2: Add Files to Project

Copy these files to your project:

1. `.cursorrules` → Project root (same level as package.json)
2. Open `NOTEPAD_DESIGN_MODE.md` and copy content into a Cursor Notepad

## Step 3: Configure Fonts

Replace `src/app/layout.tsx` with this:

```tsx
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Everyday Properties | Options for Your Home",
  description: "Helping Twin Cities homeowners find better options for properties that need work. Cash offers, renovation partnerships, and bridge solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

## Step 4: Configure Tailwind

Update `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        dark: "#111111",
        cream: "#faf9f7",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

## Step 5: Add Global Styles

Update `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --green: #22c55e;
  --green-dark: #16a34a;
  --dark: #111111;
  --cream: #faf9f7;
  --text-primary: #111111;
  --text-secondary: #555555;
  --text-muted: #888888;
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--text-primary);
  background: white;
}

/* Utility classes for brand typography */
.text-brand-secondary {
  color: var(--text-secondary);
}

.text-brand-muted {
  color: var(--text-muted);
}

.bg-cream {
  background-color: var(--cream);
}

.bg-dark {
  background-color: var(--dark);
}

/* Section padding utility */
.section-padding {
  @apply py-28 px-14;
}

@media (max-width: 768px) {
  .section-padding {
    @apply py-16 px-6;
  }
}
```

## Step 6: Create Folder Structure

```bash
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/lib
```

## Step 7: Start Building

1. Open project in Cursor
2. Start a new chat
3. Use prompts from `CURSOR_BUILD_GUIDE.md` to build each component
4. Start with Navbar → Hero → TrustTicker and work down the page

## Recommended Build Order

1. **Layout components first:**
   - Navbar
   - Footer

2. **Hero section:**
   - Hero
   - TrustTicker

3. **Value proposition:**
   - ReshapingSection
   - BenefitsGrid

4. **Core offering:**
   - OptionsSection (3 large cards)
   - CommitmentStatement

5. **Social proof:**
   - TestimonialsGrid
   - StatsBar

6. **Conversion:**
   - HandoffSection
   - DualCTA

7. **Assemble homepage:**
   - Import all components into page.tsx

## Tips for Cursor

- Start a **new chat** for each component
- Reference the `.cursorrules` file if AI drifts from design system
- Use the Design Mode notepad for context
- Be specific: "Add 56px horizontal padding" not "add padding"
- If something looks off, share a screenshot and say "match this exactly"

## Deploy

When ready to deploy:

```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
npx vercel
```
