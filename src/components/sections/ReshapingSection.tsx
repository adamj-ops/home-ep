"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export default function ReshapingSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[550px] md:min-h-[650px]">
      {/* Content Side */}
      <motion.div
        className="bg-white p-10 md:p-16 lg:p-20 flex flex-col justify-center order-2 md:order-1"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-serif text-[32px] md:text-[40px] text-[var(--text-primary)] mb-6 font-normal tracking-[-0.5px] leading-[1.15]">
          Re-shaping the way homeowners sell.
        </h2>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.75] mb-8 max-w-[440px]">
          Most investors compete on one thing: buying as cheap as possible. We
          built something different — a company that gives you real options and
          helps you get the outcome you actually want.
        </p>
        <div>
          <Button href="/options" variant="secondary">
            Explore your options
          </Button>
        </div>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        className="order-1 md:order-2"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <ImagePlaceholder
          description="[Before/after home transformation — dramatic improvement]"
          height="100%"
          className="min-h-[350px] md:min-h-full"
          framed={false}
        />
      </motion.div>
    </section>
  );
}
