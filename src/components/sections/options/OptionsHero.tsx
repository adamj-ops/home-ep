"use client";

import { motion } from "framer-motion";
import { heroAnimation } from "@/lib/animations";

export default function OptionsHero() {
  return (
    <section className="section-padding pb-0">
      <div className="max-w-[700px]">
        <motion.div className="section-label" {...heroAnimation.headline}>
          Your Options
        </motion.div>

        <motion.h1
          className="font-serif text-[44px] md:text-[52px] text-[var(--text-primary)] mb-6 font-normal tracking-[-0.5px] leading-[1.1]"
          {...heroAnimation.subtitle}
        >
          Three paths. One goal: <br className="hidden md:block" />
          the right outcome for you.
        </motion.h1>

        <motion.p
          className="text-[18px] text-[var(--text-secondary)] leading-[1.7]"
          {...heroAnimation.cta}
        >
          Not every situation calls for the same solution. That's why we offer
          multiple ways to help — so you can choose the path that fits your life.
        </motion.p>
      </div>
    </section>
  );
}
