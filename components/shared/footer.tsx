import { EnvelopeIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 relative">
      <div className="absolute top-0 left-0 h-full w-full bg-[repeating-linear-gradient(45deg,#36415320_0px,#36415320_1px,transparent_1px,transparent_8px)]"></div>
      <div className="max-w-7xl w-full mx-auto grid lg:pb-0 pb-20 wrap-anywhere lg:grid-cols-3 z-10 lg:justify-between justify-center lg:text-start text-center bg-white border-x border-gray-300 relative">
        <div className="space-y-3 p-10">
          <h1 className="text-2xl font-semibold">Derren Amadeo</h1>
          <p className="text-gray-600 max-w-70">{"I'm Derren - a front-end developer. Thanks for checking out my site!"}</p>
          <p className="mt-4 max-w-70">©2025 Derren Amadeo</p>
        </div>
        <div className="space-y-3 p-10 flex justify-center gap-20">
          <div className="space-y-1 transition">
            <h1 className="text-lg font-semibold mb-2">Website</h1>
            <Link href={"/"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Home</p>
            </Link>
            <Link href={"/about"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">About</p>
            </Link>
            <Link href={"/work"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Work</p>
            </Link>
            <Link href={"/contact"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Contact</p>
            </Link>
          </div>
          <div className="space-y-1">
            <h1 className="text-lg font-semibold mb-2">Extra</h1>
            <Link target="__blank" href={"https://medium.com/@derrenamadeo"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Medium</p>
            </Link>
            <Link target="__blank" href={"https://dribbble.com/Derren_Amadeo"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Dribbble</p>
            </Link>
            <Link target="__blank" href={"https://id.pinterest.com/derrenah25/"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">Pinterest</p>
            </Link>
            <Link target="__blank" href={"https://app.zeke.so/user/derren"}>
              <p className="text-gray-600 max-w-70 hover:text-gray-400">CV</p>
            </Link>
          </div>
        </div>
        <div className="space-y-3 p-10">
          <h1 className="text-lg font-semibold mb-2">Stay Connected</h1>
          <p className="text-gray-600 max-w-70">{"Don't forget to leave a message for me, just say hi 👋."}</p>
          <div className="flex lg:justify-start justify-center gap-3 mt-5">
            <Link target="__blank" href={"mailto:derrenamadeo@gmail.com"} className=" z-10">
              <Button className="" size={"icon"}>
                <EnvelopeIcon />
              </Button>
            </Link>
            <Link target="__blank" href={"https://github.com/RGBXY"}>
              <Button className="" size={"icon"}>
                <GithubLogoIcon />
              </Button>
            </Link>
            <Link target="__blank" href={"https://www.linkedin.com/in/derren-amadeo-hermawan-017306284/"} className="z-5">
              <Button className="" size={"icon"}>
                <LinkedinLogoIcon />
              </Button>
            </Link>
            <Link target="__blank" href={"https://www.instagram.com/derrenmadeo/"}>
              <Button className="" size={"icon"}>
                <InstagramLogoIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
