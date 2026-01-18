"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface GuaranteeItem {
  icon?: string;
  title: string;
  description: string;
}

interface GuaranteeGridProps {
  items: GuaranteeItem[];
  variant?: "light" | "dark";
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function GuaranteeGrid({
  items,
  variant = "light",
  columns = 4,
  className,
}: GuaranteeGridProps) {
  const isDark = variant === "dark";

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
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
      {items.map((item) => (
        <motion.div
          key={item.title}
          className={cn(
            "p-6",
            isDark ? "rounded-2xl bg-[#1a1a1a]" : "card-soft"
          )}
          variants={staggerItem}
        >
          {item.icon && (
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4",
                isDark ? "bg-[#222]" : "bg-[var(--cream)]"
              )}
            >
              {item.icon}
            </div>
          )}

          <h4
            className={cn(
              "text-[17px] font-semibold mb-2",
              isDark ? "text-white" : "text-[var(--text-primary)]"
            )}
          >
            {item.title}
          </h4>

          <p
            className={cn(
              "text-[14px] leading-[1.7]",
              isDark ? "text-[#888]" : "text-[var(--text-secondary)]"
            )}
          >
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
