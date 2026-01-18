"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  mobileSections,
  mobileDirectLinks,
  brandInfo,
} from "@/lib/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Close on pathname change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus close button when menu opens
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Basic focus trap
  const handleTabKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    },
    []
  );

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const drawerVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[200]"
          onKeyDown={handleTabKey}
        >
          {/* Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{
              type: prefersReducedMotion ? "tween" : "spring",
              damping: 25,
              stiffness: 300,
              duration: prefersReducedMotion ? 0 : undefined,
            }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-black/[0.06]">
              <Link
                href="/"
                className="flex items-baseline gap-1"
                onClick={onClose}
              >
                <span className="font-serif text-lg text-[var(--text-primary)]">
                  Everyday
                </span>
                <span className="font-sans text-sm text-[#666] font-normal">
                  Properties
                </span>
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[var(--text-primary)] hover:bg-black/[0.03] rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto py-6">
              {/* Sections */}
              {mobileSections.map((section) => (
                <div key={section.label} className="mb-6 px-6">
                  <span className="block text-[11px] uppercase tracking-[1px] text-[#888] mb-3 font-medium">
                    {section.label}
                  </span>
                  <div className="space-y-1">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 text-[15px] text-[var(--text-primary)] hover:text-[var(--green)] transition-colors"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Direct links */}
              <div className="px-6 mb-6">
                {mobileDirectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-[15px] text-[var(--text-primary)] hover:text-[var(--green)] transition-colors font-medium"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom CTA section */}
            <div className="border-t border-black/[0.06] p-6 bg-[var(--cream)]">
              <Button
                href="/get-started"
                variant="primary"
                className="w-full justify-center mb-4"
              >
                Get Started
              </Button>
              <a
                href={brandInfo.phoneHref}
                className="flex items-center justify-center gap-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call: {brandInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
