# Build Component Prompt Template

Use this template when asking Cursor to build a new component.

---

## Template

```
Create the [COMPONENT_NAME] component for Everyday Properties:

**Location:** src/components/[sections|ui|layout]/[ComponentName].tsx

**Design Reference:** See wireframes-v4.html, section [SECTION_NAME]

**Content:**
- [Exact copy from COPY-REFERENCE.md]

**Styling:**
- Background: [white | cream | dark]
- Layout: [grid | flex | split-screen]
- Typography: [reference DESIGN-TOKENS.md]

**Animation:**
- Use Framer Motion whileInView
- Fade up with 20px translate
- Duration 0.6s, once: true
- [Stagger if multiple items]

**Responsive:**
- Mobile: [specific mobile adjustments]
- Desktop: [desktop layout]

**TypeScript Interface:**
- Props needed: [list props]
```

---

## Example Usage

```
Create the BenefitsGrid component for Everyday Properties:

**Location:** src/components/sections/BenefitsGrid.tsx

**Design Reference:** See wireframes-v4.html, benefits section

**Content:**
- Label: "WHY EVERYDAY"
- Headline: "A better way to sell your home."
- 3 benefits with icons, titles, descriptions (see COPY-REFERENCE.md)

**Styling:**
- Background: cream (#faf9f7)
- Layout: 3-column grid, 64px gap, max-width 1100px centered
- Icon containers: 64x64px, #f5f5f5 bg, rounded-xl

**Animation:**
- Stagger cards with 0.2s delay between each
- Fade up on scroll

**Responsive:**
- Mobile: single column
- Tablet: 2 columns
- Desktop: 3 columns

**TypeScript Interface:**
interface Benefit {
  icon: string;
  title: string;
  description: string;
}
interface BenefitsGridProps {
  label?: string;
  headline: string;
  benefits: Benefit[];
}
```
