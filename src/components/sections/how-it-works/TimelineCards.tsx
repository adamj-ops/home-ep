"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUpInView, staggerContainer, staggerItem } from "@/lib/animations";

interface TimelineCard {
  icon: string;
  title: string;
  tagline: string;
  timeline: string;
  featured?: boolean;
  checklist: string[];
  outcome: string;
}

const cards: TimelineCard[] = [
  {
    icon: "💰",
    title: "Cash Offer",
    tagline: "Simple. Fast. Done.",
    timeline: "Closes in 7-14 days",
    checklist: [
      "Title search and clearing",
      "All closing paperwork",
      "Coordination with your timeline",
      "Property clean-out (optional)",
      "Utility transfers",
    ],
    outcome:
      "A guaranteed cash offer with no financing contingencies.",
  },
  {
    icon: "🏗️",
    title: "Remodel Partnership",
    tagline: "We invest. You profit.",
    timeline: "45-60 days to sale",
    featured: true,
    checklist: [
      "Complete renovation management",
      "All contractor coordination",
      "Design and material selection",
      "Professional staging",
      "MLS listing and marketing",
      "Showings and negotiations",
    ],
    outcome:
      "A share of the final sale price — typically $30-75K more than a cash offer.",
  },
  {
    icon: "🌉",
    title: "Bridge to Goal",
    tagline: "Hit your number.",
    timeline: "30-90 days (flexible)",
    checklist: [
      "Bridge financing arrangement",
      "Strategic updates for ROI",
      "Listing optimization",
      "Market timing strategy",
      "Buyer negotiations",
    ],
    outcome:
      "Funding to make key improvements, then full market exposure for top dollar.",
  },
];

function TimelineCardItem({ card }: { card: TimelineCard }) {
  return (
    <motion.div
      className={cn(
        "relative bg-white border border-[#eee] rounded-[20px] p-7 md:p-10 flex flex-col",
        "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      )}
      variants={staggerItem}
    >
      {/* Featured badge */}
      {card.featured && (
        <span className="absolute top-5 right-5 px-3 py-1 bg-[var(--green)] text-white rounded-full text-[10px] font-semibold uppercase tracking-[1px]">
          Most Popular
        </span>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center text-2xl mb-5"
        role="img"
        aria-label={card.title}
      >
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[24px] md:text-[26px] text-[var(--text-primary)] font-normal mb-1">
        {card.title}
      </h3>

      {/* Tagline */}
      <div className="text-[14px] text-[var(--green)] font-medium mb-3">
        {card.tagline}
      </div>

      {/* Timeline badge */}
      <span className="inline-block w-fit text-[12px] text-[var(--text-muted)] border border-[#ddd] rounded-full px-3 py-1.5 mb-6">
        {card.timeline}
      </span>

      {/* Divider */}
      <div className="border-t border-[#eee] mb-6" />

      {/* Checklist label */}
      <div className="text-[13px] uppercase text-[var(--text-muted)] tracking-[1px] mb-4">
        What we handle:
      </div>

      {/* Checklist items */}
      <ul className="space-y-3 mb-6 flex-1">
        {card.checklist.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]"
          >
            <span className="text-[var(--green)] font-bold mt-0.5" aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="pt-4 border-t border-[#eee]">
        <div className="text-[13px] uppercase text-[var(--text-muted)] tracking-[1px] mb-2">
          You receive:
        </div>
        <p className="text-[15px] text-[var(--text-primary)] leading-[1.6]">
          {card.outcome}
        </p>
      </div>
    </motion.div>
  );
}

export default function TimelineCards() {
  return (
    <section
      // biome-ignore lint/a11y/useSemanticElements: intentional id for anchor linking
      id="timeline"
      className="section-padding bg-white"
    >
      {/* Section header */}
      <motion.div
        className="max-w-[620px] mx-auto text-center mb-14"
        {...fadeUpInView}
      >
        <div className="section-label">Your Timeline</div>
        <h2 className="font-serif text-[32px] md:text-[40px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal mb-5">
          What happens after you choose.
        </h2>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7]">
          Each path has a different timeline. Here&apos;s what to expect.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {cards.map((card) => (
          <TimelineCardItem key={card.title} card={card} />
        ))}
      </motion.div>
    </section>
  );
}
