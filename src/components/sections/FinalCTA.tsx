"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import Button from "@/components/ui/Button";

interface FinalCTAProps {
  headline?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function FinalCTA({
  headline = "Ready to see your options?",
  body = "Let's find out what's possible for your home.",
  ctaText = "Get started →",
  ctaHref = "/get-started",
}: FinalCTAProps) {
  return (
    <section className="py-[120px] px-6 lg:px-14 bg-[var(--dark)] text-center">
      <motion.div {...fadeUpInView}>
        <h2 className="font-serif text-[40px] md:text-[52px] text-white mb-5 font-normal tracking-[-0.5px]">
          {headline}
        </h2>
        <p className="text-[18px] text-[#888] mb-10">{body}</p>
        <Button href={ctaHref} variant="green" size="large">
          {ctaText}
        </Button>
      </motion.div>
    </section>
  );
}
