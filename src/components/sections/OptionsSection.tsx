"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface OptionCardProps {
  badge?: string;
  title: string;
  tagline: string;
  description: string;
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
        "grid md:grid-cols-2 rounded-[20px] overflow-hidden min-h-[480px] shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
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
            "text-[16px] leading-[1.75] mb-8",
            featured ? "text-[#999]" : "text-[var(--text-secondary)]"
          )}
        >
          {description}
        </p>

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
          <Button
            href={ctaHref}
            variant={featured ? "white" : "secondary"}
          >
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
      "Just want to move on? We'll buy your home as-is, on your timeline. No repairs, no showings, no uncertainty.",
    features: [
      "Close in as little as 7 days",
      "No repairs or cleanup required",
      "Certainty — no financing fall-throughs",
    ],
    ctaText: "Get a cash offer",
    ctaHref: "/get-started",
    imagePlaceholder: "Family handing over keys, relief on faces",
    featured: false,
    reversed: false,
  },
  {
    badge: "Most Popular",
    title: "Remodel Partnership",
    tagline: "We invest. You profit.",
    description:
      "Your home has potential. We fund and manage the renovation, then help you sell at top dollar. You keep the upside.",
    features: [
      "We fund 100% of the renovation",
      "Professional project management",
      "Avg. $75K more in your pocket",
    ],
    ctaText: "Learn more",
    ctaHref: "/options",
    imagePlaceholder: "Before/after transformation of kitchen",
    featured: true,
    reversed: true,
  },
  {
    title: "Bridge to Goal",
    tagline: "Hit your number.",
    description:
      "Have a specific price in mind? We'll help you bridge the gap between where you are and where you need to be.",
    features: [
      "Flexible financing solutions",
      "Work toward your target price",
      "Expert guidance throughout",
    ],
    ctaText: "Explore bridge options",
    ctaHref: "/options",
    imagePlaceholder: "Homeowner reviewing documents with advisor",
    featured: false,
    reversed: false,
  },
];

export default function OptionsSection() {
  return (
    <section className="section-padding bg-white">
      <SectionHeader
        label="Your Options"
        headline="Three paths forward. You choose."
        subheadline="Every homeowner's situation is different. We offer multiple ways to help, so you can pick what works for you."
      />

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
