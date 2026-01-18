"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

interface DualCTAProps {
  headline?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function DualCTA({
  headline = "Ready to see your options?",
  body = "Schedule a free consultation to discuss your property and learn more about your options.",
  ctaText = "Get started",
  ctaHref = "/get-started",
}: DualCTAProps) {
  return (
    <section className="py-[120px] px-6 md:px-14 bg-[var(--dark)]">
      <motion.div
        className="max-w-[700px] mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-serif text-[32px] md:text-[44px] text-white leading-[1.15] tracking-[-0.5px] font-normal mb-5">
          {headline}
        </h2>
        <p className="text-[17px] text-[#888] mb-10 leading-[1.7]">{body}</p>
        <Button href={ctaHref} variant="white" size="large">
          {ctaText}
        </Button>
      </motion.div>
    </section>
  );
}
