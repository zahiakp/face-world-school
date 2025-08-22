"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import ScrollImageChanger from "./demo";
 
 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
const sectionsData = [
  {
    id: 1,
    title: "Solve Real Problems &",
    subtitle: "Learn from Leadership",
    buttonText: "Consulting Challenge",
    description: "Consult **Cars24 & 100+ companies**, solve real problems, pitch to leadership & have a shot at placements",
    points: [
      {
        number: 1,
        highlight: "15% of students",
        text: " consultants land PPOs"
      },
      {
        number: 2,
        highlight: "300+ clients",
        text: " annually"
      },
      {
        number: 3,
        highlight: "1 in 6",
        text: " live projects with international firms"
      }
    ],
    image: {
      src: "/images/logo-banner.png",
      alt: "Consulting Challenge"
    },
    videoId: "ikltumaKUZc"
  },
  {
    id: 2,
    title: "Invest From a",
    subtitle: "₹5Cr Student Fund",
    buttonText: "Masters' Union Investment Fund",
    description: "Run a **₹5 cr investment fund** and invest across equities, startups, crypto, real estate, and commodities",
    points: [
      {
        number: 1,
        highlight: "10+",
        text: " investments made every year"
      },
      {
        number: 2,
        highlight: "stocks, crypto",
        text: " & even **real estate**"
      },
      {
        number: 3,
        highlight: "65%+",
        text: " returns generated in 2024–25"
      }
    ],
    image: {
      src: "/images/logo-banner.png",
      alt: "Investment Fund"
    },
    videoId: "C_6lIbplcy8"
  },
  {
    id: 3,
    title: "Visit India's",
    subtitle: "Biggest Factories",
    buttonText: "Off-Campus",
    description: "Meet 50+ operators, visit India's biggest factories, and gain insights from the likes of **Physics Wallah & Cars24**",
    points: [
      {
        number: 1,
        highlight: "50+",
        text: " industrial visits every year"
      },
      {
        number: 2,
        highlight: "30% engagements",
        text: " convert to consulting projects"
      },
      {
        number: 3,
        highlight: "internships",
        text: " while meeting CEOs"
      }
    ],
    image: {
      src: "/images/logo-banner.png",
      alt: "Factory Visits"
    },
    videoId: "yBAO-0_OXmg"
  }
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-green">
        <div className="w-[85%] max-w-[1200px] mx-auto py-20">
    <ScrollImageChanger 
        sections={sectionsData} 
        showDebug={false}
        className=" mx-auto"
      /></div></div>
  );
}