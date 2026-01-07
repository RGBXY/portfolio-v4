"use client";

import { FileTextIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const path = usePathname();

  const dataLink = [
    {
      name: "Home",
      link: "/",
      icon: "🏚️",
    },
    {
      name: "About",
      link: "/about",
      icon: "👨‍💻",
    },
    {
      name: "Work",
      link: "/work",
      icon: "🎨",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: "☎️",
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full max-w-7xl px-7 pt-2 lg:pt-0 lg:px-12 h-20 mx-auto">
      <h1 className="font-bold text-black text-shadow-sm text-3xl">Drrn.</h1>

      <div className={cn("fixed flex flex-row items-center w-fit h-fit lg:gap-10 gap-5 font-medium bottom-5 lg:top-3 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-2xl py-3 px-5 rounded-full")}>
        {dataLink.map((data) => (
          <Link key={data.name} href={data.link} className={cn(path === data.link ? "bg-gray-100 border border-gray-400" : "hover:bg-gray-100 hover:border border-gray-400 transition", "text-black px-4 py-1.5 rounded-full flex gap-1 transition")}>
            <span className={cn(path === data.link ? "block" : "hidden", "lg:block")}>{data.name}</span>
            <span className="lg:hidden">{data.icon}</span>
          </Link>
        ))}
      </div>

      <div className="flex justify-end">
        <Link target="__blank" href={"https://github.com/RGBXY"}>
          <Button variant={"ghost"} size={"icon-lg"}>
            <GithubLogoIcon size={25} />
          </Button>
        </Link>
        <Link target="__blank" href={"https://www.linkedin.com/in/derren-amadeo-hermawan-017306284/"}>
          <Button variant={"ghost"} size={"icon-lg"}>
            <LinkedinLogoIcon size={25} />
          </Button>
        </Link>
        <Link target="__blank" href={"https://app.zeke.so/user/derren"}>
          <Button variant={"ghost"} size={"icon-lg"}>
            <FileTextIcon size={25} />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
