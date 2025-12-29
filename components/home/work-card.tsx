import React from "react";
import { Button } from "../ui/button";
import { GithubLogoIcon, Globe } from "@phosphor-icons/react/dist/ssr";

const WorkCard = () => {
  return (
    <div className="w-92 h-fit lg:max-w-100 max-h-120 hover:-translate-y-1 hover:shadow-lg transition border border-gray-300 rounded-xl overflow-hidden p-4">
      <div className="aspect-3/2 bg-linear-to-br/srgb from-white via-gray-100 to-white border rounded-xl border-gray-300"></div>
      <div className="pt-3 space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Profolio V3</h1>
          <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, explicabo.</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="rounded-sm border  border-gray-200 py-1 px-2 shadow-sm font-medium text-sm bg-background text-gray-700">
            <p>NextJS</p>
          </div>
          <div className="rounded-sm border border-gray-200 shadow-sm py-1 px-2 font-medium text-sm bg-background text-gray-700">
            <p>TailwindCSS</p>
          </div>
          <div className="rounded-sm border border-gray-200 shadow-sm py-1 px-2 font-medium text-sm bg-background text-gray-700">
            <p>Laravel</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="" size={"sm"}>
            <Globe />
            <span> Website</span>
          </Button>
          <Button className="" size={"sm"}>
            <GithubLogoIcon />
            <span> Source</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const WorkCardDummy = () => {
  return (
    <div className="w-92 h-fit lg:max-w-100 max-h-120 transition border border-gray-300 rounded-xl overflow-hidden p-4">
      <div className="aspect-3/2 bg-linear-to-br/srgb from-white via-gray-100 to-white border rounded-xl border-gray-300"></div>
    </div>
  );
};

export { WorkCard, WorkCardDummy };
