"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export default function AboutHero() {
  return (
    <section className="pt-[100px] pb-[60px] px-6 md:px-14 bg-white">
      <div className="max-w-[800px]">
        {/* Label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          About Us
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif text-[36px] md:text-[52px] text-[var(--text-primary)] leading-[1.1] tracking-[-0.5px] font-normal mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          We&apos;re changing how Twin Cities homeowners sell.
        </motion.h1>

        {/* Body */}
        <motion.p
          className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[640px] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          Everyday Properties was founded on a simple idea: homeowners deserve
          real options, not just a lowball cash offer. We built a company that
          puts your goals first.
        </motion.p>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          <ImagePlaceholder
            description="[Team photo: The Everyday Properties team in front of a recently completed renovation]"
            height="280px"
            className="md:h-[400px] w-full rounded-[20px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
