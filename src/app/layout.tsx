import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everyday Properties | Options for Your Home",
  description:
    "Helping Twin Cities homeowners find better options for properties that need work. Cash offers, renovation partnerships, and bridge solutions.",
  keywords: [
    "sell house fast",
    "Twin Cities",
    "Minneapolis",
    "home buyer",
    "renovation partnership",
    "cash offer",
    "property options",
  ],
  authors: [{ name: "Everyday Properties" }],
  openGraph: {
    title: "Everyday Properties | Options for Your Home",
    description:
      "Helping Twin Cities homeowners find better options for properties that need work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/* Skip link for keyboard/screen reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
