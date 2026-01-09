import React from "react";
import SectionHeader from "../shared/section-header";
import Image from "next/image";

const AboutExperience = () => {
  const experience_data = [
    {
      id: 1,
      company: "CAN Creative",
      logo: "/logo/can-logo.png",
      location: "Indonesia (On-site)",
      duration: "May 2024 - Dec 2024",
      status: "Internship",
      role: "Front-End Developer",
      opening: "Interned as a Front-End Developer, contributing to user-focused interfaces and improving overall UI quality.",
      closing: "Revamped Police Digital Platforms & Web Products – Delivered end-to-end web solutions across internal systems and public-facing applications.",
      projects: [
        {
          id: 1,
          name: "Admin Feed Libas",
          description: "– Web Dashboard – Monitoring platform for the Libas police application, enabling real-time feed supervision and operational visibility.",
        },
        {
          id: 2,
          name: "SKM",
          description: "– Web Application – Public satisfaction survey platform to evaluate police services, simplifying data collection and reporting workflows.",
        },
        {
          id: 3,
          name: "Polisi Hebat",
          description: "– Landing Page – Informational landing page highlighting police digital applications, improving public awareness and accessibility.",
        },
        {
          id: 4,
          name: "CAN Store",
          description: "– Web Platform – App marketplace-style website showcasing digital products developed by CAN Creative, improving discovery and presentation.",
        },
        {
          id: 5,
          name: "Admin Dashboard Features",
          description: "– Web Application – Designed and built internal dashboard features for police applications, enhancing system management and internal workflows.",
        },
      ],
    },
  ];

  return (
    <section className="w-full h-full">
      <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center gap-16 mx-auto">
        <SectionHeader title="Experience" subTitle="I’ve learned the process" strong="firsthand" description="Working on real projects taught me how to think, adapt, and grow." />

        <div className="space-y-5">
          {experience_data.map((data) => (
            <div key={data.id} className="grid lg:grid-cols-5 grid-cols-2 w-full h-fit">
              <div className="col-span-2 border border-gray-300 p-5 h-full">
                <div className="space-y-4 sticky top-30 h-fit">
                  <div className="flex items-center gap-3">
                    <Image src={data.logo} alt="can logo" width={300} height={300} className="h-8 w-8 bg-white border border-gray-300 rounded-lg" />
                    <h1 className="text-2xl font-semibold ">{data.company}</h1>
                  </div>
                  <div className="space-y-0.5 md:text-lg">
                    <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                      <p className="col-span-1">Location</p>
                      <p className="col-span-3">: {data.location}</p>
                    </div>
                    <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                      <p className="col-span-1">Duration</p>
                      <p className="col-span-3">: {data.duration}</p>
                    </div>
                    <div className="text-gray-600 space-y-0.5 grid grid-cols-5">
                      <p className="col-span-1">Status</p>
                      <p className="col-span-3">: {data.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 lg:border-y lg:border-s-0 lg:border-e border-x border-b border-gray-300 p-5 space-y-4">
                <h1 className="text-2xl font-semibold">{data.role}</h1>
                <div className="text-gray-600 space-y-8 md:text-lg">
                  <p>{data.opening}</p>
                  <ul className="ps-5 space-y-3 leading-7">
                    {data.projects.map((project) => (
                      <li key={project.id} className="list-disc">
                        <p>
                          <span className="font-bold">{project.name}</span> {project.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p>{data.closing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
