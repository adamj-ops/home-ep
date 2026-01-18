import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ReshapingSection from "@/components/sections/ReshapingSection";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import HandoffSection from "@/components/sections/HandoffSection";
import DualCTA from "@/components/sections/DualCTA";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <ReshapingSection />
      <BenefitsGrid />
      <StatsBar />
      <TestimonialsGrid />
      <HandoffSection />
      <DualCTA />
      <Footer />
    </main>
  );
}
