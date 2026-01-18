"use client";

import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export default function HowItWorksHero() {
  return (
    <section
      // biome-ignore lint/a11y/useSemanticElements: intentional id for anchor linking
      id="how-it-works-hero"
      className="pt-[140px] pb-[80px] px-6 md:px-14 bg-white"
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          How It Works
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif text-[38px] md:text-[52px] text-[var(--text-primary)] leading-[1.1] tracking-[-0.5px] font-normal mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          From first call to closing day.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[17px] md:text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          We&apos;ve simplified the selling process into three clear steps. No
          surprises, no runaround — just a straightforward path to your best
          outcome.
        </motion.p>
      </div>
    </section>
  );
}
