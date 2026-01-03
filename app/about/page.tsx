import AboutAbout from "@/components/about/about-about";
import HeroAbout from "@/components/about/hero-about";
import React from "react";

const About = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="w-7xl h-full space-y-40 pb-20">
        <HeroAbout />
        <AboutAbout />
      </div>
    </main>
  );
};

export default About;
