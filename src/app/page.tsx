import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FlowSection from "@/components/FlowSection";
import StudioReel from "@/components/StudioReel";
import QualitySection from "@/components/QualitySection";
import AISoundSection from "@/components/AISoundSection";
import AIJumpInSection from "@/components/AIJumpInSection";
import FAQSection from "@/components/FAQSection";
import StudioBookingSection from "@/components/StudioBookingSection";
import WebinarSection from "@/components/WebinarSection";
import BusinessSection from "@/components/BusinessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FlowSection />
        <StudioReel />
        <QualitySection />
        <AISoundSection />
        <AIJumpInSection />
        <FAQSection />
        <StudioBookingSection />
        <WebinarSection />
        <BusinessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
