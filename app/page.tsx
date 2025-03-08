import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full">
      <HeroSection />
      <EventSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </div>
  );
}
