"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface OptionCardProps {
  badge?: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  imagePlaceholder: string;
  featured?: boolean;
  reversed?: boolean;
}

function OptionCard({
  badge,
  title,
  tagline,
  description,
  extendedDescription,
  features,
  ctaText,
  ctaHref,
  imagePlaceholder,
  featured = false,
  reversed = false,
}: OptionCardProps) {
  return (
    <motion.div
      className={cn(
        "grid md:grid-cols-2 rounded-[20px] overflow-hidden min-h-[520px] shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
        featured ? "bg-[var(--dark)]" : "bg-[var(--cream)]",
        reversed && "md:[direction:rtl] md:[&>*]:[direction:ltr]"
      )}
      variants={staggerItem}
    >
      {/* Image side */}
      <div className="min-h-[280px] md:min-h-full">
        <ImagePlaceholder
          description={imagePlaceholder}
          height="100%"
          variant={featured ? "green" : "light"}
          className="h-full"
          framed={false}
        />
      </div>

      {/* Content side */}
      <div className="p-10 md:p-14 lg:p-[72px] flex flex-col justify-center">
        {badge && (
          <span className="inline-block w-fit px-3.5 py-1.5 bg-[var(--green)] text-white rounded-full text-[10px] font-semibold uppercase tracking-[1px] mb-7">
            {badge}
          </span>
        )}

        <h3
          className={cn(
            "font-serif text-[30px] md:text-[34px] mb-2 font-normal tracking-[-0.3px]",
            featured ? "text-white" : "text-[var(--text-primary)]"
          )}
        >
          {title}
        </h3>

        <div className="text-[15px] text-[var(--green)] font-medium mb-5">
          {tagline}
        </div>

        <p
          className={cn(
            "text-[16px] leading-[1.75] mb-4",
            featured ? "text-[#999]" : "text-[var(--text-secondary)]"
          )}
        >
          {description}
        </p>

        {extendedDescription && (
          <p
            className={cn(
              "text-[14px] leading-[1.7] mb-8",
              featured ? "text-[#777]" : "text-[var(--text-muted)]"
            )}
          >
            {extendedDescription}
          </p>
        )}

        {/* Features list */}
        <div className="mb-9 space-y-3.5">
          {features.map((feature) => (
            <div
              key={feature}
              className={cn(
                "flex items-start gap-3.5 text-[15px]",
                featured ? "text-[#bbb]" : "text-[var(--text-secondary)]"
              )}
            >
              <span className="text-[var(--green)] font-bold mt-0.5">✓</span>
              {feature}
            </div>
          ))}
        </div>

        <div>
          <Button href={ctaHref} variant={featured ? "white" : "secondary"}>
            {ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

const options: OptionCardProps[] = [
  {
    title: "Cash Offer",
    tagline: "Simple. Fast. Done.",
    description:
      "You want certainty. You want speed. You want to move on without the stress of repairs, showings, or waiting months for a buyer who might back out.",
    extendedDescription:
      "We buy your home as-is, close on your timeline, and handle everything. You walk away with cash in hand and one less thing to worry about.",
    features: [
      "Close in 7-14 days (or on your schedule)",
      "No repairs, cleaning, or showings",
      "No financing contingencies",
      "We pay typical closing costs",
    ],
    ctaText: "Get a cash offer",
    ctaHref: "/get-started",
    imagePlaceholder: "Warm family moment — moving boxes, new chapter",
    featured: false,
    reversed: false,
  },
  {
    badge: "Most Popular",
    title: "Remodel Partnership",
    tagline: "We invest. You profit.",
    description:
      "Your home has untapped value. But renovating is expensive, stressful, and time-consuming. What if someone else handled all of that — and you kept the upside?",
    extendedDescription:
      "We fund the renovation, manage the contractors, and sell your home at top dollar. You don't lift a finger, and you walk away with significantly more money than a cash offer.",
    features: [
      "$0 out of pocket — we fund everything",
      "Professional design and project management",
      "Avg. $75K more than cash offers",
      "Timeline: 60-90 days typically",
    ],
    ctaText: "See how it works",
    ctaHref: "/how-it-works",
    imagePlaceholder: "Stunning before/after kitchen transformation",
    featured: true,
    reversed: true,
  },
  {
    title: "Bridge to Goal",
    tagline: "Hit your number.",
    description:
      "You have a number in mind — maybe it's what you need for your next home, or to pay off debt, or to feel good about the sale. Let's work together to get you there.",
    extendedDescription:
      "Bridge solutions combine flexible financing with our expertise to help you reach your target price, whether through strategic improvements, timing, or creative structuring.",
    features: [
      "Flexible financing structures",
      "Strategic improvement guidance",
      "Work toward your target price",
      "No pressure — collaborative approach",
    ],
    ctaText: "Explore bridge options",
    ctaHref: "/get-started",
    imagePlaceholder: "Homeowner confidently reviewing options",
    featured: false,
    reversed: false,
  },
];

export default function OptionsCards() {
  return (
    <section className="section-padding bg-[var(--cream)] pt-0">
      <motion.div
        className="flex flex-col gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {options.map((option) => (
          <OptionCard key={option.title} {...option} />
        ))}
      </motion.div>
    </section>
  );
}
