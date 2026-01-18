"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export default function Hero() {
  return (
    <section className="bg-[var(--cream)]">
      {/* Content */}
      <div className="pt-[140px] pb-[80px] px-6 md:px-14 max-w-[800px]">
        <motion.h1
          className="font-serif text-[42px] md:text-[56px] lg:text-[64px] leading-[1.08] text-[var(--text-primary)] mb-6 font-normal tracking-[-1px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          A fresh start for your home. And for you.
        </motion.h1>
        <motion.p
          className="text-[17px] md:text-[19px] text-[var(--text-secondary)] mb-10 leading-[1.7] max-w-[540px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          Whether you need to move on, have a property that needs work, or
          simply want to explore what&apos;s possible — we offer real options,
          not pressure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          <Button href="/get-started" variant="secondary" size="large">
            Start here
          </Button>
        </motion.div>
      </div>

      {/* Full-bleed Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
      >
        <ImagePlaceholder
          description="[Warm, inviting home exterior with natural landscaping — sense of possibility]"
          height="400px"
          className="md:h-[520px] lg:h-[600px] w-full"
          framed={false}
        />
      </motion.div>
    </section>
  );
}
