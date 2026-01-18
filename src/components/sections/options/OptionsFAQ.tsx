"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "How do you determine your cash offer?",
    answer:
      "We analyze recent sales of similar homes, assess repair needs, and factor in our holding and selling costs. Our goal is to make a fair offer that works for both of us — we'll walk you through exactly how we arrived at the number.",
  },
  {
    question: "What if I want to explore multiple options?",
    answer:
      "That's exactly what we encourage. We'll present all three options with clear numbers so you can compare. Many homeowners are surprised to find the partnership option puts significantly more money in their pocket than they expected.",
  },
  {
    question: "How does the remodel partnership actually work?",
    answer:
      "We fund 100% of the renovation costs, manage the project from start to finish, then list the home at full market value. At closing, renovation costs plus a pre-agreed share are deducted, and you keep the rest. Most sellers net $50-100K more than a cash offer.",
  },
  {
    question: "Is there any obligation when I reach out?",
    answer:
      "None at all. We'll have a conversation, ask about your situation, and present options if we can help. If we're not the right fit or you decide to go another direction, no hard feelings. We'd rather earn trust than pressure anyone.",
  },
];

export default function OptionsFAQ() {
  return (
    <section className="section-padding bg-[var(--cream)]">
      <SectionHeader
        label="Common Questions"
        headline="Questions about your options."
      />

      <motion.div
        className="max-w-[720px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-[#ddd] py-8"
            variants={staggerItem}
          >
            <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-4 flex justify-between items-center cursor-pointer">
              {faq.question}
              <span className="text-[24px] text-[var(--text-muted)] font-light">
                +
              </span>
            </h3>
            <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75]">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
