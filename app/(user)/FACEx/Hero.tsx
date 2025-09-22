import LogoStroke from "@/public/svg/LogoStrock";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[400px] w-full bg-zinc-950">
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold font Grotesque-font text-red-600">
          FACE<span className="font-medium">x</span>
        </h1>
        <div className="breadcrumbs text-sm text-gray-300 -mt-2">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>FACEx</li>
          </ul>
        </div>
        <LogoStroke className="text-red-500/50 z-[1] w-[480px] h-auto absolute -bottom-40 right-[12%] rotate-12"/>
      </div>
    </div>
  );
}

export default Hero;
