import React from "react";
import { Button } from "../ui/button";
import { GithubLogoIcon, Globe } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface TechWork {
  name: string;
}

interface WorkCardData {
  id: number;
  name: string;
  image: string;
  description: string;
  tech: Array<TechWork>;
  link?: string;
  github?: string;
}

interface WorkCardProps {
  data: WorkCardData;
}

const WorkCard = ({ data }: WorkCardProps) => {
  return (
    <div className="h-fit md:max-w-92 max-w-120 w-full hover:-translate-y-1 hover:shadow-lg transition border border-gray-300 rounded-xl overflow-hidden p-4">
      <div className="aspect-3/2 bg-linear-to-br/srgb from-white via-gray-100 to-white border rounded-xl border-gray-300">
        <Image src={data.image} alt={data.name} width={300} height={300} className="h-full w-full object-cover" />
      </div>
      <div className="pt-4 pb-1 space-y-3">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{data.name}</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, explicabo.</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          {data.tech.map((tech) => (
            <div key={tech.name} className="rounded-sm border font-medium border-gray-300 py-1 px-2 shadow-inner text-sm bg-background text-gray-600">
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center ">
          {data.link ? (
            <Link target="__blank" href={data.link}>
              <Button size={"sm"}>
                <Globe />
                <span>Link</span>
              </Button>
            </Link>
          ) : (
            <Button disabled variant={"secondary"} className="text-gray-600" size={"sm"}>
              <Globe />
              <span>Link</span>
            </Button>
          )}

          {data.github ? (
            <Link target="__blank" href={data.github}>
              <Button size={"sm"}>
                <GithubLogoIcon />
                <span>Source</span>
              </Button>
            </Link>
          ) : (
            <Button disabled variant={"secondary"} className="text-gray-600" size={"sm"}>
              <GithubLogoIcon />
              <span> Source</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkCardDummy = () => {
  return (
    <div className="w-92 h-fit md:block hidden lg:max-w-100 max-h-120 transition border border-gray-300 rounded-xl overflow-hidden p-4">
      <div className="aspect-3/2 bg-linear-to-br/srgb from-white via-gray-100 to-white border rounded-xl border-gray-300"></div>
    </div>
  );
};

export { WorkCard, WorkCardDummy };
