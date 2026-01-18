import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import StorySection from "@/components/sections/about/StorySection";
import ValuesGrid from "@/components/sections/about/ValuesGrid";
import TeamSection from "@/components/sections/about/TeamSection";
import AreasServed from "@/components/sections/about/AreasServed";
import CommitmentCTA from "@/components/sections/about/CommitmentCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Everyday Properties",
  description:
    "Meet the team behind Everyday Properties. We're Twin Cities locals building a better way for homeowners to sell properties that need work.",
};

export default function AboutPage() {
  return (
<main id="main-content">
      <AboutHero />
      <StorySection />
      <ValuesGrid />
      <TeamSection />
      <AreasServed />
      <CommitmentCTA />
      <Footer />
    </main>
  );
}
