import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import { FastForward, GraduationCap, NotebookPen, UserPlus, UserRoundSearch, UserStar } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaUserGraduate,
  FaPencilAlt,
  FaUserCheck,
  FaCalendarAlt,
} from "react-icons/fa";

function Content() {

    const SelectionProcess = [
        {   stage:1,
            title:"Application Form",
            description:"The first stage of admission is the application form.",
            icon:<NotebookPen size={20} />
        },
        {   stage:2,
            title:"Online Test",
            description:"The second stage of admission is the online test.",
            icon:<UserRoundSearch size={20} />
        },
        {   stage:3,
            title:"Personal Interview",
            description:"Admission will be given to those who are selected through this.",
            icon:<UserStar size={20} />
        }
    ]

    const AdmissionProcess = [
        {  
            title:"Stage 1: Early Bird",
            description:<span>The first stage or Early bird admission is held in the
                    months of
                    <span className="font-semibold">January and March</span></span>,
            icon:<FastForward size={20} />
        },
        {  
            title:"Stage 2: Regular Admission",
            description:<span>The second stage or Regular admission is held in the
                    months of
                    <span className="font-semibold">April and May</span></span>,
            icon:<UserPlus size={20} />
        },
    ]


  return (
    <section className="py-24 px-[5%] md:px-[15%] bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left Column: Procedure & Eligibility */}
        <div className="space-y-12">
          {/* Admission Procedure */}
          <div>
            <h6 className="text-3xl md:text-4xl mb-2 text-green font-semibold">
          <TextAnimate animation="blurInUp" by="word">
             Admission Procedure
          </TextAnimate>
          </h6>
            <p className="text-green-950 mb-6 leading-relaxed">
              Admission to FACE World Leadership School is done in two stages.
            </p>

            <div className="space-y-4">
                {AdmissionProcess.map((item:any,index:number)=>(
                    <div data-aos="fade-up"
            data-aos-delay={index*100*2} key={index} className="flex gap-4 items-start p-4 border border-green-500 rounded-xl bg-green-50">
                <div className="p-3 bg-green-light rounded-lg text-green">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-green-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-green-950">
                    {item.description}
                  </p>
                </div>
              </div>
))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-green-950 text-green-50 p-8 rounded-2xl relative overflow-hidden">
            <div className="relative z-[1]">
              <h3 className="text-2xl font-semibold text-green-light mb-4">
                Eligibility Criteria
              </h3>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50/10 backdrop-blur-sm rounded-lg">
                  <GraduationCap size={24} className="text-green-50" />
                </div>
                <p className="text-lg font-base text-green-50">
                  Presently 10th standard student or must have completed 10th
                  standard.
                </p>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-60 h-32 bg-green-500/40 rounded-full blur-2xl"></div>
            <LogoStroke className="text-green-light/30 z-[1] w-[280px] h-auto absolute -bottom-40 -right-[15%] rotate-12" />
          </div>
        </div>

        {/* Right Column: Process & CTA */}
        <div className="space-y-12">
          {/* Admission Process */}
          <div>
            <h6 className="text-3xl md:text-4xl mb-6 text-green font-semibold">
          <TextAnimate animation="blurInUp" by="word">
             Selection Process
          </TextAnimate>
          </h6>
            <div className="relative border-l-2 border-zinc-500/20 ml-3 space-y-8 pl-8">
            {SelectionProcess.map((item:any,index:number)=>(
              <div key={index} className="relative" data-aos="fade-up"
            data-aos-delay={index*100*2}>
                <div className="absolute -left-[50px] top-0 p-2 bg-green-950  text-green-light border-green-light rounded-full  shadow-lg">
                  <span className="font-semibold text-sm w-4 h-4 flex items-center justify-center">
                    {item.stage}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-green-950 flex items-center gap-2">
                  {/* {item.icon}  */}
                  {item.title}
                </h3>
                <p className="text-zinc-500">
                  {item.description}
                </p>
              </div>
))} 
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 px-14 bg-green-50 rounded-2xl border border-green-500 relative  overflow-hidden">
            <h3 className="text-3xl font-semibold text-green-950 mb-2">
              Ready to Join Us?
            </h3>
            <p className="text-green-950 mb-6">
              Start your journey with FACE World Leadership School today. Fill out the
              application form to apply.
            </p>
            <Link
              href="/admission/form"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-green-50 bg-green-950 rounded-full hover:bg-green-200 transition-colors shadow-lg shadow-green-950/20"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
