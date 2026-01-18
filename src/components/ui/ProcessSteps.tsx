"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  time?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: "light" | "dark";
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ProcessSteps({
  steps,
  variant = "light",
  columns = 3,
  className,
}: ProcessStepsProps) {
  const isDark = variant === "dark";

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      className={cn(
        "grid gap-8",
        gridCols[columns],
        className
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="relative"
          variants={staggerItem}
        >
          {/* Large faded step number */}
          <div
            className={cn(
              "text-[72px] font-bold leading-none mb-5 font-sans",
              isDark ? "text-[#1a1a1a]" : "text-[#f0f0f0]"
            )}
          >
            {step.number}
          </div>

          <h3
            className={cn(
              "text-[20px] font-semibold mb-3",
              isDark ? "text-white" : "text-[var(--text-primary)]"
            )}
          >
            {step.title}
          </h3>

          <p
            className={cn(
              "text-[15px] leading-[1.7] mb-4",
              isDark ? "text-[#888]" : "text-[var(--text-secondary)]"
            )}
          >
            {step.description}
          </p>

          {step.time && (
            <div className="inline-flex items-center gap-1.5 text-[13px] text-[var(--green)] font-medium">
              <span>⏱</span>
              {step.time}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
