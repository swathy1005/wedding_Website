import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import EventDetailsSection from "@/components/wedding/EventDetailsSection";
import VenueSection from "@/components/wedding/VenueSection";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <HeroSection />
      <CountdownSection />
      {/* <LoveStorySection /> */}
      <EventDetailsSection />
      <VenueSection />
      {/* <GallerySection />
      <RSVPSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
