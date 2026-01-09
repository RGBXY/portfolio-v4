import HomeAbout from "@/components/home/home-about";
import HomeContact from "@/components/home/home-contact";
import HomeHero from "@/components/home/home-hero";
import HomeWork from "@/components/home/home-work";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full lg:space-y-40 md:space-y-30 space-y-25 bg-background z-10 pb-14 px-5">
        <HomeHero />
        <HomeAbout />
        <HomeWork />
        <HomeContact />
      </div>
    </main>
  );
}
