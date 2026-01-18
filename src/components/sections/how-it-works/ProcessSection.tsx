"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import ProcessSteps from "@/components/ui/ProcessSteps";

const steps = [
  {
    number: "01",
    title: "Tell us about your property",
    description:
      "Share some basic details about your home — address, condition, and timeline. Takes about 2 minutes. No commitment, just information.",
  },
  {
    number: "02",
    title: "Get your personalized options",
    description:
      "Within 24 hours, we'll present you with 2-3 options tailored to your situation: cash offer, renovation partnership, or bridge to market value. Real numbers, not estimates.",
  },
  {
    number: "03",
    title: "Choose your path forward",
    description:
      "Pick the option that fits your life. We handle everything from there — paperwork, coordination, closing. You stay in control the whole way.",
  },
];

export default function ProcessSection() {
  return (
    <section
      // biome-ignore lint/a11y/useSemanticElements: intentional id for anchor linking
      id="process"
      className="section-padding bg-[var(--cream)]"
    >
      {/* Section header */}
      <motion.div
        className="max-w-[620px] mx-auto text-center mb-12 md:mb-16"
        {...fadeUpInView}
      >
        <h2 className="font-serif text-[32px] md:text-[40px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal mb-5">
          Three steps to your fresh start.
        </h2>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7]">
          Here&apos;s exactly what to expect when you reach out.
        </p>
      </motion.div>

      {/* Steps grid */}
      <div className="max-w-[1100px] mx-auto">
        <ProcessSteps
          steps={steps}
          columns={3}
          variant="light"
          className="gap-8 md:gap-12 text-center md:text-left"
        />
      </div>
    </section>
  );
}
