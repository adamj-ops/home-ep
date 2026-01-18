"use client";

import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

const stats = [
  { value: "150+", label: "Families helped" },
  { value: "$75K", label: "Avg. extra with partnership" },
  { value: "45", label: "Avg. days to close" },
  { value: "4.9", label: "Google rating" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function StatsBar() {
  return (
    <section className="py-[100px] px-6 md:px-14 bg-[var(--cream)]">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-[1000px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="text-center"
            variants={itemVariants}
          >
            <div className="font-serif text-[42px] md:text-[56px] text-[var(--text-primary)] tracking-[-1px] mb-2">
              {stat.value}
            </div>
            <div className="text-[13px] text-[var(--text-muted)] uppercase tracking-[1px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
