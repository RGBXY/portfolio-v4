import React from "react";
import Jumbotron from "../shared/jumbotron";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const HeroWork = () => {
  return (
    <section className="w-full h-full pt-20">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-9">
        <Jumbotron title="⚡ Works" subTitle="A Selection of Work I’ve Built" primary="Over Time" description="Projects I’ve designed and built to solve real problems and support real users." />
        <Link href={"https://github.com/RGBXY"}>
          <Button size={"lg"} className="text-base font-normal rounded-full px-4 group">
            <span className="ms-2">See all my project</span>
            <div className="bg-linear-to-tr from-primary to-gray-700 rounded-full h-10 w-10 translate-x-2 flex items-center justify-center group-hover:from-primary/20">
              <ArrowRight />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroWork;
