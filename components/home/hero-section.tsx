import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const project_data = [
    {
      id: 1,
      image: "/project/project-mu-2.jpg",
    },
    {
      id: 2,
      image: "/project/project-mu-1.jpg",
    },
    {
      id: 3,
      image: "/project/project-mu-3.jpg",
    },
  ];

  return (
    <section id="hero" className="w-full h-full pt-24 flex items-center justify-center text-center overflow-x-hidden">
      <div className="space-y-4 flex flex-col items-center w-full ">
        <Link href={"/contact"}>
          <div className="border flex gap-2 text-gray-800 shadow font-medium items-center w-full h-full rounded-full py-2 md:px-4 px-2 text-sm md:text-base">
            <span>{"👋 Let's Get Connect"}</span>
          </div>
        </Link>

        <div className="text-4xl font-medium leading-snug tracking-tighter text-text-primary md:text-6xl md:leading-20 mt-3">
          <div className="flex items-center md:gap-6 gap-4">
            <h1 className="text-black">{"I'm"}</h1>
            <div className="md:w-16 md:h-16 w-14 h-14 rounded-xl shadow-md shadow-gray-600 border rotate-6 hover:-rotate-6 transition overflow-hidden ">
              <Image className="w-full h-full rounded-lg flex items-center justify-center object-cover" src={"/image/profile.webp"} alt="profile" width={300} height={300} />
            </div>
            <h1 className="text-black text-nowrap">
              Derren Amadeo<span className="font-serif">!</span>
            </h1>
          </div>
          <h1 className="text-black">
            <span className="font-serif tracking-wide italic">a Creative</span> Developer
          </h1>
        </div>

        <p className="max-w-md mx-auto w-full text-gray-600">I care about how things feel, not just how they work. I believe good software should feel human.</p>

        <div className="flex items-center my-4">
          <Link href={"/about"}>
            <Button size={"lg"} className="text-base font-normal rounded-full px-4 group">
              <span className="ms-2">Get to Know Me</span>
              <div className="bg-linear-to-tr from-primary to-gray-700 rounded-full h-10 w-10 translate-x-2 flex items-center justify-center group-hover:from-primary/20">
                <ArrowRight />
              </div>
            </Button>
          </Link>
        </div>

        <div className="mt-10 relative h-fit w-full overflow-x-clip">
          <div className="absolute left-0 top-0 bg-linear-to-r from-background to-transparent from-1%  w-20 h-full z-20"></div>
          <div className="absolute right-0 top-0 bg-linear-to-l from-background to-transparent from-1%  w-20 h-full z-20"></div>

          <div className="flex items-center justify-center animate-marquee w-max will-change-transform hover:paused">
            <div className="flex items-center justify-center gap-5 pe-5">
              {project_data.map((data) => (
                <div key={data.id} className="relative shrink-0 lg:h-85 lg:w-105 h-80 w-100 rounded-xl flex flex-col md:gap-3 gap-0.5 p-6 bg-white border border-gray-200 z-5 transition">
                  <div className="w-full h-full border bg-gray-50 px-3 rounded-lg shadow-xl flex items-center">
                    <Image src={data.image} alt="Project" width={400} height={400} className="w-full lg:h-63 h-58 object-cover rounded-lg" />
                    <div className="absolute left-3 top-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute right-3 top-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute left-3 bottom-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute right-3 bottom-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-5 pe-5">
              {project_data.map((data) => (
                <div key={data.id} className="relative shrink-0 lg:h-85 lg:w-105 h-80 w-100 rounded-xl flex flex-col md:gap-3 gap-0.5 p-6 bg-white border border-gray-200 z-5 transition">
                  <div className="w-full h-full border bg-gray-50 px-3 rounded-lg shadow-xl flex items-center">
                    <Image src={data.image} alt="Project" width={400} height={400} className="w-full lg:h-63 h-58 object-cover rounded-lg" />
                    <div className="absolute left-3 top-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute right-3 top-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute left-3 bottom-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                    <div className="absolute right-3 bottom-3 h-2 w-2 bg-linear-to-b from-gray-400 to-gray-100 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
