import Image from "next/image";
import React from "react";

const ToolsAboutCard = () => {
  return (
    <div className="overflow-hidden relative h-full flex flex-col group justify-between bg-gray-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white  to-gray-100 border border-gray-300 p-6">
      <div className="absolute left-0 top-0 h-full z-40 w-20 bg-linear-to-r from-white/70 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full z-40 w-20 bg-linear-to-l from-gray-100/70 to-transparent"></div>

      <div className="flex mt-10 justify-center items-center gap-4">
        <div className="w-30 h-30 group-hover:-translate-y-3 duration-300 delay-200 transition border p-2 rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow  shrink-0">
          <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
            <Image className="w-15 h-15" src={"/logo/postman.png"} alt="map" width={800} height={800} />
          </div>
        </div>
        <div className="w-35 h-35 group-hover:-translate-y-3 duration-300 delay-100 transition border p-2.5 rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow  shrink-0">
          <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
            <Image className="w-15 h-15" src={"/logo/vscode.png"} alt="map" width={800} height={800} />
          </div>
        </div>
        <div className="w-40 h-40 group-hover:-translate-y-3 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
          <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
            <Image className="w-20 h-20" src={"/logo/notion.png"} alt="map" width={800} height={800} />
          </div>
        </div>
        <div className="w-35 h-35 group-hover:-translate-y-3 duration-300 delay-100 transition border p-2.5 rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow  shrink-0">
          <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
            <Image className="w-15 h-15" src={"/logo/notes.png"} alt="map" width={800} height={800} />
          </div>
        </div>
        <div className="w-30 h-30 group-hover:-translate-y-3 duration-300 delay-200 transition border p-2 rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow  shrink-0">
          <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
            <Image className="w-15 h-15" src={"/logo/figma.png"} alt="map" width={800} height={800} />
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <h1 className="text-xl font-semibold">Tools I Usually Use</h1>
        <p className="text-gray-700 text-lg">Check out all tools that I usually use to create magic</p>
      </div>
    </div>
  );
};

export default ToolsAboutCard;
