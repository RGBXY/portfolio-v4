import AboutAbout from "@/components/about/about-about";
import ExperienceAbout from "@/components/about/experience-about";
import HeroAbout from "@/components/about/hero-about";
import IloveAbout from "@/components/about/ilove-about";
import SkillsAbout from "@/components/about/skills-about";
import React from "react";

const About = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full lg:space-y-40 space-y-30 bg-background z-10 pb-14 px-5 overflow-x-clip">
        <HeroAbout />
        <AboutAbout />
        <ExperienceAbout />
        <SkillsAbout />
        <IloveAbout />
      </div>
    </main>
  );
};

export default About;
