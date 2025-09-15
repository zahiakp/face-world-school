import LogoStroke from "@/public/svg/LogoStrock";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[400px] w-full bg-green">
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-medium font Grotesque-font text-lime-200">
          Ou
          <span className="imperial-script -ml-[6px]  mr-5 text-[80px] md:text-[120px]">
            r
          </span>
           Lead<span className="imperial-script -ml-[6px]  mr-1 text-[80px] md:text-[120px]">
            er
          </span>s
        </h1>
        <div className="breadcrumbs text-sm text-gray-300 -mt-2">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Our Leaders</li>
          </ul>
        </div>
        <LogoStroke className="text-green-light/30 z-[1] w-[480px] h-auto absolute -bottom-40 right-[12%] rotate-12"/>
      </div>
    </div>
  );
}

export default Hero;
