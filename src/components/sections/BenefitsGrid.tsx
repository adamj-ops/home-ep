"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

const benefits = [
  {
    icon: "🏡",
    title: "Options, not ultimatums",
    description:
      "Cash offer, renovation partnership, or bridge to market value — you choose the path that fits your life.",
  },
  {
    icon: "⚡",
    title: "Answers in 24 hours",
    description:
      "No weeks of waiting. We respond same-day and give you real numbers to consider, fast.",
  },
  {
    icon: "🤝",
    title: "Honest, always",
    description:
      "If we're not the right fit, we'll tell you. We'd rather earn trust than close a bad deal.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function BenefitsGrid() {
  return (
    <section className="bg-white">
      {/* Two-column layout: headline left, benefits right */}
      <div className="py-[120px] px-6 md:px-14">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 max-w-[1200px] mx-auto">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <h2 className="font-serif text-[36px] md:text-[44px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal sticky top-[120px]">
              A better way to sell your home.
            </h2>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="flex gap-5"
                variants={itemVariants}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[var(--cream)] rounded-xl flex items-center justify-center text-[22px] shrink-0">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full-bleed image after benefits */}
      <ImagePlaceholder
        description="[Modern home renovation in progress — sense of transformation]"
        height="400px"
        className="md:h-[500px] w-full"
        framed={false}
      />
    </section>
  );
}
