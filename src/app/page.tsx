import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FlowSection from "@/components/FlowSection";
import MadeWithRiverside from "@/components/MadeWithRiverside";
import QualitySection from "@/components/QualitySection";
import AISoundSection from "@/components/AISoundSection";
import AIJumpInSection from "@/components/AIJumpInSection";
import EditingSection from "@/components/EditingSection";
import HostingSection from "@/components/HostingSection";
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
        <MadeWithRiverside />
        <QualitySection />
        <AISoundSection />
        <AIJumpInSection />
        <EditingSection />
        <HostingSection />
        <StudioBookingSection />
        <WebinarSection />
        <BusinessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
