import Image from "next/image";
import ProfileAboutCard from "./profile-about-card";
import ToolsAboutCard from "./tools-about-card";

const AboutSection = () => {
  return (
    <section className="w-full h-full space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-lg text-purple-700">About</h1>
        <h1 className="text-4xl font-semibold max-w-md mx-auto">{"Here's what sets me apart and makes me unique"}</h1>
      </div>
    
      <div className="grid grid-cols-12 grid-rows-12 gap-3">
        <div className="col-span-5 row-span-5 group">
          <ProfileAboutCard />
        </div>
        <div className="col-span-7 row-span-8">
          <ToolsAboutCard />
        </div>
        <div className="col-span-5 row-span-7">
          <div className="h-full overflow-hidden relative group bg-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
            <div className="text-center mb-8">
              <h1 className="text-xl font-semibold">My Code Files</h1>
              <p className="text-gray-700 text-lg">Check my code files on github</p>
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
      </div>
    </section>
  );
};

export default AboutSection;
