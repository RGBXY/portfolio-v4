import Image from "next/image";
import React from "react";

const ToolsAboutCard = () => {
  const album_data = [
    {
      id: 1,
      name: "Doolittle",
      img: "/image/album-3.png",
    },
    {
      id: 2,
      name: "The Dark Side of The Moon",
      img: "/image/album.png",
    },
    {
      id: 3,
      name: "Wish You Were Here",
      img: "/image/album-2.png",
    },
    {
      id: 4,
      name: "",
      img: "/image/album-3.png",
    },
    {
      id: 5,
      name: "",
      img: "/image/album-3.png",
    },
  ];

  return (
    <div className="overflow-hidden relative h-full flex gap-5 flex-col justify-between bg-gray-100 rounded-lg hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white  to-gray-100 border border-gray-300 py-6">
      <div className="absolute left-0 top-0 h-full z-40 w-20 bg-linear-to-r from-white/70 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full z-40 w-20 bg-linear-to-l from-gray-100/70 to-transparent"></div>

      <div className="flex mt-12 items-center animate-marquee w-max will-change-transform hover:paused">
        <div className="flex shrink-0 gap-8 pe-8">
          {album_data.map((data) => (
            <div key={data.id} className="h-35 w-35 relative shadow group shrink-0 border border-gray-300 flex justify-center items-center">
              <Image className="w-full h-full" src={data.img} alt={data.name} width={800} height={800} />
              <div className="absolute group-hover:-translate-y-12 top-0 rounded-full -z-1 h-[92%] w-[92%] duration-300 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center transition">
                <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full animate-spin relative" />
                <Image src={data.img} alt="hai" width={400} height={400} className="h-14 w-14 z-10  absolute rounded-full animate-spin" />
              </div>
            </div>
          ))}
        </div>

        <div aria-hidden className="flex shrink-0 gap-8 pe-8">
          {album_data.map((data) => (
            <div key={data.id} className="h-35 w-35 relative group shadow shrink-0 border border-gray-300 flex justify-center items-center">
              <Image className="w-full h-full" src={data.img} alt={data.name} width={800} height={800} />
              <div className="absolute group-hover:-translate-y-12 top-0 rounded-full -z-1 h-[92%] w-[92%] duration-300 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center transition">
                <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full animate-spin relative" />
                <Image src={data.img} alt="hai" width={400} height={400} className="h-16 w-16 z-10  absolute rounded-full animate-spin" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-3 mt-2">
        <h1 className="text-xl font-semibold mb-1.5">Listening</h1>
        <p className="text-gray-600">Music is art you cant see but you can feel</p>
      </div>
    </div>
  );
};

export default ToolsAboutCard;
