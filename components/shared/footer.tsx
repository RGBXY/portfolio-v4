import { EnvelopeIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full h-fit mt-14 border-t border-gray-300 relative">
      <div className="absolute top-0 left-0 h-full w-full bg-[repeating-linear-gradient(45deg,#36415320_0px,#36415320_1px,transparent_1px,transparent_8px)]"></div>
      <div className="w-6xl mx-auto grid grid-cols-3 z-10 justify-between bg-white border-x border-gray-300 relative">
        <div className="space-y-3 p-10">
          <h1 className="text-2xl font-semibold">Derren Amadeo</h1>
          <p className="text-gray-700 max-w-70 text-lg">I'm Derren - a front-end developer. Thanks for checking out my site!</p>
          <p className="mt-4 max-w-70 text-lg">©2025 Derren Amadeo</p>
        </div>
        <div className="space-y-3 p-10 flex justify-center gap-20">
          <div>
            <h1 className="text-lg font-semibold mb-2">Website</h1>
            <p className="text-gray-700 max-w-70 text-lg">Home</p>
            <p className="text-gray-700 max-w-70 text-lg">About</p>
            <p className="text-gray-700 max-w-70 text-lg">Work</p>
            <p className="text-gray-700 max-w-70 text-lg">Tools</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mb-2">Extra</h1>
            <p className="text-gray-700 max-w-70 text-lg">CV</p>
            <p className="text-gray-700 max-w-70 text-lg">Medium</p>
            <p className="text-gray-700 max-w-70 text-lg">Dribbble</p>
            <p className="text-gray-700 max-w-70 text-lg">Pinterest</p>
          </div>
        </div>
        <div className="space-y-3 p-10">
          <h1 className="text-lg font-semibold mb-2">Stay Connected</h1>
          <p className="text-gray-700 max-w-70 text-lg">Don't forget to leave a message for me.</p>
          <div className="flex gap-3 mt-5">
            <Button className="" size={"icon"}>
              <EnvelopeIcon />
            </Button>
            <Button className="" size={"icon"}>
              <GithubLogoIcon />
            </Button>
            <Button className="" size={"icon"}>
              <LinkedinLogoIcon />
            </Button>
            <Button className="" size={"icon"}>
              <InstagramLogoIcon />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
