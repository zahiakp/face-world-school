import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import React from "react";

function Vision() {
  const Leaders = [
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "M.P. Joseph IAS (Retd)",
      designation: "Principal",
      description:"M.P. Joseph IIAS is a distinguished Indian Administrative Service officer from the 1978 batch of the Kerala cadre. His remarkable career has spanned both national and international platforms. He served as Advisor for Labour Reforms and Industrial Relations, holding the rank of Additional Chief Secretary to the Government of Kerala. His international tenure with the International Labour Organisation (ILO) since 1992 reflects his global outlook and commitment to equitable development. A mentor of deep insight and global perspective, M.P. Joseph IAS now serves as the Director Academics of FACE World Leadership School, shaping the academic direction and enriching the minds of future leaders.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "M.P. Joseph IAS (Retd)",
      designation: "Principal",
      description:"M.P. Joseph IIAS is a distinguished Indian Administrative Service officer from the 1978 batch of the Kerala cadre. His remarkable career has spanned both national and international platforms. He served as Advisor for Labour Reforms and Industrial Relations, holding the rank of Additional Chief Secretary to the Government of Kerala. His international tenure with the International Labour Organisation (ILO) since 1992 reflects his global outlook and commitment to equitable development. A mentor of deep insight and global perspective, M.P. Joseph IAS now serves as the Director Academics of FACE World Leadership School, shaping the academic direction and enriching the minds of future leaders.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "M.P. Joseph IAS (Retd)",
      designation: "Principal",
      description:"M.P. Joseph IIAS is a distinguished Indian Administrative Service officer from the 1978 batch of the Kerala cadre. His remarkable career has spanned both national and international platforms. He served as Advisor for Labour Reforms and Industrial Relations, holding the rank of Additional Chief Secretary to the Government of Kerala. His international tenure with the International Labour Organisation (ILO) since 1992 reflects his global outlook and commitment to equitable development. A mentor of deep insight and global perspective, M.P. Joseph IAS now serves as the Director Academics of FACE World Leadership School, shaping the academic direction and enriching the minds of future leaders.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      description:"P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Kamalkutty-Sir.jpeg",
      name: "M.P. Joseph IAS (Retd)",
      designation: "Principal",
      description:"M.P. Joseph IIAS is a distinguished Indian Administrative Service officer from the 1978 batch of the Kerala cadre. His remarkable career has spanned both national and international platforms. He served as Advisor for Labour Reforms and Industrial Relations, holding the rank of Additional Chief Secretary to the Government of Kerala. His international tenure with the International Labour Organisation (ILO) since 1992 reflects his global outlook and commitment to equitable development. A mentor of deep insight and global perspective, M.P. Joseph IAS now serves as the Director Academics of FACE World Leadership School, shaping the academic direction and enriching the minds of future leaders.",
    },
  ];
  return (
    <section className="w-full bg-green-light/50 text-gray-800 overflow-y-hidden">
      <div className="w-[90%] max-w-[1200px] mx-auto py-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
       {Leaders.map((item:any,index:number)=>(
        <div key={index} className="border-4 border-green relative bg-green">
          <div className="h-72 w-full bg-green-light relative">
            <img src={`/images/leaders/${item.image}`} alt="" className="h-full w-full z-[1] relative object-cover"/>
            <img src="/images/logo-pattern4.png" className="absolute top-0 z-0 right-0" />
          </div>
          <div className="w-full p-5">
            <p className="font-semibold text-green-light text-lg">{item.name}</p>
            <p className="text-green-light/50">{item.designation}</p> </div>
            <LogoStroke className="absolute -bottom-24 z-0 -right-10 h-40 text-green-light/50 rotate-12"/>
        </div>
       ))}
      </div>
    </section>
  );
}

export default Vision;
