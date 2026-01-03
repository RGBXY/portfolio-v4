import React from "react";
import { WorkCardDummy } from "../home/work-card";

const ExperiencePath = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 py-2 px-3 rounded-lg border border-gray-300">My Journey</div>
        <div className="w-1 h-20 bg-gray-100 border-x"></div>
      </div>

      <div className="flex flex-col gap-40">
        <div className="flex justify-center gap-25 w-full">
          <WorkCardDummy />
          <div className="flex flex-col items-center">
            <div className="w-1 h-[calc(50%-10px)] border-x bg-linear-to-b from-gray-100 to-gray-200 shrink-0"></div>
            <div className="border py-2 px-4 shrink-0 rounded-lg shadow-inner">2021</div>
            <div className="w-1 border-x h-[calc(50%+160px)] bg-linear-to-b from-gray-200 to-gray-100 shrink-0"></div>
          </div>
          <p className="bg-amber-300 w-92">halo</p>
        </div>

        <div className="flex justify-center gap-25 w-full">
          <WorkCardDummy />
          <div className="flex flex-col items-center">
            <div className="w-1 h-1/2 border-x bg-linear-to-b from-gray-100 to-gray-200 shrink-0"></div>
            <div className="w-4 h-4 bg-blue-500 shrink-0"></div>
            <div className="w-1 border-x h-[calc(50%+160px)] bg-linear-to-b from-gray-200 to-gray-100 shrink-0"></div>
          </div>
          <p className="bg-amber-300 w-92 text-start">halo</p>
        </div>

        <div className="flex justify-center gap-25 w-full">
          <WorkCardDummy />
          <div className="flex flex-col items-center">
            <div className="w-1 h-1/2 border-x bg-linear-to-b from-gray-100 to-gray-200 shrink-0"></div>
            <div className="w-4 h-4 bg-blue-500 shrink-0"></div>
            <div className="w-1 border-x h-[calc(50%+160px)] bg-linear-to-b from-gray-200 to-gray-100 shrink-0"></div>
          </div>
          <p className="bg-amber-300 w-92">halo</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePath;
