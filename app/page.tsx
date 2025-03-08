import Background from "@/components/Background";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Background />
      <Header />
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <GallerySection />
      <LocationSection />
      <RSVPSection />
      <Footer />
    </div>
  );
}
