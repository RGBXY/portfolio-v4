import HeroWork from "@/components/work/hero-work";
import WorkWork from "@/components/work/work-work";
import React from "react";

const Work = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full space-y-14 pb-20 px-6">
        <HeroWork />
        <WorkWork />
      </div>
    </main>
  );
};

export default Work;
