"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  label,
  headline,
  subheadline,
  centered = false,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "max-w-[620px] mb-[72px]",
        centered && "text-center mx-auto",
        className
      )}
      {...fadeUpInView}
    >
      {label && (
        <div className="section-label">{label}</div>
      )}
      <h2
        className={cn(
          "font-serif text-[44px] leading-[1.15] tracking-[-0.5px] font-normal mb-5",
          dark ? "text-white" : "text-[var(--text-primary)]"
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "text-[17px] leading-[1.7]",
            dark ? "text-[#888]" : "text-[var(--text-secondary)]"
          )}
        >
          {subheadline}
        </p>
      )}
    </motion.div>
  );
}
