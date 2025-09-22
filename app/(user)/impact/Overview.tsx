'use client';
import CountUp from '@/components/ui/CountUp/CountUp';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaUniversity } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { TbNorthStar } from 'react-icons/tb';

function Overview() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const Overview = [
    {
      count: "56",
      label: "Universities",
      icon: <FaUniversity />
    },
    {
      count: "16",
      label: "Countries",
      icon: <BiWorld />
    },
  ];

  return (
    // FIX 1: Added `relative` positioning to the parent container
    <Link href={'/impact'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className='relative hidden md:block w-full bg-green-light/50 overflow-hidden cursor-none' // Added overflow-hidden for cleaner edges
    >
      <main className='w-[90%] flex grid-cols-8 gap-14 max-w-[1200px] mx-auto py-20'>
        <div className='col-span-3'>
          <p className='text-[130px] font-semibold text-green -my-10'>
            <CountUp
              from={30.00}
              to={31.62}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />+
          </p>
          <p className='text-green-400 text-[30px] font-medium leading-9'>Crore rupees earned through scholarship</p>
        </div>
        <div className='border-l flex items-center text-green-500 text-3xl border-green-500/50'>
          <TbNorthStar className='-translate-x-4' />
        </div>
        <div className='col-span-3'>
          <p className='text-[130px] font-semibold text-green -my-10'>
            <CountUp
              from={200}
              to={229}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />+
          </p>
          <p className='text-green-400 text-[30px] font-medium leading-9'>Admissions Secured Worldwide</p>
        </div>
        <div className='border-l flex items-center text-green-500 text-3xl border-green-500/50'>
          <TbNorthStar className='-translate-x-4' />
        </div>
        <div className='space-y-6 col-span-2 '>
          {Overview.map((item, index) => (
            <div
              key={index}
              className='group rounded-2xl duration-300 hover:border-emerald-200 hover:-translate-y-1'
            >
              <div className='flex items-center space-x-4'>
                <div className='w-14 h-14 bg-green-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl text-emerald-600 group-hover:text-green-600 transition-colors duration-300'>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className='text-3xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent'>
                    {item.count}+
                  </p>
                  <p className='text-gray-600 font-medium text-sm lg:text-lg leading-tight'>
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="cursor"
            className="absolute w-10 h-10 rounded-full bg-green text-green-light text-xs flex items-center justify-center pointer-events-none shadow-xl z-[5]"
            // FIX 2: Adjusted positioning to center the cursor correctly.
            // Since the cursor is 40px (w-10), we subtract half (20px) to center it.
            style={{ top: pos.y, left: pos.x, x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <MdArrowOutward className="text-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  )
}

export default Overview;