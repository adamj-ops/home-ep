"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { DropdownConfig } from "@/lib/navigation";

interface DropdownProps {
  config: DropdownConfig;
  isActive?: boolean;
}

const CLOSE_DELAY = 150; // ms delay before closing on mouse leave

export default function Dropdown({ config, isActive = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  }, []);

  // Close on blur outside
  const handleBlur = useCallback((e: React.FocusEvent) => {
    // Check if focus is moving outside the container
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Animation variants
  const panelVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, y: 6 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 6 },
      };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      {/* Trigger */}
      <button
        type="button"
        className={cn(
          "flex items-center gap-1.5 text-[14px] font-medium transition-colors tracking-[-0.1px] focus-visible:outline-offset-4",
          isOpen || isActive
            ? "text-[var(--text-primary)]"
            : "text-[#555] hover:text-[var(--text-primary)]",
          isActive && "bg-black/[0.03] rounded-md px-2 py-1 -mx-2"
        )}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
      >
        {config.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[280px] p-6 bg-white rounded-lg border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.14)] z-50"
            role="menu"
          >
            {/* Featured link */}
            {config.featured && (
              <>
                <Link
                  href={config.featured.href}
                  className="block group"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[17px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--green)] transition-colors">
                    {config.featured.label}
                  </span>
                  <span className="block text-[13px] text-[#888] mt-0.5">
                    {config.featured.subtext}
                  </span>
                </Link>
                {(config.links?.length || config.sections?.length) && (
                  <div className="h-px bg-[#eee] my-4" />
                )}
              </>
            )}

            {/* Sections (for Resources dropdown) */}
            {config.sections?.map((section, sectionIdx) => (
              <div key={section.label || sectionIdx}>
                {section.label && (
                  <span className="block text-[11px] uppercase tracking-[1px] text-[#888] mb-3">
                    {section.label}
                  </span>
                )}
                <div className="space-y-3 mb-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-[15px] text-[#333] hover:text-[var(--green)] transition-colors"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                {sectionIdx < (config.sections?.length ?? 0) - 1 && (
                  <div className="h-px bg-[#eee] my-4" />
                )}
              </div>
            ))}

            {/* Divider before standalone links if we have sections */}
            {config.sections?.length && config.links?.length && (
              <div className="h-px bg-[#eee] my-4" />
            )}

            {/* Standard links */}
            {config.links && (
              <div className="space-y-3">
                {config.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[15px] text-[#333] hover:text-[var(--green)] transition-colors"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
