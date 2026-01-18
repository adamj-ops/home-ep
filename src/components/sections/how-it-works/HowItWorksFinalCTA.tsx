"use client";

import { motion } from "framer-motion";
import { fadeUpInView, staggerContainer, staggerItem } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function HowItWorksFinalCTA() {
  return (
    <section
      // biome-ignore lint/a11y/useSemanticElements: intentional id for anchor linking
      id="final-cta"
      className="py-[100px] px-6 md:px-14 bg-[var(--dark)] text-center"
    >
      <motion.div
        className="max-w-[600px] mx-auto"
        {...fadeUpInView}
      >
        <h2 className="font-serif text-[32px] md:text-[38px] text-white font-normal tracking-[-0.5px] mb-5">
          Ready to see your options?
        </h2>
        <p className="text-[17px] text-[#999] leading-[1.7] max-w-[500px] mx-auto mb-8">
          Tell us about your property and we&apos;ll have your personalized
          options within 24 hours.
        </p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Button href="/get-started" variant="green" size="large">
              Get started →
            </Button>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Button
              href="tel:6125550123"
              variant="outline"
              size="large"
              className="border-white/30 text-white hover:border-white"
            >
              Call us: (612) 555-0123
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust line */}
        <p className="text-[13px] text-[#888]">
          <span aria-hidden="true">✓</span> No obligation &nbsp;&nbsp;
          <span aria-hidden="true">✓</span> 24hr response &nbsp;&nbsp;
          <span aria-hidden="true">✓</span> 100% free
        </p>
      </motion.div>
    </section>
  );
}
