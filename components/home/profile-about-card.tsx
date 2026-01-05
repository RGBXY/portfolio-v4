import Image from "next/image";

const ProfileAboutCard = () => {
  return (
    <div className="relative h-full flex overflow-hidden justify-between hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white to-gray-100 border border-gray-300 rounded-xl p-6">
      <div className="space-y-4 flex-1">
        <h1 className="text-xl font-semibold">More About Me!</h1>
        <p className="text-lg text-gray-700">Front-end developer with 2 <br /> years experience. Tech enthusiast. <br /> Music lover. <br /> Click to know more about me</p>
      </div>
      <div className="w-45 h-55 right-5 absolute">
        <Image
          className="w-full h-full z-10 -rotate-6 group-hover:-rotate-8 group-hover:scale-105 transition relative shadow-inner border object-cover border-gray-300 rounded-xl overflow-hidden flex items-center justify-center"
          src={"/image/profile.webp"}
          alt="profile"
          width={800}
          height={800}
        />
        <div className="h-full w-full border border-gray-300 p-2 rotate-6 group-hover:rotate-10 transition absolute top-0 rounded-xl bg-white">
          <div className="border border-gray-300 w-full h-full rounded-lg shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutCard;
