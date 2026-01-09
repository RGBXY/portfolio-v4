import AboutDetail from "@/components/about/about-detail";
import AboutExperience from "@/components/about/about-experience";
import AboutHero from "@/components/about/about-hero";
import AboutSkills from "@/components/about/about-skills";
import AboutHobbies from "@/components/about/about-values";

import React from "react";

const About = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full lg:space-y-40 space-y-30 bg-background z-10 pb-14 px-5 overflow-x-clip">
        <AboutHero />
        <AboutDetail />
        <AboutExperience />
        <AboutSkills />
        <AboutHobbies />
      </div>
    </main>
  );
};

export default About;
