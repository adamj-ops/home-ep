"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navbarAnimation } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-6 lg:px-14 bg-white sticky top-0 z-[100] border-b border-black/[0.06]"
      aria-label="Main navigation"
      {...navbarAnimation}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-baseline gap-1 focus-visible:outline-offset-4"
        aria-label="Everyday Properties - Home"
      >
        <span className="font-serif text-lg text-[var(--text-primary)]">
          Everyday
        </span>
        <span className="font-sans text-sm text-[#666] font-normal">
          Properties
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-11" role="menubar">
        <Link
          href="/options"
          className="text-[14px] font-medium text-[#555] hover:text-[var(--text-primary)] transition-colors tracking-[-0.1px] focus-visible:outline-offset-4"
          role="menuitem"
        >
          Your Options
        </Link>
        <Link
          href="/how-it-works"
          className="text-[14px] font-medium text-[#555] hover:text-[var(--text-primary)] transition-colors tracking-[-0.1px] focus-visible:outline-offset-4"
          role="menuitem"
        >
          How It Works
        </Link>
        <Link
          href="/about"
          className="text-[14px] font-medium text-[#555] hover:text-[var(--text-primary)] transition-colors tracking-[-0.1px] focus-visible:outline-offset-4"
          role="menuitem"
        >
          About
        </Link>
        <Button href="/get-started" variant="secondary">
          Start here
        </Button>
      </div>

      {/* Mobile menu button (placeholder for future implementation) */}
      <button
        className="md:hidden p-2 -mr-2 text-[var(--text-primary)]"
        aria-label="Open menu"
        aria-expanded="false"
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
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </motion.nav>
  );
}
