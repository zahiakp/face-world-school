import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import React from "react";

function Content() {

  const Pillars = [
    {
      icon:"premium.svg",
      title:"Leadership with Ethics",
      description:"Our students are groomed to lead with integrity, empathy and a sense of civic responsibility, whether in civil services, education, governance, or public life, because we believe students must develop leadership from values.",
    },
    {
      icon:"badge.svg",
      title:"Merit with Inclusion",
      description:"We uphold a model of equal opportunity grounded in merit. At FACE, 50% of students at the residential campus and 100% at FACE IAS Academy study completely free of cost. Admission is based solely on entrance performance and personality assessments, ensuring no recommendation, privilege, or background compromises fairness.",
    },
    {
      icon:"exellence.svg",
      title:"Residential Excellence",
      description:"Transformation thrives in an immersive environment. Our full-time residential programs offer 24/7 academic, emotional, and leadership support, cultivating focused learning, personal growth, and peer-led motivation in a community designed for excellence.",
    },
    {
      icon:"status.svg",
      title:"National Service Orientation",
      description:"We uphold a model of equal opportunity grounded in merit. At FACE, 50% of students at the residential campus and 100% at FACE IAS Academy study completely free of cost. Admission is based solely on entrance performance and personality assessments, ensuring no recommendation, privilege, or background compromises fairness.",
    },
    {
      icon:"puzzle.svg",
      title:"Global Readiness",
      description:"In a connected world, leadership must transcend borders. We prepare students for global university admissions, international fellowships, model diplomacy, and cross-border engagements. Our vision is to raise globally aware citizens with the skills and mindset to lead in any environment.",
    },
    {
      icon:"status2.svg",
      title:"Holistic Development",
      description:"Leadership is not just intellectual; it’s personal, physical, and moral. We provide a curriculum that includes academics, physical fitness, martial arts, public speaking, AI and tech training, and ethical reasoning, ensuring every student grows into a confident, capable, and balanced leader.",
    },
  ]
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="w-[85%] max-w-[1200px] mx-auto py-24 flex md:gap-20">
        <div>
          <h6 className="text-5xl md:text-5xl mb-3 text-green font-medium">
          <TextAnimate animation="blurInUp" by="word">
             Our Core Philosophical Pillars
          </TextAnimate>
          </h6>
          <div className="mt-10 grid grid-cols-1 w-full md:w-fit md:grid-cols-4 gap-4">
            {Pillars.map((item:any,index:number)=>(
              <div data-aos="fade-up" data-aos-delay={`${index+2}00`} key={index} className={`flex w-full md:w-full relative cursor-pointer after:h-[6px] after:bg-green-500 after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:duration-300 group/box items-center justify-start flex-col border hover:-translate-y-1 duration-300 hover:shadow-lg bg-green-50/50 border-green-500 p-7 px-9 overflow-hidden rounded-2xl`}>
                        {/* <LuSchool  className="text-7xl text-lime-600"/> */}
              <img src={`/svg/${item.icon}`} alt="" className="h-28 mt-5"/>

                    <p className='mt-4 font-semibold w-full'>{item.title}
                    </p>
                    <p className="text-sm mt-2">{item.description}</p>
                    </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
