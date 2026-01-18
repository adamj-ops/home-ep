"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import Button from "@/components/ui/Button";

interface CommitmentStatementProps {
  quote?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "white" | "cream";
}

export default function CommitmentStatement({
  quote = `"Our commitment to honest guidance combined with real options means you get the outcome that's right for your situation — not just ours."`,
  ctaText = "Meet our team",
  ctaHref = "/about",
  variant = "white",
}: CommitmentStatementProps) {
  return (
    <section
      className={`section-padding text-center ${
        variant === "cream" ? "bg-[var(--cream)]" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-[900px] mx-auto"
        {...fadeUpInView}
      >
        <p className="font-serif text-[28px] md:text-[36px] text-[var(--text-primary)] leading-[1.35] tracking-[-0.5px] mb-12">
          {quote}
        </p>

        {ctaText && ctaHref && (
          <Button href={ctaHref} variant="outline">
            {ctaText}
          </Button>
        )}
      </motion.div>
    </section>
  );
}
