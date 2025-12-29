import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-full pt-20 flex items-center justify-center text-center">
      <div className="space-y-8 flex flex-col items-center w-full">
        <Link href={"#contact"}>
          <div className="border p-1.5 rounded-full bg-linear-to-br/srgb from-white via-gray-100 to-white shadow">
            <div className="border flex gap-2 text-gray-800 font-medium items-center w-full h-full rounded-full py-1 px-4">
              <span>{"👋 Let's Get Connect"}</span>
            </div>
          </div>
        </Link>

        <div className="text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-7xl md:leading-24">
          <div className="flex items-center gap-6">
            <h1 className="text-black">{"Hey, I'm"}</h1>
            <div className="w-24 h-24 border p-2 rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow hover:rotate-8 transition">
              <Image className="w-full h-full shadow-inner border border-gray-300 rounded-xl overflow-hidden flex items-center justify-center" src={"/image/profile.webp"} alt="profile" width={300} height={300} />
            </div>
            <h1 className="text-black">Derren Amadeo!</h1>
          </div>
          <h1 className="text-black">Front-End Developer</h1>
        </div>

        <p className="max-w-sm mx-auto w-full">Blending design and code to create smooth and meaningful user experiences.</p>

        <div className="mt-10 w-full flex items-center justify-center">
          <div className="h-70 w-87.5 bg-gray-100 border border-gray-300  rounded-xl -rotate-4 z-5 hover:-rotate-8 hover:scale-110 transition"></div>
          <div className="h-70 w-87.5 bg-gray-100 border border-gray-300  rounded-xl rotate-4 translate-y-6 -ml-10 z-4 hover:rotate-8 hover:scale-110 transition"></div>
          <div className="h-70 w-87.5 bg-gray-100 border border-gray-300  rounded-xl -ml-10 -rotate-4 z-3 hover:-rotate-8 hover:scale-110 transition"></div>
          <div className="h-70 w-87.5 bg-gray-100 border border-gray-300  rounded-xl -ml-10 rotate-4 translate-y-6 hover:rotate-8 hover:scale-110 transition"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
