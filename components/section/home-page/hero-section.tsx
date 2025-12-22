import { FeatherIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-full pt-20 flex items-center justify-center text-center">
      <div className="space-y-8 flex flex-col items-center w-full">
        <div className="border p-1.5 rounded-full bg-linear-to-br/srgb from-white via-gray-100 to-white shadow">
          <div className="border flex gap-2 text-gray-800 font-medium items-center w-full h-full rounded-full py-1 px-4">
            <span>👋 Let's Get Connect</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-6">
            <h1 className="text-gray-900 mx-auto max-w-3xl text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-7xl md:leading-26">Hey, I'm</h1>
            <div className="w-24 h-24 border p-2 rounded-2xl bg-linear-270 rotate-12 shadow bg-radial-[at_25%_25%] from-white to-gray-200 to-90%">
              <div className="w-full h-full border rounded-xl flex items-center justify-center"></div>
            </div>
            <h1 className="text-gray-900 mx-auto max-w-3xl text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-7xl md:leading-26">Derren Amadeo!</h1>
          </div>
          <h1 className="text-gray-900 mx-auto max-w-3xl text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-7xl md:leading-26">Front-End Developer</h1>
        </div>

        <p className="max-w-sm mx-auto w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil dolor commodi corrupti!</p>

        <div className="mt-20 w-full flex items-center gap-2">
          <div className="h-70 flex-1 border border-black"></div>
          <div className="h-70 flex-1 border border-black"></div>
          <div className="h-70 flex-1 border border-black"></div>
          <div className="h-70 flex-1 border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
