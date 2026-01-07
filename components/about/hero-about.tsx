import Image from "next/image";
import React from "react";
import Jumbotron from "../shared/jumbotron";

const HeroAbout = () => {
  return (
    <section className="w-full h-full pt-20">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-25">
        <div className="flex flex-col items-center">
          <Jumbotron title="👨‍💻 About Me" subTitle="Here’s a Little More About" primary="Who I am!" description="A simple introduction to my work, my interests, and the things I enjoy." />

          <div className="mt-14 w-full flex items-center justify-center font-serif text-center">
            <div className="lg:h-80 lg:w-70 md:h-80 md:w-70 h-40 w-35 flex flex-col md:gap-3 gap-0.5 md:p-4 p-2 bg-white border border-gray-300 shadow-xl -rotate-4 z-5 hover:rotate-0 hover:scale-105 transition">
              <Image src={"/image/about-music.png"} alt="image-2" width={400} height={400} className="w-full lg:h-59 md:h-57 h-30 border border-gray-300 object-cover" />
              <h1 className="md:text-3xl">Cafe & Music</h1>
            </div>
            <div className="lg:h-80 lg:w-70 md:h-80 md:w-70 h-40 w-35 flex flex-col md:gap-3 gap-0.5 lg:p-4 p-2 bg-white border border-gray-300 shadow-xl  rotate-4 translate-y-6 -ml-6 z-4 hover:rotate-0 hover:scale-105 transition">
              <Image src={"/image/about-explore.png"} alt="image-2" width={400} height={400} className="w-full lg:h-59 md:h-57 h-30 border border-gray-300 object-cover" />
              <h1 className="md:text-3xl">Exploring Place</h1>
            </div>
            <div className="lg:h-80 lg:w-70 md:h-80 md:w-70 h-40 w-35 flex flex-col md:gap-3 gap-0.5 lg:p-4 p-2 bg-white border border-gray-300 shadow-xl -ml-6 -rotate-4 z-3 hover:rotate-0 hover:scale-105 transition">
              <Image src={"/image/hero-1.png"} alt="image-1" width={400} height={400} className="w-full lg:h-59 md:h-57 h-30 border border-gray-300 object-cover" />
              <h1 className="md:text-3xl">Traveling</h1>
            </div>
            <div className="lg:h-80 lg:w-70 h-80 w-70 lg:flex flex-col hidden gap-3 p-4 bg-white border border-gray-300 shadow-xl -ml-6 rotate-4 translate-y-6 hover:rotate-0 hover:scale-105 transition">
              <Image src={"/image/hero-5.png"} alt="image-1" width={400} height={400} className="w-full lg:h-59 h-57 object- border border-gray-300cover" />
              <h1 className="md:text-3xl">Bookies</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
