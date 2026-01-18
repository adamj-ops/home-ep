"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FormSuccess() {
  return (
    <div className="py-12 px-6 lg:py-20 lg:px-14 flex items-center justify-center min-h-[600px]">
      <motion.div
        className="text-center max-w-[440px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated green checkmark */}
        <motion.div
          className="mx-auto w-16 h-16 rounded-full bg-[var(--green)] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ duration: 0.5, times: [0, 0.7, 1] }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-serif text-[28px] text-[var(--text-primary)] mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          We&apos;ve got your info!
        </motion.h2>

        {/* Body */}
        <motion.p
          className="text-[17px] text-[#555] leading-[1.7] mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Our team will review your property details and reach out within 24
          hours with your personalized options.
        </motion.p>

        {/* Secondary text */}
        <motion.p
          className="text-[15px] text-[#888] mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Expect a call or text from (612) 555-0123
        </motion.p>

        {/* CTA button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#ddd] rounded-lg text-[15px] font-medium text-[#333] hover:border-[var(--dark)] transition-colors"
          >
            What happens next? →
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
