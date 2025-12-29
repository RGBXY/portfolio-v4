import AboutSection from "@/components/home/about-section";
import ContactSSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import WorkSection from "@/components/home/work-section";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center ">
      <div className="w-6xl h-full space-y-40">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSSection />
      </div>
    </main>
  );
}
