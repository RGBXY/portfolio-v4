import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="w-full h-full relative">
      <div className="flex items-center justify-center flex-col gap-8">
        <div className="text-center space-y-4">
          <h1 className="ext-purple-700 border px-3 py-1 rounded-md shadow-inner w-fit mx-auto">About</h1>
          <h1 className="md:text-5xl text-4xl font-semibold max-w-sm mx-auto">
            {"Here's a little things about"} <span className="font-serif italic text-gray-900 underline">me</span>.
          </h1>
        </div>

        <div className="max-w-xl mx-auto text-center text-gray-600 font-medium leading-6 space-y-4 md:text-lg">
          <p className="">Derren Amadeo — a Front-End Developer with 1 years of experience shaping products and high-impact systems through UX research, psychology, and product strategy to balance user needs and business goals.</p>
          <p className="">I design for humans, but I’m shaped by the world beyond screens.</p>
          <p className="">My journey into design began with a simple curiosity — how people think, feel, and interact with technology. Over time, that curiosity evolved..</p>
        </div>

        <Link href={"/about"}>
          <Button size={"lg"} className="text-base font-normal rounded-full px-4 group">
            <span className="ms-2">Get to Know Me</span>
            <div className="bg-linear-to-tr from-primary to-gray-700 rounded-full h-10 w-10 translate-x-2 flex items-center justify-center group-hover:from-primary/20">
              <ArrowRightIcon />
            </div>
          </Button>
        </Link>

        <div className="hidden lg:block" >
          <div className="h-70 w-60 rotate-5 border border-gray-400 bg-background p-4 absolute -top-10 left-10">
            <Image src={"/image/about-1.png"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 -rotate-5 border border-gray-400 bg-background p-4 absolute -top-10 right-10">
            <Image src={"/image/about-1.png"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 -rotate-5 border border-gray-400 bg-background p-4 absolute top-60 left-5">
            <Image src={"/image/about-1.png"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
          <div className="h-70 w-60 rotate-5 border border-gray-400 bg-background p-4 absolute top-60 right-5">
            <Image src={"/image/about-1.png"} alt="image" width={400} height={400} className="h-52 w-full object-cover" />
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-12 grid-rows-12 gap-3">
        <div className="col-span-5 row-span-5 group">
          <ProfileAboutCard />
        </div>
        <div className="col-span-7 row-span-8">
          <ToolsAboutCard />
        </div>
        <div className="col-span-5 row-span-7">
          <div className="h-full overflow-hidden relative group bg-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
            <div className="text-center mb-8">
              <h1 className="text-xl font-semibold">My code files</h1>
              <p className="text-gray-700 text-lg">Check my code files on github</p>
            </div>

            <div className="absolute -bottom-4 left-15 h-50 w-45 border-gray-300 -rotate-8 group-hover:-rotate-4 transition">
              <Image src={"/image/book-cover.png"} alt="hai" width={400} height={400} className="h-full w-full mix-blend-plus-lighter object-top object-cover" />
            </div>
            <div className="absolute -bottom-22 right-15 h-50 w-50 rotate-8 group-hover:rotate-4 transition ">
              <div className="relative h-full w-full">
                <div className="w-full h-full z-10 relative bg-[url('/image/album-effect.png')]">
                  <Image src={"/image/album.png"} alt="hai" width={400} height={400} className="h-full w-full mix-blend-plus-lighter" />
                </div>
                <div className="absolute -top-18 rounded-full h-45 w-45 -z-10 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full animate-spin relative" />
                  <Image src={"/image/album.png"} alt="hai" width={400} height={400} className="h-16 w-16 z-10 absolute rounded-full animate-spin" />
                </div>
              </div>
            </div>

            <div className="relative bg-amber-600">
              <Image src={"/image/folder.png"} alt="file" width={800} height={800} className="absolute top-0 w-full group-hover:scale-95 group-hover:-translate-y-2 transition " />
              <Image src={"/logo/github.png"} alt="file" width={800} height={800} className="absolute rotate-8 top-18 left-38 w-30 h-30 group-hover:scale-95 group-hover:rotate-10 transition" />
            </div>
          </div>
        </div>

        <div className="col-span-7 row-span-4">
          <div className="h-full bg-gray-100 group flex items-center overflow-hidden justify-between gap-10 px-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
            <div className="space-y-3">
              <h1 className="text-xl font-semibold">Let's Talk!</h1>
              <p className="text-lg text-gray-700">
                Send me a message and <br /> we will talk about anything.
              </p>
            </div>
            <div className="relative flex-1 h-full ">
              <Image src={"/image/mail.png"} alt="mail" width={800} height={800} className="absolute top-5 -right-8 group-hover:scale-105 transition border border-gray-300 rounded-xl" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;
