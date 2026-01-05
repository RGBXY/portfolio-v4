import React from "react";
import { BlueprintIcon, Browser, Database, PenNibIcon } from "@phosphor-icons/react/dist/ssr";

const SkillsAbout = () => {
  return (
    <section className="w-full h-full">
      <div className="w-6xl h-full flex justify-center gap-10 mx-auto">
        <div className="text-start space-y-4 flex-1 ">
          <div className="border px-3 py-1 rounded-md shadow-inner w-fit">Skills Sets</div>
          <h1 className="md:text-5xl text-4xl font-semibold max-w-sm">
            Skills set to <span className="font-serif italic text-gray-900 underline">help </span>.
          </h1>
          <p className="w-sm text-gray-600"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quam.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-80 min-h-48 group border border-gray-300 p-4 flex flex-col justify-between shadow overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 border border-gray-300 rounded-lg flex items-center justify-center shadow-inner shadow-gray-300">
                <Browser size={24} />
              </div>
              <div className="flex transition">
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg z-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-100 duration-500 translate-x-50 transition bg-white"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 z-5 group-hover:translate-none group-hover:opacity-100 opacity-0  delay-200 duration-500 translate-x-50 transition bg-amber-300"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-300 duration-500 translate-x-50 transition bg-red-200"></div>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-lg font-semibold">Front-End Dev</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="w-80 min-h-48 group border border-gray-300 p-4 flex flex-col justify-between shadow overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 border border-gray-300 rounded-lg flex items-center justify-center shadow-inner shadow-gray-300">
                <Database size={24} />
              </div>
              <div className="flex transition">
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg z-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-100 duration-500 translate-x-50 transition bg-white"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 z-5 group-hover:translate-none group-hover:opacity-100 opacity-0  delay-200 duration-500 translate-x-50 transition bg-amber-300"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-300 duration-500 translate-x-50 transition bg-red-200"></div>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-lg font-semibold">Backend-End Dev</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="w-80 min-h-48 group border border-gray-300 p-4 flex flex-col justify-between shadow overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 border border-gray-300 rounded-lg flex items-center justify-center shadow-inner shadow-gray-300">
                <PenNibIcon size={24} />
              </div>
              <div className="flex transition">
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg z-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-100 duration-500 translate-x-50 transition bg-white"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 z-5 group-hover:translate-none group-hover:opacity-100 opacity-0  delay-200 duration-500 translate-x-50 transition bg-amber-300"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-300 duration-500 translate-x-50 transition bg-red-200"></div>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-lg font-semibold">Designer UI/UX</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="w-80 min-h-48 group border border-gray-300 p-4 flex flex-col justify-between shadow overflow-hidden ">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 border border-gray-300 rounded-lg flex items-center justify-center shadow-inner shadow-gray-300">
                <BlueprintIcon size={24} />
              </div>
              <div className="flex transition">
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg z-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-100 duration-500 translate-x-50 transition bg-white"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 z-5 group-hover:translate-none group-hover:opacity-100 opacity-0  delay-200 duration-500 translate-x-50 transition bg-amber-300"></div>
                <div className="h-14 w-20 shadow border border-gray-300 rounded-lg -ml-10 group-hover:translate-none group-hover:opacity-100 opacity-0 delay-300 duration-500 translate-x-50 transition bg-red-200"></div>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-lg font-semibold">Product Engineer</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAbout;
