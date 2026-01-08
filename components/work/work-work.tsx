import React from "react";
import { work_data } from "@/lib/data";
import { WorkCard } from "./work-card";

const WorkWork = () => {
  return (
    <div className="h-full w-full overflow-hidden pt-2">
      <div className="flex flex-wrap justify-center gap-5 h-full w-full relative">
        {work_data.map((data) => (
          <WorkCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default WorkWork;
