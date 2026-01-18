"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  "Get 2-3 personalized options within 24 hours",
  "No obligation — explore at your own pace",
  "Speak with a real person, not a call center",
  "100% free, no hidden fees ever",
];

export default function BenefitsPanel() {
  return (
    <div className="lg:sticky lg:top-20 py-12 px-6 lg:py-20 lg:px-14 text-white">
      <motion.div
        className="max-w-[440px]"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={fadeUp.transition}
      >
        {/* Label */}
        <span className="text-[11px] uppercase tracking-[2px] text-[var(--green)] font-semibold">
          Get Started
        </span>

        {/* Headline */}
        <h1 className="font-serif text-[32px] lg:text-[38px] leading-[1.15] mt-4">
          Let&apos;s find the right option for you.
        </h1>

        {/* Subhead */}
        <p className="text-[17px] leading-[1.7] text-[#999] mt-5">
          Share a few details about your property. We&apos;ll respond within 24
          hours with personalized options — no obligation, no pressure.
        </p>

        {/* Benefits list */}
        <motion.ul
          className="mt-12 flex flex-col gap-5"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {benefits.map((text) => (
            <motion.li
              key={text}
              className="flex items-start gap-3"
              variants={staggerItem}
            >
              {/* Green check */}
              <svg
                className="w-5 h-5 text-[var(--green)] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-[16px]">{text}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Trust signals (hidden on mobile) */}
        <div className="hidden md:block mt-12">
          <hr className="border-white/10" />
          <div className="mt-8 flex flex-wrap gap-4 text-[14px] text-[#666]">
            <span>150+ families helped</span>
            <span className="text-white/20">•</span>
            <span>4.9★ Google rating</span>
            <span className="text-white/20">•</span>
            <span>24hr response</span>
          </div>
        </div>

        {/* Contact alternative */}
        <div className="mt-8">
          <span className="text-[15px] text-[#888]">Prefer to talk first? </span>
          <a
            href="tel:6125550123"
            className="text-[15px] text-white underline-offset-2 hover:underline"
          >
            (612) 555-0123
          </a>
        </div>
      </motion.div>
    </div>
  );
}
