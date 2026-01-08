import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import SectionHeader from "../shared/section-header";
import { WorkCard, WorkCardDummy } from "../work/work-card";

const WorkSection = () => {
  const work_data = [
    {
      id: 1,
      name: "Cashira",
      image: "/project/project-mu-1.png",
      description: "lorem10",
      tech: [{ name: "Laravel" }, { name: "VueJS" }, { name: "InertiaJS" }],
    },
    {
      id: 2,
      name: "Jiyukai",
      image: "/project/project-mu-4.png",
      description: "lorem10",
      tech: [{ name: "NextJS" }, { name: "TailwindCSS" }],
      github: "https://github.com/RGBXY/jiyukai",
    },
    {
      id: 3,
      name: "Portfolio V1",
      image: "/project/project-mu-3.png",
      description: "lorem10",
      tech: [{ name: "NextJS" }, { name: "TailwindCSS" }],
      link: "https://derren-amadeo.vercel.app/",
      github: "https://github.com/RGBXY/Portofolio-nextjs",
    },
  ];

  return (
    <section className="w-full h-full space-y-12">
      <div className="flex items-center justify-center flex-col gap-8">
        <SectionHeader title="Works" subTitle="A collection of my" strong="favorite works" description="Principles that guide my creative process and client relationships." />

        <div className="md:h-160 h-fit w-full overflow-hidden pt-2">
          <div className="flex flex-wrap justify-center gap-5 h-full w-full relative">
            {work_data.map((data) => (
              <WorkCard data={data} key={data.id} />
            ))}

            <WorkCardDummy />
            <WorkCardDummy />
            <WorkCardDummy />

            <div className=" hidden md:block absolute bottom-0 h-30 w-full bg-linear-to-b/srgb from-transparent to-background"></div>
          </div>
        </div>

        <div className="flex items-center justify-center md:-mt-10 mt-2 relative">
          <Link href={"/work"}>
            <Button size={"lg"} className="text-base font-normal rounded-full px-4 group">
              <span className="ms-2">More Project</span>
              <div className="bg-linear-to-tr from-primary to-gray-700 rounded-full h-10 w-10 translate-x-2 flex items-center justify-center group-hover:from-primary/20">
                <ArrowRightIcon />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
