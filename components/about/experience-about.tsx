import React from "react";
import SectionHeader from "../shared/section-header";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const ExperienceAbout = () => {
  return (
    <section className="w-full h-full">
      <div className="w-6xl h-full flex flex-col items-center justify-center gap-16 mx-auto">
        <SectionHeader title="Experience" subTitle="I’ve learned the process" strong="firsthand" description="Working on real projects taught me how to think, adapt, and grow." />

        <div>
          <div className="grid grid-cols-5 w-full h-fit">
            <div className="col-span-2 border border-gray-300 p-5 h-full">
              <div className="space-y-4 sticky top-20 h-fit">
                <div className="flex items-center gap-3">
                  <Image src={"/logo/can-logo.png"} alt="can logo" width={300} height={300} className="h-8 w-8 bg-white border border-gray-300 rounded-lg" />
                  <h1 className="text-2xl font-semibold ">CAN Creative</h1>
                  <ArrowUpRightIcon className="" size={16} />
                </div>
                <div className="space-y-0.5">
                  <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                    <p className="col-span-1">Location</p>
                    <p className="col-span-3">: Indonesia (On-site)</p>
                  </div>
                  <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                    <p className="col-span-1">Duration</p>
                    <p className="col-span-3">: May 2024 - Dec 2024</p>
                  </div>
                  <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                    <p className="col-span-1">Status</p>
                    <p className="col-span-3">: Internship</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 border-y border-e border-gray-300 p-5 space-y-4">
              <h1 className="text-2xl font-semibold">Front-End Developer</h1>
              <div className="text-gray-600 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio est, quas rerum, unde illum accusamus cum nostrum recusandae, commodi at voluptas. Libero laborum sequi quis ea praesentium at nobis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAbout;
