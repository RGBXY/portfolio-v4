import AboutAbout from "@/components/about/about-about";
import ExperienceAbout from "@/components/about/experience-about";
import HeroAbout from "@/components/about/hero-about";
import IloveAbout from "@/components/about/ilove-about";
import SkillsAbout from "@/components/about/skills-about";
import Test from "@/components/about/tets";
import React from "react";

const About = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="w-7xl h-full space-y-40 pb-20">
        <HeroAbout />
        <AboutAbout />
        <ExperienceAbout />
        <SkillsAbout />
        <IloveAbout />
        <Test />
      </div>
    </main>
  );
};

export default About;
