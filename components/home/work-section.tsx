import React from "react";
import { Button } from "../ui/button";
import { ArrowCircleRightIcon } from "@phosphor-icons/react/dist/ssr";
import { WorkCard, WorkCardDummy } from "./work-card";

const WorkSection = () => {
  return (
    <section className="w-full h-full space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-lg text-purple-700">Work</h1>
        <h1 className="text-4xl font-semibold max-w-md mx-auto">{"A collection of my favorite works."}</h1>
      </div>

      <div className="h-160 pt-2 overflow-hidden">
        <div className="flex flex-wrap justify-between gap-5 h-full relative">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCardDummy />
          <WorkCardDummy />
          <WorkCardDummy />

          <div className="absolute bottom-0 h-30 w-full bg-linear-to-b/srgb from-transparent to-background"></div>
        </div>
      </div>

      <div className="flex items-center justify-center -mt-10 relative">
        <Button size={"lg"} className=" absolute mx-auto border group hover:shadow-inner [&_svg:not([class*='size-'])]:size-6 border-gray-400 rounded-full bg-linear-to-br/srgb from-white via-gray-100 to-white shadow text-black text-lg">
          <span>{"EXPLORE MORE"}</span>
          <ArrowCircleRightIcon className="group-hover:-rotate-45 transition" />
        </Button>
      </div>
    </section>
  );
};

export default WorkSection;
