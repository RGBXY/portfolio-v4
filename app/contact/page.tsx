"use client";

import FormContact from "@/components/contact/form-contact";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const sosmed_data = [
    {
      id: 1,
      link: "mailto:derrenamadeo@gmail.com",
      image: "/logo/gmail.png",
    },
    {
      id: 2,
      link: "",
      image: "/logo/linkedin.png",
    },
    {
      id: 3,
      link: "",
      image: "/logo/instagram.png",
    },
    {
      id: 4,
      link: "",
      image: "/logo/x.png",
    },
    {
      id: 5,
      link: "",
      image: "/logo/github.png",
    },
    {
      id: 6,
      link: "",
      image: "/logo/dribbble.png",
    },
  ];

  return (
    <main className="h-full w-full flex justify-center pb-20">
      <section className="max-w-6xl w-full h-full pt-20">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-9 px-4">
          <div className="text-center">
            <h1 className="text-7xl font-serif mb-3">Get in Touch!</h1>
            <p className="w-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eaque.</p>
          </div>

          <div className="flex flex-wrap md:flex-row flex-col gap-2 w-full h-full bg-gray-100 p-2 rounded-lg">
            <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-2">
              {sosmed_data.map((data) => (
                <Link key={data.id} target="__blank" href={data.link} className="group z-10">
                  <div className="bg-white py-10 h-full w-full rounded-lg hover:shadow-inner transition-shadow duration-300 hover:shadow-gray-400 grow shadow flex items-center justify-center">
                    <div className="space-y-4">
                      <Image className="w-17 h-17 group-hover:scale-95 transition group-hover:opacity-80" src={data.image} alt="gmail" width={400} height={400} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <FormContact />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
