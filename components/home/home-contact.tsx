import Image from "next/image";
import Link from "next/link";

const HomeContact = () => {
  return (
    <section className="w-full h-full pb-20 pt- space-y-12 overflow-hidden">
      <div className="border flex flex-col items-center justify-center md:h-100 h-80 text-center md:space-y-6 space-y-3 rounded-xl relative overflow-hidden px-2">
        <h1 className="md:text-5xl text-3xl font-semibold">{"Don't hesitate to connect"}</h1>
        <p className="mb-10 text-gray-700 md:max-w-xl max-w-xs text-sm md:text-base">Whether you have an idea, a project, or simply want to say hello, let’s connect and build something meaningful together.</p>

        <div className="flex absolute md:-bottom-15 -bottom-10">
          <Link target="__blank" href={"https://www.instagram.com/derrenmadeo/"}>
            <div className="md:w-35 md:h-35 w-25 h-25 hover:-translate-y-1 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
              <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
                <Image className="md:w-25 md:h-25 w-15 h-15" src={"/logo/instagram.png"} alt="instagram" width={400} height={400} />
              </div>
            </div>
          </Link>
          <Link target="__blank" href={"https://x.com/DerrenAmad45080"}>
            <div className="md:w-35 md:h-35 w-25 h-25 hover:-translate-y-3 -translate-y-2 z-5 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
              <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
                <Image className="md:w-25 md:h-25 w-15 h-15" src={"/logo/x.png"} alt="x" width={400} height={400} />
              </div>
            </div>
          </Link>
          <Link target="__blank" href={"mailto:derrenamadeo@gmail.com"} className=" z-10">
            <div className="md:w-35 md:h-35 w-25 h-25 hover:-translate-y-5 -translate-y-4 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
              <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
                <Image className="md:w-25 md:h-25 w-15 h-15" src={"/logo/gmail.png"} alt="gmail" width={400} height={400} />
              </div>
            </div>
          </Link>
          <Link target="__blank" href={"https://www.linkedin.com/in/derren-amadeo-hermawan-017306284/"} className="z-5">
            <div className="md:w-35 md:h-35 w-25 h-25 hover:-translate-y-3 -z-5 -translate-y-2 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
              <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
                <Image className="md:w-25 md:h-25 w-15 h-15" src={"/logo/linkedin.png"} alt="linkedin" width={400} height={400} />
              </div>
            </div>
          </Link>
          <Link target="__blank" href={"https://github.com/RGBXY"}>
            <div className="md:w-35 md:h-35 w-25 h-25 hover:-translate-y-1 -ml-5  duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
              <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
                <Image className="md:w-25 md:h-25 w-15 h-15" src={"/logo/github.png"} alt="github" width={400} height={400} />
              </div>
            </div>
          </Link>
        </div>

        <div className="absolute h-full -z-1 inset-0 w-full bg-[linear-gradient(to_right,#73737330_1px,transparent_1px),linear-gradient(to_bottom,#73737330_1px,transparent_1px)] bg-size-[50px_50px] "></div>
        <div className="absolute -z-1 inset-0 h-200 md:w-200 w-full rounded-full border border-gray-300 shadow bg-linear-to-b from-white/80 to-gray-100 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "></div>
      </div>
    </section>
  );
};

export default HomeContact;
