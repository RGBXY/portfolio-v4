import React from "react";

interface SectionHeaderProps {
  title: string;
  subTitle: string;
  description?: string;
  strong?: string;
}

const SectionHeader = ({ title, subTitle, description, strong }: SectionHeaderProps) => {
  return (
    <header>
      <div className="text-center space-y-4">
        <h1 className="border px-3 py-1 rounded-md shadow-inner w-fit mx-auto">{title}</h1>
        <h1 className="md:text-5xl text-4xl font-semibold max-w-sm mx-auto">
          {subTitle} <span className="font-serif italic text-gray-900 underline">{strong}</span>.
        </h1>
        <p className="max-w-xs mx-auto text-gray-600">{description}</p>
      </div>
    </header>
  );
};

export default SectionHeader;
