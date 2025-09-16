"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TextAnimate } from "./text-animate";
import Link from "next/link";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data ,title}: { data: TimelineEntry[],title?:string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState<any>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-[1200px] mx-auto pb-5 pt-20">
        {title && <div className="max-w-[700px]"><TextAnimate animation="blurInUp" by="word" className="text-4xl md:text-6xl text-green font-medium">
                                   {title}
                                   </TextAnimate>
      </div>}</div>
      <div className='max-w-[1200px] mx-auto flex space-x-3 mt-5 bg'>
                       {data.map((item: any) => (
  <Link 
    href={`#${item.id}`}
    className={`p-3 text-left whitespace-nowrap cursor-pointer px-5 border rounded-lg transition-colors duration-200 ${
      active === item.title 
        ? "border-green-500 bg-green-light/50 font-semibold" 
        : "border-gray-200 hover:bg-gray-50"
    }`} 
    key={item.title}
  >{item.title}
  </Link>
))}

                    </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div id={item.id} className="sticky flex flex-col md:flex-row z-[2] items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-semibold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-lime-300 via-green-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
