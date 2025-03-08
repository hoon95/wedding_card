import HeroSection from "@/components/HeroSection";
// import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* <Background /> */}
      <HeroSection />
      {/* <CoupleSection /> */}
      <EventSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </div>
  );
}
