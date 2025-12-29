"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="flex items-center justify-between w-6xl h-20 mx-auto ">
      <h1 className="font-semibold text-xl">Derren Amadeo</h1>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href={"/"} className={path === "/" ? "text-black" : "text-gray-600"}>
            <span>Home</span>
          </Link>
          <Link href={"/about"} className={path === "/about" ? "text-black" : "text-gray-600"}>
            <span>About</span>
          </Link>
          <Link href={"/work"} className={path === "/work" ? "text-black" : "text-gray-600"}>
            {" "}
            <span>Work</span>
          </Link>
          <Link href={"/tools"} className={path === "/tools" ? "text-black" : "text-gray-600"}>
            {" "}
            <span>Tools</span>
          </Link>
        </div>
      </div>
    </nav>

    // <nav className="flex items-center justify-between w-6xl relative h-25 mx-auto shadow border border-gray-300 px-5 rounded-xl -translate-y-5 pt-5">
    //   <h1 className="font-semibold text-xl">Derren A.</h1>

    //   <div className="flex items-center absolute left-1/2 -translate-x-1/2 border shadow-inner border-gray-300 px-2.5 py-2 rounded-full font-medium">
    //     <Link href={"/"}>
    //       <div className="rounded-full bg-gray-100 px-4 py-1 border text-gray-700 border-gray-300 shadow-inner">
    //         <span>Home</span>
    //       </div>
    //     </Link>
    //     <Link href={"/"}>
    //       <div className="rounded-full px-4 py-1">
    //         <span>About</span>
    //       </div>
    //     </Link>
    //     <Link href={"/"}>
    //       <div className="rounded-full  px-4 py-1">
    //         <span>Work</span>
    //       </div>
    //     </Link>
    //     <Link href={"/"}>
    //       <div className="rounded-full  px-4 py-1">
    //         <span>Tools</span>
    //       </div>
    //     </Link>
    //   </div>

    //   <div className="flex items-center gap-3 border border-gray-300 px-8 py-3 rounded-full font-medium">Contact</div>
    // </nav>
  );
};

export default Navigation;
