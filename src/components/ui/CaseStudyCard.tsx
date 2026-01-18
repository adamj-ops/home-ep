"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  label?: string;
  headline: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  metrics?: CaseStudyMetric[];
  imagePlaceholder?: string;
  variant?: "horizontal" | "vertical";
  reversed?: boolean;
  className?: string;
}

export default function CaseStudyCard({
  label,
  headline,
  description,
  ctaText,
  ctaHref,
  metrics = [],
  imagePlaceholder = "[Case study image]",
  variant = "horizontal",
  reversed = false,
  className,
}: CaseStudyCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <motion.div
      className={cn(
        "rounded-[20px] overflow-hidden bg-[var(--cream)] shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
        isHorizontal && "grid md:grid-cols-2",
        isHorizontal && reversed && "md:[direction:rtl] md:[&>*]:[direction:ltr]",
        className
      )}
      {...fadeUpInView}
    >
      {/* Image area */}
      <div className={cn(isHorizontal ? "min-h-[320px]" : "h-[240px]")}>
        <ImagePlaceholder
          description={imagePlaceholder}
          height="100%"
          className="w-full h-full"
          framed={false}
        />
      </div>

      {/* Content area */}
      <div className="p-8 md:p-12 flex flex-col justify-center">
        {label && (
          <div className="section-label">{label}</div>
        )}

        <h3 className="font-serif text-[28px] md:text-[32px] text-[var(--text-primary)] mb-4 leading-[1.2]">
          {headline}
        </h3>

        <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] mb-6">
          {description}
        </p>

        {ctaText && ctaHref && (
          <div className="mb-6">
            <Button href={ctaHref} variant="secondary">
              {ctaText}
            </Button>
          </div>
        )}

        {metrics.length > 0 && (
          <div className="flex gap-8 pt-4 border-t border-black/10">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-[24px] font-bold text-[var(--text-primary)]">
                  {metric.value}
                </div>
                <div className="text-[13px] text-[var(--text-muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
