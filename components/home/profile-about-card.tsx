import Image from "next/image";

const ProfileAboutCard = () => {
  return (
    <div className="relative h-full flex overflow-hidden justify-between hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white to-gray-100 border border-gray-300 rounded-xl p-6">
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-xl font-semibold mb-1.5">Reading</h1>
          <p className="text-gray-600 w-50">Books really change the way I see the world</p>
        </div>
        <div className="text-gray-600 text-xs" >
          <p className="">The Alchemist - Paulo Choelo</p>
        </div>
      </div>
      <div className="w-45 h-60 right-5 absolute">
        <Image
          className="w-full h-full z-10 -rotate-6 group-hover:-rotate-8 group-hover:scale-105 transition relative shadow-inner border object-cover object-top border-gray-300 rounded-xl overflow-hidden flex items-center justify-center"
          src={"/image/book-cover.png"}
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
