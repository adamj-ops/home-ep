"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

const tier1Locations = [
  "Plymouth",
  "Maple Grove",
  "Brooklyn Park",
  "St. Louis Park",
  "Hopkins",
  "Minnetonka",
  "Golden Valley",
  "Edina",
  "Eden Prairie",
  "Bloomington",
  "Fridley",
  "Columbia Heights",
  "New Hope",
  "Crystal",
];

const tier2Locations = [
  "Burnsville",
  "Apple Valley",
  "Lakeville",
  "Eagan",
  "Woodbury",
  "Oakdale",
  "Maplewood",
  "Rogers",
  "Elk River",
  "Anoka",
];

const allLocations = [...tier1Locations, ...tier2Locations];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export default function AreasServed() {
  return (
    <section className="py-[80px] px-6 md:px-14 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="font-serif text-[32px] md:text-[36px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Serving the Twin Cities metro.
        </motion.h2>

        <motion.p
          className="text-[17px] text-[var(--text-secondary)] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          We buy properties throughout the Minneapolis-St. Paul area, with a
          focus on these communities.
        </motion.p>

        {/* Location Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allLocations.map((location) => (
            <motion.span
              key={location}
              variants={tagVariants}
              className="bg-[var(--cream)] border border-[#eee] rounded-full px-4 md:px-5 py-2 md:py-2.5 text-[13px] md:text-[14px] text-[#333]"
            >
              {location}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.p
          className="text-[15px] text-[var(--text-secondary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          Don&apos;t see your area? We still might be able to help.{" "}
          <Link
            href="/get-started"
            className="text-[var(--green)] hover:underline font-medium"
          >
            Contact us →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
