import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OptionsHero from "@/components/sections/options/OptionsHero";
import OptionsCards from "@/components/sections/options/OptionsCards";
import OptionsComparison from "@/components/sections/options/OptionsComparison";
import OptionsFAQ from "@/components/sections/options/OptionsFAQ";
import TrustTicker from "@/components/sections/TrustTicker";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Your Options | Everyday Properties",
  description:
    "Three paths forward — cash offer, remodel partnership, or bridge to goal. Choose the option that fits your life.",
};

export default function OptionsPage() {
  return (
    <main id="main-content">
      <Navbar />
      <OptionsHero />
      <TrustTicker />
      <OptionsCards />
      <OptionsComparison />
      <OptionsFAQ />
      <FinalCTA
        headline="Let's find the right path for you."
        body="Get a no-obligation assessment of your options in 24 hours."
      />
      <Footer />
    </main>
  );
}
