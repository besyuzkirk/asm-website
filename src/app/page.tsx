import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GallerySlider from "@/components/GallerySlider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SystemsLinks from "@/components/SystemLinks";
import Team from "@/components/Team";
import WorkingHours from "@/components/WorkingHours";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="hizmetlerimiz">
        <Services />
      </div>
      <div id="ekibimiz">
        <Team />
      </div>
      <div id="calisma-plani">
        <WorkingHours />
      </div>
      <div id="cevrimici">
        <SystemsLinks />
      </div>
      <div id="bize-ulasin">
        <Contact />
      </div>
      <GallerySlider />
      <div id="randevu">
        <Footer />
      </div>
     
        
     
    </div>
  );
}

