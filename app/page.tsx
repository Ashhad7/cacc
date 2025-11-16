// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import ImportantLinks from "@/components/ImportantLinks";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Mission/>
      <VisionMission />
      <ImportantLinks />
      <Services />
      <Contact />
    </div>
  );
} 
