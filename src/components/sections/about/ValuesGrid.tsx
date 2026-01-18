"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

const values = [
  {
    icon: "M",
    title: "Modern",
    description:
      "We use technology to move faster, communicate better, and give you real-time visibility into your options. No more waiting by the phone.",
  },
  {
    icon: "E",
    title: "Efficient",
    description:
      "Your time matters. We respond within 24 hours, provide clear timelines, and never waste a meeting. When we say we'll do something, it's done.",
  },
  {
    icon: "S",
    title: "Straightforward",
    description:
      "No hidden fees, no bait-and-switch, no pressure tactics. We show you all your options with real numbers so you can make the best decision for your family.",
  },
  {
    icon: "L",
    title: "Local",
    description:
      "We live and work in the Twin Cities. We know the neighborhoods, the market, and the contractors. When you work with us, you're working with neighbors.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function ValuesGrid() {
  return (
    <section className="py-[100px] px-6 md:px-14 bg-white">
      <SectionHeader
        label="OUR VALUES"
        headline="What we stand for."
        centered
        className="mb-14"
      />

      <motion.div
        className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            className={cn("card-soft p-7 md:p-10 transition-shadow duration-200")}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-[var(--cream)] rounded-xl flex items-center justify-center text-[16px] font-semibold text-[var(--text-primary)] mb-5">
              {value.icon}
            </div>

            {/* Title */}
            <h3 className="text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)] mb-3">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-[1.7]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
