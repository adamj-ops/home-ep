"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import Button from "@/components/ui/Button";

interface CommitmentCTAProps {
  headline?: string;
  body?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CommitmentCTA({
  headline = "Let's see what's possible for your property.",
  body = "Whether you're ready to sell or just exploring, we're here to help.",
  primaryText = "Get your options",
  primaryHref = "/get-started",
  secondaryText = "Learn how it works",
  secondaryHref = "/how-it-works",
}: CommitmentCTAProps) {
  return (
    <section className="py-[100px] px-6 md:px-14 bg-[var(--dark)] text-center">
      <motion.div {...fadeUpInView} className="max-w-[600px] mx-auto">
        <h2 className="font-serif text-[32px] md:text-[36px] text-white leading-[1.15] tracking-[-0.5px] font-normal mb-4">
          {headline}
        </h2>
        <p className="text-[17px] text-[#999] mb-8">{body}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="green" size="large">
            {primaryText}
          </Button>
          <Button
            href={secondaryHref}
            variant="outline"
            size="large"
            className="border-white/30 text-white hover:border-white hover:bg-white/5"
          >
            {secondaryText}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
