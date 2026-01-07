import React from "react";
import { WorkCard } from "../home/work-card";

const WorkWork = () => {
  return (
    <div className="h-full w-full overflow-hidden pt-2">
      <div className="flex flex-wrap justify-center gap-5 h-full w-full relative">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default WorkWork;
