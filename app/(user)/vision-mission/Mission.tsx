import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

function Vision() {
  return (
    <section className="w-full bg-green-light text-gray-800 overflow-y-hidden">
      <div className="w-[90%] max-w-[1200px] mx-auto py-24 flex md:gap-24 justify-between">
        <div className="flex-1 gap-3 flex flex-col w-3/4 justify-center">
          <h6 className="text-5xl md:text-6xl text-green font-medium ">
            <TextAnimate animation="blurInUp" by="word">
              Mission
            </TextAnimate>
          </h6>
          <p
            className="text-gray-800 max-w-[600px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our mission is to bridge the leadership gap in civil services and
            global institutions by nurturing underserved youth. Offer
            residential, merit-based education integrated with national and
            international opportunities. Drive national change through ethical
            leadership and social impact.
          </p>
        </div>
        <div
          className="relative group/img"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="h-80 md:h-80 w-[100%] max-w-80 md:w-80 z-[5]  duration-300  relative">
            <img
              src={`/images/7.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* <img src="/images/logo green light.png" alt="" className="text-green-light z-10 w-[350px] absolute -top-1 -left-1"/> */}
            {/* <LogoStroke className="text-green z-10 w-[380px] h-auto absolute -top-7 -left-7" /> */}
            <div className="w-24 h-60 bg-green-300 group-hover/img:bottom-10 shadow-xl duration-200 skew-12 z-[4] rotate-12 absolute -bottom-4 -left-10 mix-blend-color-burn backdrop-blur-xs"></div>
            <div className="w-20 h-60 bg-transparent border border-green-300 skew-12 z-[4] rotate-12 absolute -top-4 -right-10"></div>
            {/* <div className="w-40 h-80 bg-transparent border border-green -skew-12 -rotate-12 -top-10 absolute -bottom-20 right-24"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
