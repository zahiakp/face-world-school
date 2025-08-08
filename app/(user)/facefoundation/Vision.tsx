import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

function Vision() {
  return (
    <section className="w-full bg-white text-gray-800 overflow-y-hidden">
      <div className="w-[90%] max-w-[1200px] mx-auto py-24 flex md:gap-24 justify-between">
        <div
          className="relative group/img"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="h-80 md:h-80 w-[100%] max-w-80 flex items-center justify-center bg-green-light border border-green-500 rounded-3xl md:w-80 z-[5]">
            <h6 className="text-6xl font-semibold text-green">FACE <span className="text-xl -ml-3 -translate-y-4">®</span></h6>
            {/* <img src="/images/logo green light.png" alt="" className="text-green-light z-10 w-[350px] absolute -top-1 -left-1"/> */}
            {/* <LogoStroke className="text-green z-10 w-[380px] h-auto absolute -top-7 -left-7" /> */}
            {/* <div className="w-24 h-60 bg-green-light group-hover/img:bottom-10 shadow-xl duration-200 -skew-12 z-[4] -rotate-12 absolute -bottom-4 -right-10 mix-blend-color-burn backdrop-blur-xs"></div> */}
            {/* <div className="w-20 h-60 bg-transparent border border-green-300 -skew-12 z-[4] -rotate-12 absolute -top-4 -left-10"></div> */}
            {/* <div className="w-40 h-80 bg-transparent border border-green -skew-12 -rotate-12 -top-10 absolute -bottom-20 right-24"></div> */}
          </div>
        </div>
        <div className="flex-1 gap-3 flex flex-col w-3/4 justify-center">
          {/* <h6 className="text-5xl md:text-6xl text-green font-medium ">
            <TextAnimate animation="blurInUp" by="word">
              FACE
            </TextAnimate>
          </h6> */}
          <p
            className="text-gray-800 mb-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            FACE Foundation is a visionary initiative led by eminent
            educationists in Kerala, India. For over two decades, our foundation
            has taken revolutionary strides in enhancing academic performance
            since its inception in 2009. Through impactful educational and
            developmental activities, FACE Foundation has consistently made
            waves in society.
          </p>
          <p
            className="text-gray-800 mb-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Under the leadership of Mr. E Yacoob Faizy, founding Secretary, FACE
            Foundation initially launched the Farooqu Model Residential School,
            aimed at nurturing young talents for competitive examinations from
            an early age. This initiative marked the beginning of a
            transformative educational approach that integrates rigorous
            academic training with moral and leadership education.
          </p>
          <p
            className="text-gray-800 mb-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Over the years, FACE has expanded its reach and scope, establishing
            FACE Campus, which later evolved into FACE World Leadership School.
            This institution has become a crucible for cultivating future
            leaders and civil servants through a focused, comprehensive
            curriculum that emphasises competitive success and societal impact.
          </p>
          <p
            className="text-gray-800 mb-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Still, its journey is continuing. In 2024, FACE Foundation
            established FACE IAS Academy in Trivandrum, a residential civil
            service academy (RCA) offering fully funded scholarships to
            deserving aspirants.
          </p>
          <p
            className="text-gray-800 mb-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            FACE Foundation is a registered NGO under The Indian Trusts Act,
            with valid 12AB, 80G, and CSR registration approvals. It is also
            registered with NGO Darpan under NITI Aayog, Government of India.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vision;
