import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-6xl h-full space-y-40">
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}
