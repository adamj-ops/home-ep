"use client";

import React from "react";
import { Button, Input, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import NextLink from "next/link";

const footerNavigation = {
  explore: [
    { name: "Your Options", href: "/options" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ],
  areas: [
    { name: "Plymouth", href: "/areas/plymouth" },
    { name: "Maple Grove", href: "/areas/maple-grove" },
    { name: "Eden Prairie", href: "/areas/eden-prairie" },
    { name: "All Areas →", href: "/areas" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "fontisto:facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "fontisto:instagram",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "fontisto:linkedin",
    },
  ],
};

export default function Footer() {
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h4 className="text-white text-[13px] font-semibold uppercase tracking-[1px] mb-5">
          {title}
        </h4>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                as={NextLink}
                href={item.href}
                className="text-[14px] text-[#888] hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  );

  return (
    <footer className="bg-[#0a0a0a] text-[#888] relative overflow-hidden">
      {/* Large watermark - Type Five style */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] font-serif font-normal tracking-[-8px] text-white/[0.03] whitespace-nowrap leading-none translate-y-[30%]">
          EVERYDAY
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 pt-16 pb-8 lg:pt-20 relative">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <NextLink href="/" className="flex items-baseline gap-1 mb-5">
              <span className="font-serif text-lg text-white">Everyday</span>
              <span className="font-sans text-sm text-[#666] font-normal">
                Properties
              </span>
            </NextLink>
            <p className="text-[14px] leading-[1.7] max-w-[280px] mb-6">
              Helping Twin Cities homeowners find better options for properties
              that need work.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  isExternal
                  className="text-[#666] hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          {renderList({ title: "Explore", items: footerNavigation.explore })}

          {/* Areas Column */}
          {renderList({ title: "Areas", items: footerNavigation.areas })}

          {/* Contact Column */}
          <div>
            <h4 className="text-white text-[13px] font-semibold uppercase tracking-[1px] mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6125550123"
                  className="text-[14px] text-[#888] hover:text-white transition-colors"
                >
                  (612) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@everydayproperties.com"
                  className="text-[14px] text-[#888] hover:text-white transition-colors"
                >
                  hello@everydayproperties.com
                </a>
              </li>
              <li>
                <span className="text-[14px]">Minneapolis, MN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
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
            <Input
              aria-label="Email address"
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              classNames={{
                base: "flex-1",
                inputWrapper:
                  "bg-[#1a1a1a] border border-[#333] hover:border-[#444] data-[focus=true]:border-[var(--green)] rounded-lg h-11",
                input: "text-[14px] text-white placeholder:text-[#666]",
              }}
              startContent={
                <Icon
                  icon="solar:letter-linear"
                  className="text-[#666] w-4 h-4"
                />
              }
            />
            <Button
              type="submit"
              className="bg-[var(--green)] hover:bg-[var(--green-dark)] text-white font-medium text-[14px] h-11 px-6 rounded-lg transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[#222] text-[13px] text-[#666]">
          <span>© {new Date().getFullYear()} Everyday Properties</span>
          <div className="flex gap-4">
            {footerNavigation.legal.map((item, idx) => (
              <React.Fragment key={item.name}>
                {idx > 0 && <span>•</span>}
                <Link
                  as={NextLink}
                  href={item.href}
                  className="text-[13px] text-[#666] hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
