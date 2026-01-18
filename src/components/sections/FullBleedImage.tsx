"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface FullBleedImageProps {
  description: string;
  height?: string;
  mobileHeight?: string;
  variant?: "light" | "dark" | "green";
}

export default function FullBleedImage({
  description,
  height = "600px",
  mobileHeight = "400px",
  variant = "light",
}: FullBleedImageProps) {
  return (
    <motion.section {...fadeUpInView}>
      <ImagePlaceholder
        description={description}
        height={mobileHeight}
        variant={variant}
        className={`md:h-[${height}] w-full`}
        framed={false}
      />
    </motion.section>
  );
}
