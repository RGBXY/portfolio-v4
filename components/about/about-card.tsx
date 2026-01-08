import Image from "next/image";
import React from "react";

const BookAboutCard = () => {
  return (
    <div className="relative h-full flex overflow-hidden justify-between hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white to-gray-100 border border-gray-300 rounded-xl p-6">
      <div className="flex flex-col justify-between flex-1">
        <div className="lg:text-start text-center lg:block flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-1.5">Reading</h1>
          <p className="text-gray-600 lg:w-50 max-w-70">Books shape the way I see the world and think differently.</p>
        </div>
        <div className="text-gray-600 text-xs hidden lg:block">
          <p className="">The Alchemist - Paulo Choelo</p>
        </div>
      </div>
      <div className="w-45 h-60 lg:right-5 lg:bottom-auto lg:translate-none -bottom-10 right-1/2 translate-x-1/2   absolute">
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

const AlbumAboutCard = () => {
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
      img: "/image/album-6.png",
    },
    {
      id: 5,
      name: "",
      img: "/image/album-7.png",
    },
  ];

  return (
    <div className="overflow-hidden relative h-full flex gap-5 flex-col justify-between bg-gray-100 rounded-lg hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white  to-gray-100 border border-gray-300 py-6">
      <div className="absolute left-0 top-0 h-full z-40 w-20 bg-linear-to-r from-white/70 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full z-40 w-20 bg-linear-to-l from-gray-100/70 to-transparent"></div>

      <div className="flex mt-12 items-center animate-marquee w-max will-change-transform hover:paused">
        <div className="flex shrink-0 gap-8 pe-8">
          {album_data.map((data) => (
            <div key={data.id} className="h-35 w-35 relative shadow-md shadow-gray-400 group shrink-0 flex justify-center items-center">
              <Image className="w-full h-full" src={data.img} alt={data.name} width={800} height={800} />
              <div className="absolute group-hover:-translate-y-12 top-0 rounded-full -z-1 h-[92%] w-[92%] duration-300 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center transition">
                <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full paused group-hover:play-state-initial animate-spin relative" />
                <Image src={data.img} alt="hai" width={400} height={400} className="h-14 w-14 z-10  absolute rounded-full paused group-hover:play-state-initial animate-spin " />
              </div>
            </div>
          ))}
        </div>

        <div aria-hidden className="flex shrink-0 gap-8 pe-8">
          {album_data.map((data) => (
            <div key={data.id} className="h-35 w-35 relative group shadow-md shadow-gray-400 shrink-0 flex justify-center items-center">
              <Image className="w-full h-full" src={data.img} alt={data.name} width={800} height={800} />
              <div className="absolute group-hover:-translate-y-12 top-0 rounded-full -z-1 h-[92%] w-[92%] duration-300 bg-black left-1/2 -translate-x-1/2 flex items-center justify-center transition">
                <Image src={"/image/vinyl.webp"} alt="hai" width={400} height={400} className="h-full w-full paused group-hover:play-state-initial animate-spin  relative" />
                <Image src={data.img} alt="hai" width={400} height={400} className="h-16 w-16 z-10  absolute rounded-full paused group-hover:play-state-initial animate-spin " />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-3 mt-2">
        <h1 className="text-xl font-semibold mb-1.5">Listening</h1>
        <p className="text-gray-600">Music is an art you can’t see, but deeply feel.</p>
      </div>
    </div>
  );
};

const MovieAboutCard = () => {
  return (
    <div className="h-full overflow-hidden relative group bg-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold mb-1.5">Watching</h1>
        <p className="text-gray-700 lg:w-full mx-auto max-w-70">Enjoying films that inspire ideas and new perspectives.</p>
      </div>
      <div className="absolute lg:-bottom-14 md:-bottom-4 -bottom-4 left-1/2 -translate-x-1/2 w-79 group-hover:scale-111 scale-110 border-gray-300 transition">
        <Image src={"/image/tv.png"} alt="hai" width={400} height={400} className="h-full" />
      </div>
    </div>
  );
};

const GameAboutCard = () => {
  return (
    <div className="h-full bg-gray-100 group relative flex lg:flex-row flex-col-reverse lg:items-center overflow-hidden lg:justify-between gap-8 lg:px-6 p-6 hover:shadow-lg hover:-translate-y-1 transition bg-linear-to-br from-white via-gray-100 to-white border border-gray-300 rounded-xl">
      <div className="space-y-3 text-center lg:text-start">
        <h1 className="text-xl font-semibold">Playing</h1>
        <p className="text-gray-600 w-70 lg:mx-0 mx-auto">Playing games to relax, explore stories, and enjoy creative worlds.</p>
      </div>
      <div className="relative flex-1 lg:flex-none h-30 lg:w-50 w-70 lg:mx-0 mx-auto">
        <Image src={"/image/game.png"} alt="mail" width={800} height={800} className="absolute h-full w- shadow lg:group-hover:scale-105 transition border border-gray-300 rounded-xl" />
      </div>
    </div>
  );
};

export { BookAboutCard, AlbumAboutCard, MovieAboutCard, GameAboutCard };
