import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AnnouncementBar from "@/components/AnnouncementBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSlider />
    <AnnouncementBar />
    <ServicesSection />
    <AboutSection />
    <GallerySection />
    <BlogSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
