import Navbar from "@/components/rehab/Navbar";
import HeroSection from "@/components/rehab/HeroSection";
import StatsSection from "@/components/rehab/StatsSection";
import AboutSection from "@/components/rehab/AboutSection";
import ServicesSection from "@/components/rehab/ServicesSection";
import ProgramsSection from "@/components/rehab/ProgramsSection";
import TestimonialsSection from "@/components/rehab/TestimonialsSection";
import TeamSection from "@/components/rehab/TeamSection";
import ContactSection from "@/components/rehab/ContactSection";
import Footer from "@/components/rehab/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SerennityCare Rehabilitation Center | Compassionate Recovery",
  description:
    "SerennityCare offers nationally accredited addiction recovery and rehabilitation programs. Evidence-based, compassionate care for lasting sobriety. Call 1-800-555-1234.",
};

export default function RehabLandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
