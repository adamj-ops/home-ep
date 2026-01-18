"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working on something great. Check back soon!",
}: ComingSoonProps) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[var(--cream)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <span className="text-[11px] uppercase tracking-[2px] text-[var(--green)] font-semibold mb-4 block">
          IN DEVELOPMENT
        </span>
        <h1 className="font-serif text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
          {title}
        </h1>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7] mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
          <Button href="/get-started" variant="primary">
            Get Started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
