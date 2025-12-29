import Image from "next/image";

const ContactSSection = () => {
  return (
    <section className="w-full h-full pb-20 pt-10 space-y-12 overflow-hidden">
      <div className="border flex flex-col items-center justify-center h-100 text-center space-y-5 rounded-xl relative overflow-hidden">
        <h1 className="text-5xl font-semibold">Don't hesitate to connect</h1>
        <p className="mb-10">
          Whether you have an idea, a project, or simply want to say hello, <br /> let’s connect and build something meaningful together.
        </p>

        <div className="flex absolute -bottom-15">
          <div className="w-35 h-35 hover:-translate-y-1 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
            <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
              <Image className="w-25 h-25" src={"/logo/instagram.png"} alt="instagram" width={400} height={400} />
            </div>
          </div>
          <div className="w-35 h-35 hover:-translate-y-3 -translate-y-2 z-5 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
            <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
              <Image className="w-25 h-25" src={"/logo/x.png"} alt="instagram" width={400} height={400} />
            </div>
          </div>
          <div className="w-35 h-35 hover:-translate-y-5 -translate-y-4 z-10 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
            <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
              <Image className="w-25 h-25" src={"/logo/gmail.png"} alt="instagram" width={400} height={400} />
            </div>
          </div>
          <div className="w-35 h-35 hover:-translate-y-3 z-5 -translate-y-2 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
            <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
              <Image className="w-25 h-25" src={"/logo/linkedin.png"} alt="instagram" width={400} height={400} />
            </div>
          </div>
          <div className="w-35 h-35 hover:-translate-y-1 -ml-5 duration-300 transition border rounded-2xl bg-linear-to-br/srgb from-white via-gray-100 to-white shadow shrink-0 p-3">
            <div className="h-full w-full border border-gray-300 rounded-xl shadow-inner flex justify-center items-center">
              <Image className="w-25 h-25" src={"/logo/github.png"} alt="instagram" width={400} height={400} />
            </div>
          </div>
        </div>

        <div className="absolute h-full -z-1 inset-0 w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:50px_50px] "></div>
        <div className="absolute -z-1 inset-0 h-200 w-200 rounded-full border border-gray-300 shadow bg-linear-to-b from-white/80 to-gray-100 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "></div>
      </div>
    </section>
  );
};

export default ContactSSection;
