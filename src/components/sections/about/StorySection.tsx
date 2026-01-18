"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function StorySection() {
  return (
    <section className="py-[100px] px-6 md:px-14 bg-[var(--cream)]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[55%_45%] gap-12 md:gap-20 items-center">
        {/* Left Column - Content */}
        <motion.div {...slideInLeft}>
          <h2 className="font-serif text-[32px] md:text-[36px] text-[var(--text-primary)] leading-[1.15] tracking-[-0.5px] font-normal mb-8">
            Built different, on purpose.
          </h2>

          <div className="space-y-6 text-[17px] text-[var(--text-secondary)] leading-[1.8]">
            <p>
              Most real estate investors compete on one thing: buying as cheap
              as possible. They show up with a lowball offer, pressure you to
              decide fast, and disappear.
            </p>

            <p>
              We saw a better way. What if a company actually helped homeowners
              get the best outcome for their situation — even if that meant
              recommending something other than selling to us?
            </p>

            <p>
              That&apos;s why we created three paths: a fair cash offer for
              speed and certainty, a renovation partnership to maximize your
              return, and a bridge solution when you need help getting to market
              value. You choose what&apos;s right for you.
            </p>

            <p className="text-[var(--text-primary)] font-medium">
              We&apos;re not here to buy houses cheap. We&apos;re here to help
              families move forward.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div {...slideInRight} className="h-full min-h-[300px] md:min-h-[400px]">
          <ImagePlaceholder
            description="[Image: Before/after of a recent renovation project]"
            height="100%"
            className="rounded-[20px] h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
