import { TextAnimate } from "@/components/ui/text-animate";
import LogoStroke from "@/public/svg/LogoStrock";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacultyCard from "./FacultyCard";

function Content() {
  
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

export default Content;


export const Leaders = [
    {
      image: "Kamalkutty-Sir2.png",
      name: "P. Kamalkutty IAS (Retd)",
      designation: "Principal",
      slug: "Kamalkutty-IAS",
      qualification: "",
      description:
        "P. Kamalkutty IAS is an eminent administrator  who has played a pivotal role in shaping democratic values in Kerala. He had served in key positions such as Chief Election Commissioner of Kerala, Director of Panchayat-Urban Affairs, Registrar of the Agriculture University, and District Collector of both Kasargod and Kannur. His unwavering commitment to education and governance makes him a beacon of leadership and ethics. Today, he continues to inspire future generations as the Principal of FACE World Leadership School, guiding students with the same values he upheld throughout his public service journey.",
    },
    {
      image: "Sayyid-Zain-Bafakhy.png",
      name: "Sayyid Zain Bafakhy",
      designation: "Chairman",
      slug: "Sayyid-Zain-Bafakhy",
      qualification: "",
      description: "",
    },
    {
      image: "E-Yacoob-Faizy.png",
      name: "E Yacoob Faizy",
      designation: "General Secretary",
      slug: "E-Yacoob-Faizy",
      qualification: "",
      description: "",
    },
    {
      image: "Ameer-Ali-Nurani.png",
      name: "Ameer Ali Nurani",
      designation: "Vice Principal",
      slug: "Ameer-Ali-Nurani",
      qualification: "",
      description: "",
    },
    {
      image: "",
      name: "Shihab Klayikkode",
      designation: "CAO",
      slug: "Shihab-Klayikkode",
      qualification: "",
      description: "",
    },
    {
      image: "Muhammed-Thasneem-E.png",
      name: "Muhammed Thasneem E",
      designation: "Director",
      slug: "Muhammed-Thasneem-E",
      qualification: "",
      description: "",
    },
    {
      image: "",
      name: "Abusali O",
      designation: "Academic Head",
      slug: "Abusali-O",
      qualification: "",
      description: `An engaging personality with a flair for training students on how to excel in a competitive environment. Someone who enjoys interacting with students and hence his foray into training, his area of interest in competitive exam preparations is Social Science and Question paper analysis. He has trained more than 10000 plus students across various institutions, colleges and schools since he ventured into this sector at the beginning of the millennium.
                    Apart from training students on how to crack competitive examinations, he is also working as the academic in charge of Farook College ( Autonomous ) Civil Service Academy- a reputed institution in Kerala dedicated exclusively to grooming Civil Services aspirants. He was the former faculty at State Civil Services Academy, Government of Kerala. He is also associating with the �Walk With Scholar Programme� of UGC at different colleges across the country
                    He was selected as the ' Global Action Ambassador ' by Youth Now, the official partner of UN-Habitat, for promoting United Nations� Sustainable Development Goals ( SDGs ) in India. He was also an invitee to the Future Youth Congress 2019 held at United Nations Economic and Social Commission Asia-Pacific HeadQuarter. He is a partner to the United Nations SDG Programme. He is the founder and Chairman of Youth Mind International, an International NGO that works for the United Nations SDGs Promotion.`,
    },
    {
      image: "",
      name: "K Saleem",
      designation: "Academic Council Member",
      slug: "K-Saleem",
      qualification: "",
      description: "",
    },
    {
      image: "",
      name: "Adv. Sabeel KK",
      designation: "Academic Council Member",
      slug: "K-Muhammed-Jabir",
      qualification: "",
      description: `Faculty member, English Language Center, King Khalid University, Saudi Arabia. Former Teacher Educator and ELT consultant to many educational institutions in Kerala and abroad. A researcher with wide areas of interest like English language, literature, linguistics, media, journalism, ecology and anthropology.`,
    },
    {
      image: "",
      name: "Adv. Sabeel KK",
      designation: "Academic Council Member",
      slug: "Adv-Sabeel-KK",
      qualification: "",
      description: `HSST Political science PMSAPTHSS Kakkove. Former strategic consultant and Asst Professor- Department of psychology, KM College of Teacher Education Areecode Malappuram. LLB at Govt Law College Trivandrum, Masters' Degree in Education at Department of Education University of Calicut, MA Political Science at Madurai Kamaraj University, Career Guidance and Adolescent Counseling Faculty under Govt of Kerala.`,
    },
    {
      image: "",
      name: "Dr Shameem Pazhur",
      designation: "Academic Council Member",
      slug: "Dr-Shameem-Pazhur",
      qualification: "",
      description: `A prominent Educational Consultant with wide and diversified experience of more than eight years in educational services and socio-cultural activities.
                 After his graduation in Commerce from Markaz Arts College, he completed his Post-graduation in the same trade (M.Com) and in addition to MBA in finance.
                 In 2010, He started his career as a financial analyst in a UK based company in Qatar. He quit his job in 2013 to pursue his higher studies and completed PGJMC, B.Ed, M.Phil and PhD in commerce, further doing FDP from NIT Calicut. Now he runs an educational consultancy called Integrated Advanced Studies and Research Foundation.`,
    },
    {
      image: "",
      name: "PU Sadakathulla",
      designation: "Academic Council Member",
      slug: "PU-Sadakathulla",
      qualification: "",
      description: `Director- ESC international education consultancy. Director Guidance Public School and former CEO of Institute of human research and activation management. He has Masters and MPhil in English Language and literature form Bharathidasan University- Tamilnadu.`,
    },
  ];