"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUpInView, staggerContainer, staggerItem } from "@/lib/animations";

interface StatItem {
  value: string;
  symbol?: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
  variant?: "dark" | "light";
  className?: string;
}

export default function StatsGrid({
  stats,
  variant = "dark",
  className,
}: StatsGridProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-[72px] px-6 lg:px-14",
        isDark ? "bg-[var(--dark)]" : "bg-[var(--cream)]",
        className
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          variants={staggerItem}
        >
          <div
            className={cn(
              "text-[52px] font-bold mb-2 tracking-[-1px] font-sans",
              isDark ? "text-white" : "text-[var(--text-primary)]"
            )}
          >
            {stat.value}
            {stat.symbol && (
              <span className="text-[var(--green)]">{stat.symbol}</span>
            )}
          </div>
          <div
            className={cn(
              "text-[14px]",
              isDark ? "text-[#888]" : "text-[var(--text-secondary)]"
            )}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
