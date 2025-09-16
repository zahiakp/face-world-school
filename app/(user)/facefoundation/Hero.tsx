import LogoStroke from "@/public/svg/LogoStrock";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[400px] w-full bg-green">
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-medium font Grotesque-font text-lime-200">
          FACE F
          <span className="imperial-script -ml-[6px]  mr-1 text-[80px] md:text-[120px]">
            o
          </span>
           und<span className="imperial-script -ml-[6px]  mr-1 text-[80px] md:text-[120px]">
            a
          </span>tion
        </h1>
        <div className="breadcrumbs text-sm text-gray-300 -mt-2">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Face Foundation</li>
          </ul>
        </div>
        <LogoStroke className="text-green-light/30 z-[1] w-[480px] h-auto absolute -bottom-40 right-[12%] rotate-12"/>
      </div>
    </div>
  );
}

export default Hero;
