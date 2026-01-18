import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowItWorksHero from "@/components/sections/how-it-works/HowItWorksHero";
import ProcessSection from "@/components/sections/how-it-works/ProcessSection";
import TimelineCards from "@/components/sections/how-it-works/TimelineCards";
import CommitmentStatement from "@/components/sections/CommitmentStatement";
import HowItWorksFinalCTA from "@/components/sections/how-it-works/HowItWorksFinalCTA";

export const metadata = {
  title: "How It Works | Everyday Properties",
  description:
    "Learn our simple 3-step process. From first call to closing day, here's exactly what to expect when you sell your home with Everyday Properties.",
};

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <Navbar />
      <HowItWorksHero />
      <ProcessSection />
      <TimelineCards />
      <CommitmentStatement
        variant="cream"
        quote="We believe you deserve to know all your options — not just the one that's easiest for us. That's why we built a company around giving you real choices."
        ctaText="Meet the team →"
        ctaHref="/about"
      />
      <HowItWorksFinalCTA />
      <Footer />
    </main>
  );
}
