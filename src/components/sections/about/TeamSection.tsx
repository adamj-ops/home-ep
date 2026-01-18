"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

const team = [
  {
    name: "[Principal Name]",
    role: "Principal & CEO",
    bio: "Founded Everyday Properties to bring a better approach to real estate investing. 15+ years in Twin Cities real estate.",
    imageDesc: "[Professional headshot — approachable, not corporate]",
  },
  {
    name: "[COO Name]",
    role: "Chief Operating Officer",
    bio: "Oversees all operations, acquisitions, and the Build Co. renovation team. Licensed real estate agent.",
    imageDesc: "[Professional headshot]",
  },
  {
    name: "[Head of Reno Name]",
    role: "Head of Renovations",
    bio: "Leads our design and renovation team, ensuring every project meets our quality standards and maximizes value.",
    imageDesc: "[Professional headshot or on-site photo]",
  },
  {
    name: "[Director Name]",
    role: "Director of Operations",
    bio: "Manages transactions from contract to close, keeping everything on track and on time.",
    imageDesc: "[Professional headshot]",
  },
  {
    name: "[Agent Relations Name]",
    role: "Agent Relations",
    bio: "Works with real estate agents across the Twin Cities to create win-win partnerships.",
    imageDesc: "[Professional headshot]",
  },
  {
    name: "[IR Name]",
    role: "Investor Relations",
    bio: "Builds relationships with capital partners who share our vision for thoughtful real estate investment.",
    imageDesc: "[Professional headshot]",
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function TeamSection() {
  return (
    <section className="py-[100px] px-6 md:px-14 bg-[var(--cream)]">
      <SectionHeader
        label="THE TEAM"
        headline="Meet the people behind Everyday."
        subheadline="Our team brings together real estate, construction, and finance expertise to serve you better."
        centered
        className="mb-14"
      />

      <motion.div
        className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="card-soft overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            {/* Image */}
            <div className="aspect-[4/5]">
              <ImagePlaceholder
                description={member.imageDesc}
                height="100%"
                className="w-full h-full"
                framed={false}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-1">
                {member.name}
              </h3>
              <p className="text-[14px] font-medium text-[var(--green)] mb-3">
                {member.role}
              </p>
              <p className="text-[15px] text-[#666] leading-[1.6]">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Note for team */}
      <p className="text-center text-[13px] text-[var(--text-muted)] mt-12 italic">
        Add real team photos and bios when available. Keep bios to 2 sentences
        max.
      </p>
    </section>
  );
}
