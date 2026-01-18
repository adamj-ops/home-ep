"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  imagePlaceholder: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I got all the benefits of a full renovation without any of the stress. They handled everything.",
    author: "Kersti M.",
    location: "Plymouth, MN",
    imagePlaceholder: "Kersti in front of her updated home",
  },
  {
    quote:
      "We needed to move fast for a job relocation. They closed in 10 days with zero hassle.",
    author: "John & Lisa R.",
    location: "Eden Prairie, MN",
    imagePlaceholder: "John at closing",
  },
  {
    quote:
      "After inheriting my parents' home, I didn't know what to do. They walked me through every option.",
    author: "Julie T.",
    location: "St. Louis Park, MN",
    imagePlaceholder: "Julie with family",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function TestimonialsGrid() {
  return (
    <section className="py-[120px] px-6 md:px-14 bg-white">
      {/* Header */}
      <motion.div
        className="max-w-[600px] mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-serif text-[36px] md:text-[44px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal">
          Hear from homeowners like you.
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.author}
            className="group"
            variants={itemVariants}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl mb-6">
              <ImagePlaceholder
                description={testimonial.imagePlaceholder}
                height="280px"
                className="w-full transition-transform duration-500 group-hover:scale-105"
                framed={false}
              />
            </div>

            {/* Quote */}
            <p className="text-[17px] leading-[1.6] text-[var(--text-primary)] mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="text-[14px] text-[var(--text-muted)]">
              <span className="text-[var(--text-primary)] font-medium">
                {testimonial.author}
              </span>{" "}
              — {testimonial.location}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
