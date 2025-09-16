import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacultyCard from "./FacultyCard";

function Vision() {
  const Leaders = [
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS2",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS3",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug:"Kamalkutty-IAS",
      qualification:"MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    
  ];
  return (
    <section className="w-full bg-green-light/50 text-gray-800 overflow-x-hidden md:overflow-y-hidden">
      <div className="w-[85%] max-w-[1200px] mx-auto py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
       {Leaders.map((item:any,index:number)=>(
        <div key={index}><FacultyCard faculty={item}/>
        </div>
       ))}
      </div>
    </section>
  );
}

export default Vision;