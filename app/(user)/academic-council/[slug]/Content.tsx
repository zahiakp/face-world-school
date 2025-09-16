import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { SiFueler } from "react-icons/si";

function Content({data}:{data:any}) {
  return (
    <section className="bg-green-900">
      <main className="w-[85%] max-w-[1200px] mx-auto flex gap-14">
        <div className="flex-1 py-10 gap-5">
        <p className="text-lg items-center flex gap-3">
            <SiFueler className="text-2xl"/>
            <span className="px-5 bg-green text-sm rounded-3xl py-1 text-green-light w-fit ">{data.designation}</span></p>
        <p className="mt-5">{data.description}</p></div>
        <div className="w-20 -translate-y-20 md:w-[250px] flex items-end justify-center h-[350px] overflow-hidden bg-green border-8 border-green-900 rounded-full">
            <Image alt={data.image}
          src={`/images/leaders/${data.image || "Kamalkutty-Sir2.png"}`}
          height={200}
          width={200}
          className="h-full w-full object-cover"/>
        </div>
      </main>
    </section>
  );
}

export default Content;
