import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import Image from "next/image";
import React, { Fragment } from "react";
import { IoMdArrowForward } from "react-icons/io";

function Content() {
  const Points = [
    {
      image: "img1.jpg",
      title: "Pathway to Prestigious Universities",
      description:"Leadership begins with preparation, for which our students are guided with mentorship through coaching, profile enhancement, and scholarship to apply to  admissions in India and abroad. With over ₹31 crore secured in scholarships, we don't just open doors for our students but also for them to walk confidently and purposefully.",
    },
    {
      image: "img2.jpg",
      title: "Public Leadership Preparation",
      description:"Our focused mentoring for Civil Services, Judicial Services, and other prestigious government exams is designed to equip future public leaders with the knowledge, discipline, and clarity needed to serve with integrity and impact. We prepare students to lead and to become the leaders of tomorrow.",
    },
    {
      image: "img1.jpg",
      title: "Social Impact Projects",
      description:"Authentic leadership is rooted in service. Our students lead SDG-aligned community initiatives and NGO internships, learning to listen, empathise, and act. These experiences nurture socially conscious leaders driven to make a meaningful and measurable impact.",
    },
    {
      image: "img2.jpg",
      title: "Early Exposure to UN Opportunities",
      description:"Introduction to UN volunteering, global youth assemblies, fellowships, and international leadership forums are an integral part of our student's journey. They get the opportunity to explore Model UN simulations, SDG advocacy training, and apply to global platforms such as the UN Youth Envoy and UN Academic Impact. We prepare them to dream globally and act locally, fostering early ambition for international civil service and diplomacy.",
    },
    {
      image: "img1.jpg",
      title: "Leading with Technology",
      description:"Leaders don’t just adapt to change; they make the change. Through integrated learning in AI, coding, and robotics, we equip our students with the technological fluency required to lead in future industries. They not only learn about technology but are made to be innovation-ready, prepared to shape what's next rather than what follows that already exists.",
    },
    {
      image: "img2.jpg",
      title: "Entrepreneurship with Social Responsibilty",
      description:"Our students are encouraged to think beyond employment-to create change through ideas. By guiding them through problem-solving exercises, grassroots project building, and exposure to real-world innovators, we ignite their entrepreneurial spirit and help them begin their own journey of creating sustainable solutions for society.",
    },
  ];
  return <div>
    {Points.map((project: any, i: number) => (
        <Fragment key={i}>
          <section id={project.id}
            className={`py-20 md:py-32 ${i % 2 == 1 ? "bg-green-light" : "bg-white"}`}
          >
            <main
              className={`w-[85%] max-w-[1200px] mx-auto flex-col md:flex-row items-center flex justify-center ${
                i % 2 == 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 md:gap-28`}
            >
              <div className="relative group/img" data-aos="fade-up" data-aos-delay="300">
                <div className="h-72 max-w-72 md:h-80 w-[100%] md:max-w-80 md:w-80 z-[5] group-hover/img:scale-[1.02] duration-300  relative">
                  <Image 
                    src={`/images/${project.image}`}
                    alt={project.image} height={320} width={320}
                    className="w-full h-full object-cover"
                  />
                  {/* <img src="/images/logo green light.png" alt="" className="text-green-light z-10 w-[350px] absolute -top-1 -left-1"/> */}
                  <LogoStroke className="text-green z-10 w-[340px] md:w-[380px] h-auto absolute -top-7 -left-7"/>
                </div>
              </div>
              <div className="flex-1 gap-3 flex flex-col md:w-3/4">
                <h6 className="text-4xl md:text-6xl text-green font-medium">
                  <TextAnimate animation="blurInUp" by="word">
                    {project.title}
                  </TextAnimate>
                </h6>
                <p className="text-gray-800" data-aos="fade-up" data-aos-delay="100">{project.description}</p>
                {/* <p className="font-semibold" data-aos="fade-up" data-aos-delay="200">{project.qus}</p>
                <div>
                  {project.items.map((item: any, ii: number) => (
                    <Fragment key={ii}>
                      <p data-aos="fade-up" data-aos-delay={(ii+3)*100} className="flex gap-3 items-center">
                        <IoMdArrowForward className="text-lime-600" />
                        {item}
                      </p>
                    </Fragment>
                  ))}
                </div> */}
              </div>
            </main>
          </section>
        </Fragment>
      ))}
  </div>;
}

export default Content;
