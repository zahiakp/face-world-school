"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdOutlineLensBlur } from "react-icons/md";
import LogoStroke from "@/public/svg/LogoStrock";
import { SiPicardsurgeles } from "react-icons/si";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { WiStars } from "react-icons/wi";

export default function FacultyCard({ faculty }: { faculty: any }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={faculty.slug ? `/academic-council/${faculty.slug}` : "#"}
      className="group/card relative block cursor-none" // cursor removed for whole card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Card UI */}
      <div className="h-40 flex items-center justify-center rounded-xl bg-green-light overflow-hidden relative">
        <Image
          alt={faculty.image}
          src={`/images/leaders/${faculty.image || "Kamalkutty-Sir2.png"}`}
          height={130}
          width={200}
          className="h-full w-auto z-[2]"
        />
        <WiStars className="text-green/10 z-[1] w-[200px] h-auto absolute left-0 -top-12"/>
      </div>

      <div className="mt-2">
        <p className="text-lg font-semibold">{faculty.name}</p>
        <p className="text-green-300 -mt-1">{faculty.designation}</p>
        <div className="w-full border-b mt-1 border-green-300/30"></div>
        <div className="w-0 h-[2px] mb-1 group-hover/card:w-[50%] duration-200 bg-green-400"></div>
        <p className="text-xs">{faculty.qualification || "MBA, Stanford GSB | Ex. Co-Founder, Udayy | Forbes 30 Under 30 | NSIT"}</p>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="cursor"
            className="absolute w-10 h-10 rounded-full bg-green text-green-light text-xs flex items-center justify-center pointer-events-none shadow-xl z-[5]"
            style={{ top: pos.y - 32, left: pos.x - 32 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <MdArrowOutward className="text-2xl"/>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
