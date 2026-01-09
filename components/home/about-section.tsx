import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import SectionHeader from "../shared/section-header";

const AboutSection = () => {
  return (
    <section className="w-full h-full relative">
      <div className="flex items-center justify-center flex-col gap-8">
        <SectionHeader title="About" subTitle="Here's a little things about" strong="me" />

        <div className="max-w-xl mx-auto text-center text-gray-600 font-medium leading-6 space-y-4 md:text-lg mb-1">
          <p className="">Derren Amadeo — a web developer with over 2 years of experience building thoughtful, user-focused websites. I believe good websites are not built just to work, but built to connect with people and ideas.</p>
          <p className="">
            I enjoy turning ideas into clean, functional interfaces, while paying attention to details that make digital experiences feel natural, intuitive, and human. Beyond the screen, I love traveling and exploring new places.
          </p>
        </div>

        <Link href={"/about"}>
          <Button size={"lg"} className="text-base font-normal rounded-full px-4 group">
            <span className="ms-2">Get to Know Me</span>
            <div className="bg-linear-to-tr from-primary to-gray-700 rounded-full h-10 w-10 translate-x-2 flex items-center justify-center group-hover:from-primary/20">
              <ArrowRightIcon />
            </div>
          </Button>
        </Link>

        <div className="hidden lg:block">
          <div className="h-70 w-60 rotate-5 hover:rotate-7 hover:scale-104 transition border border-gray-300 shadow-lg bg-background p-4 absolute -top-10 left-10">
            <Image src={"/image/about-1.jpg"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 -rotate-5 hover:-rotate-7 hover:scale-104 transition border border-gray-300 shadow-lg bg-background p-4 absolute -top-10 right-10">
            <Image src={"/image/hero-1.jpg"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 -rotate-5 hover:-rotate-7 hover:scale-104 transition border border-gray-300 shadow-lg bg-background p-4 absolute top-60 left-5">
            <Image src={"/image/hero-3.jpg"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 rotate-5 hover:rotate-7 hover:scale-104 transition border border-gray-300 shadow-lg bg-background p-4 absolute top-60 right-5">
            <Image src={"/image/about-explore.jpg"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
