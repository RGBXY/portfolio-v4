import React from "react";
import SectionHeader from "../shared/section-header";
import ProfileAboutCard from "../home/profile-about-card";
import ToolsAboutCard from "../home/tools-about-card";
import Image from "next/image";

const IloveAbout = () => {
  return (
    <section className="w-full h-full">
      <div className="w-6xl h-full flex flex-col items-center justify-center gap-16 mx-auto">
        <SectionHeader title="More" subTitle="What I love" strong="to-do" description="Working on real projects taught me how to think, adapt, and grow." />

        <div className="grid grid-cols-12 grid-rows-12 gap-3">
          <div className="col-span-5 row-span-5 group">
            <ProfileAboutCard />
          </div>
          <div className="col-span-7 row-span-8">
            <ToolsAboutCard />
          </div>
          <div className="col-span-5 row-span-7">
            <div className="h-full overflow-hidden relative group bg-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
              <div className="text-center mb-8">
                <h1 className="text-xl font-semibold mb-1">Read and Watch</h1>
                <p className="text-gray-700">The Alchemist and The Dark Side of The Moon</p>
              </div>

              <div className="absolute -bottom-5 left-15 h-50 w-45 border-gray-300 -rotate-8 group-hover:-rotate-4 transition">
                <Image src={"/image/book-cover.png"} alt="hai" width={400} height={400} className="h-full w-full mix-blend-plus-lighter object-top object-cover" />
              </div>
              <div className="absolute -bottom-22 right-15 h-50 w-50 rotate-8 group-hover:rotate-4 transition ">
                <div className="relative h-full w-full">
                  <div className="w-full h-full z-10 relative bg-[url('/image/album-effect.png')]">
                    <Image src={"/image/album.png"} alt="hai" width={400} height={400} className="h-full w-full mix-blend-plus-lighter" />
                  </div>
                  <div className="absolute -top-18 rounded-full h-45 w-45 -z-10 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full animate-spin relative" />
                    <Image src={"/image/album.png"} alt="hai" width={400} height={400} className="h-16 w-16 z-10 absolute rounded-full animate-spin" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-7 row-span-4">
            <div className="h-full bg-gray-100 group flex items-center overflow-hidden justify-between gap-10 px-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
              <div className="space-y-3">
                <h1 className="text-xl font-semibold">Let's Talk!</h1>
                <p className="text-lg text-gray-700">
                  Send me a message and <br /> we will talk about anything.
                </p>
              </div>
              <div className="relative flex-1 h-full ">
                <Image src={"/image/mail.png"} alt="mail" width={800} height={800} className="absolute top-5 -right-8 group-hover:scale-105 transition border border-gray-300 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IloveAbout;
