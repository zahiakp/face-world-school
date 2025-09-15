import LogoStroke from "@/public/svg/LogoStrock";
import Link from "next/link";
import React from "react";

function Hero({name,position}:{name:string,position:string}) {
  return (
    <div className="h-[400px] w-full bg-green">
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-medium font Grotesque-font text-lime-200">
          {name}
        </h1>
        <div className="breadcrumbs text-sm text-gray-300">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/academic-council">Academic Council</Link>
            </li>
            <li>{name}</li>
          </ul>
        </div>
        <LogoStroke className="text-green-light/30 z-[1] w-[480px] h-auto absolute -bottom-40 right-[12%] rotate-12"/>
      </div>
    </div>
  );
}

export default Hero;
