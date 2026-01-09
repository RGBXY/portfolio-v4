import WorkDetail from "@/components/work/work-detail";
import WorkHero from "@/components/work/work-hero";
import React from "react";

const Work = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="max-w-7xl w-full h-full space-y-14 pb-20 px-6">
        <WorkHero />
        <WorkDetail />
      </div>
    </main>
  );
};

export default Work;
