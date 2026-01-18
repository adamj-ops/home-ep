import Navbar from "@/components/layout/Navbar";
import GetStartedClient from "@/components/sections/get-started/GetStartedClient";

export const metadata = {
  title: "Get Started | Everyday Properties",
  description:
    "Tell us about your property and get personalized selling options within 24 hours. No obligation, no pressure — just real options.",
};

export default function GetStartedPage() {
  return (
    <main id="main-content">
      <Navbar />
      <GetStartedClient />
    </main>
  );
}
