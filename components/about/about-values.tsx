import React from "react";
import SectionHeader from "../shared/section-header";
import { AlbumAboutCard, BookAboutCard, GameAboutCard, MovieAboutCard } from "./about-card";

const AboutHobbies = () => {
  return (
    <section className="w-full h-full">
      <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center gap-16 mx-auto">
        <SectionHeader title="More" subTitle="What I love" strong="to-do" description="Working on real projects taught me how to think, adapt, and grow." />
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 grid-rows-4 md:grid-rows-2 lg:grid-rows-12 gap-3">
          <div className="lg:col-span-5 lg:row-span-5 group">
            <BookAboutCard />
          </div>
          <div className="lg:col-span-7 lg:row-span-8">
            <AlbumAboutCard />
          </div>
          <div className="lg:col-span-5 lg:row-span-7">
            <MovieAboutCard />
          </div>
          <div className="lg:col-span-7 lg:row-span-4">
            <GameAboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHobbies;
