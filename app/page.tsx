import AboutSection from "@/components/home/about-section";
import ContactSSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import WorkSection from "@/components/home/work-section";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full lg:space-y-40 md:space-y-30 space-y-25 bg-background z-10 pb-14 px-5">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSSection />
      </div>
    </main>
  );
}
