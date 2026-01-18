"use client";

import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
import {
  footerColumns,
  popularAreas,
  areasMoreLink,
  legalLinks,
  socialLinks,
  brandInfo,
} from "@/lib/navigation";

// Toggle for newsletter section (A/B testing)
const SHOW_NEWSLETTER = false;

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#888] relative overflow-hidden">
      {/* Large watermark - Type Five style */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] font-serif font-normal tracking-[-8px] text-white/[0.03] whitespace-nowrap leading-none translate-y-[30%]">
          EVERYDAY
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 pt-16 lg:pt-20 pb-10 relative">
        {/* Main grid: Brand (2fr) + 4 link columns (1fr each) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NextLink href="/" className="flex items-baseline gap-1 mb-5">
              <span className="font-serif text-lg text-white">Everyday</span>
              <span className="font-sans text-sm text-[#666] font-normal">
                Properties
              </span>
            </NextLink>
            <p className="text-[14px] leading-[1.7] max-w-[280px] mb-6">
              {brandInfo.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={brandInfo.phoneHref}
                className="block text-[15px] text-white hover:text-[var(--green)] transition-colors duration-150"
              >
                {brandInfo.phone}
              </a>
              <a
                href={brandInfo.emailHref}
                className="block text-[14px] text-[#888] hover:text-white transition-colors duration-150"
              >
                {brandInfo.email}
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white text-[13px] font-semibold uppercase tracking-[1px] mb-5">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      as={NextLink}
                      href={link.href}
                      className="text-[14px] text-[#888] hover:text-white hover:translate-x-[1px] transition-all duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section (gated for A/B testing) */}
        {SHOW_NEWSLETTER && (
          <div className="rounded-2xl bg-[#151515] my-12 p-6 lg:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-white text-[15px] font-semibold">
                Subscribe to our newsletter
              </h3>
              <p className="text-[14px] text-[#888] mt-2">
                Get market insights, tips for homeowners, and updates — straight
                to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 sm:max-w-md lg:shrink-0">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-[#1a1a1a] border border-[#333] hover:border-[#444] focus:border-[var(--green)] rounded-lg h-11 px-4 text-[14px] text-white placeholder:text-[#666] outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--green)] hover:bg-[var(--green-dark)] text-white font-medium text-[14px] h-11 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}

        {/* Areas Row */}
        <div className="border-t border-[#222] pt-8 mt-12">
          <span className="block text-[11px] uppercase tracking-[1px] text-[#666] mb-3">
            AREAS WE SERVE
          </span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px]">
            {popularAreas.map((area, idx) => (
              <React.Fragment key={area.href}>
                <Link
                  as={NextLink}
                  href={area.href}
                  className="text-[#888] hover:text-white transition-colors duration-150"
                >
                  {area.label}
                </Link>
                {idx < popularAreas.length - 1 && (
                  <span className="text-[#444]">•</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-[#444]">•</span>
            <Link
              as={NextLink}
              href={areasMoreLink.href}
              className="text-[#888] hover:text-white transition-colors duration-150"
            >
              {areasMoreLink.label}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-[#222] text-[13px] text-[#666]">
          {/* Left: Copyright */}
          <span>
            © {new Date().getFullYear()} {brandInfo.name}. All rights reserved.
          </span>

          {/* Right: Legal + Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Legal links */}
            <div className="flex items-center gap-3">
              {legalLinks.map((link, idx) => (
                <React.Fragment key={link.href}>
                  {idx > 0 && <span className="text-[#444]">•</span>}
                  <Link
                    as={NextLink}
                    href={link.href}
                    className="text-[13px] text-[#666] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  isExternal
                  className="text-[#666] hover:text-white transition-colors duration-150"
                  aria-label={item.name}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
