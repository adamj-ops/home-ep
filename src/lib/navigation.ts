/**
 * Navigation Data Model
 * Single source of truth for all navigation across Navbar, MobileMenu, and Footer
 */

// ============================================================================
// Types
// ============================================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface FeaturedLink extends NavLink {
  subtext: string;
}

export interface NavSection {
  label?: string;
  links: NavLink[];
}

export interface DropdownConfig {
  label: string;
  featured?: FeaturedLink;
  sections?: NavSection[];
  links?: NavLink[];
}

export interface MobileSection {
  label: string;
  links: NavLink[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// ============================================================================
// Desktop Utility Links (phone/email near CTA)
// ============================================================================

export const desktopUtility = {
  phone: {
    label: "(612) 555-0123",
    href: "tel:6125550123",
  },
  email: {
    label: "hello@everydayproperties.com",
    href: "mailto:hello@everydayproperties.com",
  },
};

// ============================================================================
// Dropdown Configurations
// ============================================================================

export const sellingDropdown: DropdownConfig = {
  label: "Selling",
  featured: {
    label: "Your Options",
    href: "/options",
    subtext: "Compare your three paths",
  },
  links: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const propertiesDropdown: DropdownConfig = {
  label: "Properties",
  featured: {
    label: "Homes for Sale",
    href: "/properties",
    subtext: "Move-in ready renovations",
  },
  links: [
    { label: "Investment Opportunities", href: "/properties/investment" },
    { label: "Recently Sold", href: "/properties/sold" },
  ],
};

export const resourcesDropdown: DropdownConfig = {
  label: "Resources",
  sections: [
    {
      label: "FOR SELLERS",
      links: [
        { label: "Selling Guides", href: "/resources/selling-guides" },
        { label: "Areas We Serve", href: "/areas" },
      ],
    },
    {
      label: "FOR AGENTS",
      links: [
        { label: "Partner With Us", href: "/agents/partner" },
        { label: "Agent Resources", href: "/agents/resources" },
      ],
    },
  ],
  links: [{ label: "Blog", href: "/blog" }],
};

// All dropdowns for iteration
export const dropdowns = [sellingDropdown, propertiesDropdown, resourcesDropdown];

// Direct nav links (no dropdown)
export const directNavLinks: NavLink[] = [{ label: "About", href: "/about" }];

// ============================================================================
// Mobile Menu Sections
// ============================================================================

export const mobileSections: MobileSection[] = [
  {
    label: "SELLING YOUR HOME",
    links: [
      { label: "Your Options", href: "/options" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "PROPERTIES",
    links: [
      { label: "Homes for Sale", href: "/properties" },
      { label: "Investment Deals", href: "/properties/investment" },
      { label: "Recently Sold", href: "/properties/sold" },
    ],
  },
  {
    label: "RESOURCES",
    links: [
      { label: "Seller Guides", href: "/resources/selling-guides" },
      { label: "For Agents", href: "/agents/partner" },
      { label: "Blog", href: "/blog" },
      { label: "Areas We Serve", href: "/areas" },
    ],
  },
];

export const mobileDirectLinks: NavLink[] = [{ label: "About Us", href: "/about" }];

// ============================================================================
// Footer Columns
// ============================================================================

export const footerColumns: FooterColumn[] = [
  {
    title: "SELLING",
    links: [
      { label: "Your Options", href: "/options" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "FAQ", href: "/faq" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "PROPERTIES",
    links: [
      { label: "Homes for Sale", href: "/properties" },
      { label: "Investment Deals", href: "/properties/investment" },
      { label: "Recently Sold", href: "/properties/sold" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Seller Guides", href: "/resources/selling-guides" },
      { label: "For Agents", href: "/agents/partner" },
      { label: "Blog", href: "/blog" },
      { label: "Areas We Serve", href: "/areas" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

// ============================================================================
// Popular Areas (Tier 1 Cities)
// ============================================================================

export const popularAreas: NavLink[] = [
  { label: "Plymouth", href: "/areas/plymouth" },
  { label: "Maple Grove", href: "/areas/maple-grove" },
  { label: "Eden Prairie", href: "/areas/eden-prairie" },
  { label: "St. Louis Park", href: "/areas/st-louis-park" },
  { label: "Edina", href: "/areas/edina" },
  { label: "Minnetonka", href: "/areas/minnetonka" },
  { label: "Bloomington", href: "/areas/bloomington" },
];

export const areasMoreLink: NavLink = {
  label: "More →",
  href: "/areas",
};

// ============================================================================
// Legal Links
// ============================================================================

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// ============================================================================
// Social Links
// ============================================================================

export const socialLinks: SocialLink[] = [
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
];

// ============================================================================
// Brand Info
// ============================================================================

export const brandInfo = {
  name: "Everyday Properties",
  tagline:
    "Helping Twin Cities homeowners find better options for properties that need work.",
  phone: "(612) 555-0123",
  phoneHref: "tel:6125550123",
  email: "hello@everydayproperties.com",
  emailHref: "mailto:hello@everydayproperties.com",
  location: "Minneapolis, MN",
};

// ============================================================================
// Helper: Get all hrefs from a dropdown (for active state detection)
// ============================================================================

export function getDropdownHrefs(dropdown: DropdownConfig): string[] {
  const hrefs: string[] = [];

  if (dropdown.featured) {
    hrefs.push(dropdown.featured.href);
  }

  if (dropdown.links) {
    hrefs.push(...dropdown.links.map((link) => link.href));
  }

  if (dropdown.sections) {
    dropdown.sections.forEach((section) => {
      hrefs.push(...section.links.map((link) => link.href));
    });
  }

  return hrefs;
}
