'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';

function Stages() {
    const stages = [
    {
      id: 1,
      title: "Stage 1",
      subtitle: "Where Future Leaders Begin Their Journey",
      location: "FACE World Leadership School",
      place: "Kodiyathur",
      description: "Students are enrolled at the FACE World Leadership School campus in Kozhikode, where they receive intensive academic training, competitive exam preparation, and holistic personal development.",
      image: "/images/face-campus.jpg",
    },
    {
      id: 2,
      title: "Stage 2", 
      subtitle: "Advancing to National Centres of Excellence",
      location: "Top Universities",
      place: "India & Abroad",
      description: "Supports students in gaining admission to top universities in India and around the world, helping them with scholarships and higher education pathways.",
      image: "/images/universities.jpg",
    },
    {
      id: 3,
      title: "Stage 3",
      subtitle: "Preparing for Civil Services and Leadership",
      location: "FACE IAS Academy",
      place: "Trivandrum", 
      description: "Students undergo full-time civil service preparation at FACE IAS Academy in Trivandrum.",
      image: "/images/IAS academy.jpg",
    }
  ];
   const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Start animating by default
  const totalSteps = stages.length;

  // Function to start the animation from the beginning.
  const startAnimation = useCallback(() => {
    setCurrentStep(0); // Reset to 0 to allow the first step (1) to be set by the effect
    setIsAnimating(true);
  }, []);

  // This useEffect hook manages the animation sequence.
  // It runs whenever `isAnimating` or `currentStep` changes.
  useEffect(() => {
    if (isAnimating && currentStep < totalSteps) {
      const timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
      }, 1200); // 1.2s delay between each step for a smooth flow.
      return () => clearTimeout(timer); // Cleanup timer on component unmount or re-render.
    } else if (currentStep === totalSteps) {
       // Automatically stop animation when the last step is reached.
       const timer = setTimeout(() => setIsAnimating(false), 500);
       return () => clearTimeout(timer);
    }
  }, [isAnimating, currentStep, totalSteps]);

  // Auto-start the animation when the component first mounts.
  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 1000); // Initial delay before the animation starts.
    return () => clearTimeout(timer);
  }, [startAnimation]);

  return (
    <section>
      <main className="w-[90%] max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10 py-20">
        <div className="col-span-3 hidden md:grid grid-cols-15 items-center gap-0">
          <div className="col-start-3 flex flex-col items-center justify-center">
            <p className={` ${currentStep >= 1 ? "bg-green-400 border-green-400 text-green-light" : "bg-gray-100 border-gray/20 text-gray-300"} w-12 h-12 text-xl flex items-center justify-center rounded-full border-4  font-semibold`}>
             {currentStep >= 1 ? <FaCheck /> : 1}
            </p>
            <p className='text-sm text-gray-500 mt-2'>stage 1</p>
          </div>
          <div className="col-span-4 h-1 bg-green/20 self-center relative -translate-y-3">
          <div className={`absolute left-0 top-0 transition-w h-1 duration-1000 bg-green-400 ${currentStep > 0 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className={` ${currentStep >= 2 ? "bg-green-400 border-green-400 text-green-light" : "bg-gray-100 border-gray/20 text-gray-300"} w-12 h-12 text-xl flex items-center justify-center rounded-full border-4  font-semibold`}>
             {currentStep >= 2 ? <FaCheck /> : 2}
            </p>
            <p className='text-sm text-gray-500 mt-2'>stage 2</p>
          </div>
          <div className="col-span-4 h-1 bg-green/20 self-center relative -translate-y-3">
          <div className={`absolute left-0 top-0 transition-w h-1 duration-1000 bg-green-400 ${currentStep > 1 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className={` ${currentStep >= 3 ? "bg-green-400 border-green-400 text-green-light" : "bg-gray-100 border-gray/20 text-gray-300"} w-12 h-12 text-xl flex items-center justify-center rounded-full border-4  font-semibold`}>
             {currentStep >= 3 ? <FaCheck /> : 3}
            </p>
            <p className='text-sm text-gray-500 mt-2'>stage 3</p>
          </div>
        </div>
        {stages.map((stage: any, index: number) => (
          <div key={index} className={`text-gray-800 min-h-40 duration-300 ${currentStep >= stage.id? "scale-100 grayscale-0" :"scale-90 grayscale-100 blur-[4px]"}`}>
            <div className="bg-green-light/50 rounded-2xl overflow-hidden  h-40">
            <img src={stage.image} alt={stage.image} className='w-full h-full object-cover'/></div>
            <p className='text-sm p-2 px-5 bg-green-100/50 text-green-300 rounded-xl italic mb-3'>{stage.subtitle}</p>
            <div className="space-y-1 mt-2">
              <h6 className="text-xl text-green font-semibold">
                {stage.location}
              </h6>
              <p>{stage.place}</p>
              <div className="w-full border-b border-gray-200"></div>
              <p className="text-sm text-gray-500">{stage.description}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Stages
