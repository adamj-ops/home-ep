"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export default function HandoffSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[550px] md:min-h-[650px]">
      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <ImagePlaceholder
          description="[Project transformation timeline — construction progress]"
          height="100%"
          className="min-h-[350px] md:min-h-full"
          framed={false}
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        className="bg-[var(--cream)] p-10 md:p-16 lg:p-20 flex flex-col justify-center"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-serif text-[32px] md:text-[40px] text-[var(--text-primary)] mb-6 font-normal tracking-[-0.5px] leading-[1.15]">
          You choose your path. We handle the rest.
        </h2>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.75] mb-8 max-w-[440px]">
          Our team of renovation experts, agents, and transaction coordinators
          will guide you from first conversation to closing day — ensuring a
          seamless experience.
        </p>
        <div>
          <Button href="/how-it-works" variant="secondary">
            See how it works
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
