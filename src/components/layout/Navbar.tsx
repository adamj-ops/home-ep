"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navbarAnimation } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import MobileMenu from "@/components/ui/MobileMenu";
import { cn } from "@/lib/utils";
import {
  sellingDropdown,
  propertiesDropdown,
  resourcesDropdown,
  directNavLinks,
  desktopUtility,
  getDropdownHrefs,
} from "@/lib/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if a dropdown should show active state
  const isDropdownActive = (dropdown: typeof sellingDropdown) => {
    const hrefs = getDropdownHrefs(dropdown);
    return hrefs.some(
      (href) => pathname === href || pathname.startsWith(href + "/")
    );
  };

  // Check if a direct link is active
  const isLinkActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.nav
        className="flex justify-between items-center py-5 px-6 lg:px-14 bg-white sticky top-0 z-[100] border-b border-black/[0.06]"
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {/* Dropdowns */}
          <Dropdown
            config={sellingDropdown}
            isActive={isDropdownActive(sellingDropdown)}
          />
          <Dropdown
            config={propertiesDropdown}
            isActive={isDropdownActive(propertiesDropdown)}
          />
          <Dropdown
            config={resourcesDropdown}
            isActive={isDropdownActive(resourcesDropdown)}
          />

          {/* Direct links */}
          {directNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[14px] font-medium transition-colors tracking-[-0.1px] focus-visible:outline-offset-4",
                isLinkActive(link.href)
                  ? "text-[var(--green)]"
                  : "text-[#555] hover:text-[var(--text-primary)]"
              )}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-black/10" />

          {/* Phone (desktop utility) */}
          <a
            href={desktopUtility.phone.href}
            className="text-[13px] text-[#666] hover:text-[var(--text-primary)] transition-colors"
          >
            {desktopUtility.phone.label}
          </a>

          {/* CTA */}
          <Button href="/get-started" variant="secondary">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 -mr-2 text-[var(--text-primary)]"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
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

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
