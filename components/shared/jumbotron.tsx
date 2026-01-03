import Link from "next/link";
import React from "react";

interface JumbotronProps {
  title: string;
  subTitle: string;
  description?: string;
  primary?: string;
}

const Jumbotron = ({ title, subTitle, description, primary }: JumbotronProps) => {
  return (
    <div className="space-y-4 flex flex-col items-center w-full text-center">
      <Link href={"#contact"}>
        <div className="border flex gap-2 text-gray-800 shadow font-medium items-center w-full h-full rounded-full py-2 md:px-4 px-2 text-sm md:text-base">
          <span>{title}</span>
        </div>
      </Link>
      <h1 className="md:w-xl w-sm text-4xl font-medium leading-snug tracking-tighter text-text-primary md:text-6xl md:leading-18 ">
        {subTitle} <span className="font-serif italic tracking-wide" >{primary}</span>
      </h1>
      <p className="w-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Jumbotron;
