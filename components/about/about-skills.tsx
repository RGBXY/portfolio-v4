import React from "react";
import { BlueprintIcon, Browser, Database, PenNibIcon } from "@phosphor-icons/react/dist/ssr";

const AboutSkills = () => {
  const skills_data = [
    {
      id: 1,
      name: "Front-End Dev",
      description: "Building responsive, accessible, and interactive web interfaces.",
      icon: Browser,
    },
    {
      id: 2,
      name: "Back-End Dev",
      description: "Developing reliable APIs and server-side logic for web applications.",
      icon: Database,
    },
    {
      id: 3,
      name: "UI/UX Designer",
      description: "Designing intuitive interfaces and user flows with a human-centered approach.",
      icon: PenNibIcon,
    },
    {
      id: 4,
      name: "Product Enginer",
      description: "Bridging design, engineering, and product thinking to build usable solutions.",
      icon: BlueprintIcon,
    },
  ];

  return (
    <section className="w-full h-full">
      <div className="max-w-6xl w-full h-full flex flex-wrap justify-center gap-10 mx-auto">
        <div className="lg:block md:flex flex-col justify-center items-center space-y-4 flex-1">
          <div className="border px-3 py-1 rounded-md shadow-inner w-fit">Skills Sets</div>
          <h1 className="md:text-5xl text-4xl font-semibold max-w-sm">
            Skills set to <span className="font-serif italic text-gray-900 underline">help</span>.
          </h1>
          <p className="w-xs text-gray-600 md:text-center lg:text-start">Skills I rely on to turn ideas into real, usable digital products.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:w-fit w-full">
          {skills_data.map((data) => (
            <div key={data.id} className="md:w-80 md:min-h-48 w-full group border duration-300 border-gray-300 p-4 flex flex-col gap-5 shadow overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
              <div className="h-14 w-14 border border-gray-300 rounded-lg flex items-center justify-center shadow-inner shadow-gray-300">
                <data.icon size={24} />
              </div>
              <div className="space-y-1">
                <h1 className="text-lg font-semibold">{data.name}</h1>
                <p className="text-gray-600">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
