"use client";
import React, { useState, useCallback } from "react";
import { FaArrowAltCircleRight, FaHeart, FaYoutube } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import {
  IoIosArrowDropdownCircle,
  IoMdArrowForward,
} from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { IoArrowDownCircle } from "react-icons/io5";
import { FiCornerRightDown } from "react-icons/fi";
import { FaCircleArrowRight } from "react-icons/fa6";


interface NavProps {
  active?: string;
}

const Nav = React.memo(({ active }: NavProps) => {
  const [isOpen, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null);

  const handleDropdown = useCallback((index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  }, []);

  const handleMobileDropdown = useCallback((index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

console.log("Active Nav Item:", dropdown);


  return (
    <nav className="w-full px-10 bg-white text-gray-800 sticky top-0 z-[10] shadow-sm">
      <div className="w-full max-w-[1200px] h-[90px] md:h-[100px] flex items-center justify-between mx-auto">
        <Link href="/" className="h-[40px] md:h-[50px]">
          <Image alt="Face Logo" src={'/images/Logo-Green.png'} height={140} width={170}/>
        </Link>
        <div className="items-center gap-10 hidden md:flex">
          <ul className="flex items-center justify-center gap-8 text-[16px]">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={i}
                onMouseEnter={() => handleDropdown(i + 1)}
                onMouseLeave={() => handleDropdown(i + 1)}
                className={`group/link relative cursor-pointer flex gap-2 items-end ${active == item.path ? "text-green":""} hover:text-green duration-200`}
              >
                <Link href={item.path || "#"} className="flex items-center gap-1 group-hover/link:underline underline-green">
                  {item.label}
                  {item.items && (
                    <IoArrowDownCircle
                      className={`group-hover/link:rotate-180 text-lg text-green-400/70 group-hover/link:text-green-300 ${
                        dropdown === i + 1 && "rotate-180"
                      } duration-300`}
                    />
                  )}
                </Link>
                {item.items && (
                  <ul
                  className={`${
                    dropdown === i + 1 ? "max-h-[500px]" : "max-h-0 opacity-0"
                  } overflow-hidden cursor-pointer transition-[max-height] min-w-40 pt-7 border-t-0 mx-auto absolute top-full left-[50%] -translate-x-[50%] rounded-xl duration-300 flex flex-col items-center bg-white`}
                >
                  {item?.items?.map((it: any, ii: number) => (
                    <Link
                      href={it.path || "#"}
                      key={ii}
                      className="p-3 px-5 w-full text-center border-b border-green-800 hover:bg-green-900/30 duration-300 whitespace-nowrap"
                    >
                      {it.label}
                    </Link>
                  ))}
                </ul>
                )}
              </li>
            ))}
          </ul>
          {/* <Link
            href="/donate"
            className="p-2 px-5 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base"
          >
            <FaHeart className="text-yellow-300" />
            Donate
          </Link> */}
        </div>
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#179900"
            size={27}
            rounded
          />
        </div>
      </div>
      {isOpen && (
        <section className="z-[10] md:hidden bg-green-light fixed top-[90px] right-0 w-full py-5 h-[100vh] flex flex-col justify-start overflow-y-scroll">
          <div className="">
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="w-full ">
                <div
                  onClick={() => handleMobileDropdown(index+1)}
                  className="hover:translate-x-1 border-b border-green-300/10 w-[90%] mx-auto justify-between box-border p-3 pr-10 px-5 hover:bg-green-800 duration-300 font-semibold text-lime-600 flex items-center"
                >
                  {!item.items ? <Link
                    href={item.path}
                    className="text-xl text-green-200 flex items-center gap-4 whitespace-nowrap"
                  >
                    <span className="text-lg text-green-300/60">
                      <Image className="h-5 w-5 opacity-40" src={'/images/logo green.png'} alt="logo green.png" width={10} height={10}/>
                    </span>
                    {item.label}
                  </Link> : <p
                    className="text-xl text-green-200 flex items-center gap-4 whitespace-nowrap"
                  >
                    <span className="text-lg text-green-300/60">
                      <FiCornerRightDown />
                    </span>
                    {item.label}
                  </p>}
                  {item.items && (
                    <IoIosArrowDropdownCircle
                      className={`text-xl text-green-300 ${
                        dropdown === index + 1 ? "rotate-180" : ""
                      } duration-300`}
                    />
                  )}
                </div>
                {item.items && (
                  <ul
                    className={`bg-white/50 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      dropdown === index+1 ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.path || "#"}
                          className="p-3 px-14 text-lime-700 gap-3 flex items-center border-b hover:bg-lime-300/60 border-lime-100"
                        >
                          <Image className="h-4 w-4 opacity-30" src={'/images/logo green.png'} alt="logo green.png" width={5} height={5}/>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {/* <Link
              href="/donate"
              className="p-3 px-6 my-5 w-fit ml-10 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base"
            >
              <FaHeart />
              Donate
            </Link> */}
          </div>
          <div className="py-3 mt-3 flex gap-2 mx-10">
            {[
    { icon: <AiFillInstagram />,link: "https://www.instagram.com/faceworldleadershipschool"},
    { icon: <RiWhatsappFill />,link: "https://wa.me/+919107644644?text=Hello%20FACE%20School"},
    { icon: <TiSocialFacebook />,link: "https://www.facebook.com/facecampus.in"},
    { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCf4fP14V8lTfV4O3T4tofzw/featured" },
            ].map((icon, i) => (
              <Link
                target="_blank"
                key={i}
                href={icon.link || "#"}
                className="p-2 bg-green-300 text-green-light rounded-lg text-xl"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </section>
      )}
    </nav>
  );
});

Nav.displayName = "Nav";

export default Nav;


export const NAV_ITEMS = [
  {
    label: "About",
    items: [
      { label: "Our Story", path: "/ourstory" },
      { label: "Vision & Mission", path: "/vision-mission" },
      { label: "Our Leadership", path: "/leadership" },
      { label: "FACE Foundation", path: "/facefoundation" },
      { label: "Our Philosophy ", path: "/corepillars" },
      { label: "Academic Council", path: "/academic-council" },
      { label: "FACE IAS Academy", path: "/iasacademy" },
      { label: "Face study circle", path: "/study-circle" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "Programs Overview", path: "/programoverview" },
      { label: "What We Provide", path: "/whatprovide" },
      { label: "Foundation Programs", path: "" },
      { label: "FACE Entrance Coaching", path: "" },
    ],
  },
  { label: "Impact" ,path:"/impact"},
  {
    label: "Flagship Initiatives",
    items: [
      { label: "FACEx Talk Show", path: "" },
      { label: "Face Inspira", path: "" },
      { label: "Campus Expeditia", path: "" },
      { label: "Current Affairs", path: "" },
      { label: "UN SDG Summit", path: "" },
      { label: "WSW- ISRO", path: "" },
      { label: "Face Launchpad", path: "" },
    ],
  },
  {
    label: "Life at FACE",
    items: [
      { label: "Programs", path: "/programs" },
      { label: "Facilities ", path: "" },
      { label: "People ", path: "" },
      { label: "INSAF", path: "" },
    ],
  },
  { label: "Admissions", path: "" },
  { label: "Contact Us", path: "/contact" },
  // { label: "Support Our Mission", path: "" },
];