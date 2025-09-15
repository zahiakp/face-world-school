"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { HiMiniHome } from 'react-icons/hi2';
import { TbHome } from 'react-icons/tb';

const Content: React.FC = () => {
  const StatCard = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div className={`text-center p-6 rounded-2xl backdrop-blur-lg border border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="block text-3xl md:text-4xl font-semibold text-green-300">{number}</span>
        <span className="text-green-200 text-xs md:text-sm uppercase tracking-wider">{label}</span>
      </div>
    );
  };

  const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="flex items-start gap-4 p-6 border border-gary-200 rounded-xl transition-all duration-300 group">
      <div className="w-12 h-12 bg-green-light rounded-lg flex items-center justify-center text-green text-2xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );

  const LeaderCard = ({ name, title, image}: { name: string; title: string; image:string}) => (
    <div className="overflow-hidden rounded-xl border border-gray-200 flex">
      <div className='w-32 bg-green-light h-full '><Image alt={image} src={image} height={100} width={100} className='h-full w-full object-cover'/></div>
      <div className='flex flex-col p-5 py-3'>
      <h3 className="font-semibold text-slate-900">{name}</h3>
      <p className="text-green-300 text-sm -mb-2">{title}</p>
   </div>
    </div>
  );

  const ProgramCard = ({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden transition-all duration-700 hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-green-500/10 rounded-full transform translate-x-6 md:translate-x-8 -translate-y-6 md:-translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 relative z-10">{title}</h3>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base relative z-10">{description}</p>
      </div>
    );
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-green-900/50 to-slate-700 flex items-center relative overflow-hidden">
        <div className="max-w-[1200px] w-[85%] mx-auto relative z-[1] py-20">
          <div>
            <div className="inline-block bg-green-300/10 border border-green-400/50 text-green-300 px-4 md:px-6 py-2 md:py-3 rounded-full">
              ✨ Launched 2024 • Trivandrum, Kerala
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-green mt-8 md:mb-12 max-w-4xl leading-relaxed">
              Excellence in Civil Service Training - Nurturing India's Future Leaders Through Inclusive Education
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12">
              <StatCard number="100" label="Students Per Year" delay={200} />
              <StatCard number="100%" label="Free Education" delay={400} />
              <StatCard number="360°" label="Holistic Training" delay={600} />
              <StatCard number="24/7" label="Residential Care" delay={800} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 md:mb-6">
              Empowering Dreams, Building Leaders
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-4 md:space-y-6 mt-5">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                FACE IAS Academy represents a paradigm shift in civil service training. Built on the proven RCA (Residential Coaching Academy) model, we are committed to nurturing 100 exceptional students annually, completely free of cost.
              </p>
              
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Our mission extends beyond traditional coaching – we cultivate future leaders who will drive inclusive governance and nation-building. Through rigorous selection via competitive entrance exams and personality interviews, we identify and empower the brightest minds from all walks of life.
              </p>
              <div className="grid md:grid-cols-2 gap-5 md:gap-5 max-w-5xl mx-auto">
            <LeaderCard
              name="P. Kamalkutty IAS (Retd)"
              title="Principal"
              image="/images/leaders/Kamalkutty-Sir2.png"
            />
            
            <LeaderCard
              name="M.P. Joseph IAS (Retd)"
              title="Director Academics"
              image="/images/leaders/Kamalkutty-Sir2.png"
            />
          </div>
          <p>Guided by Excellence</p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <FeatureCard
                icon={<HiMiniHome />}
                title="Fully Residential"
                description="Complete accommodation with modern facilities, creating an immersive learning environment"
              />
              
              <FeatureCard
                icon={<HiLightBulb />
}
                title="Holistic Development"
                description="Beyond academics - daily mentoring, ethics, interview skills, and character building"
              />
              
              <FeatureCard
                icon={<FaGraduationCap />}
                title="Complete Scholarship"
                description="Coaching, food, accommodation, study materials - everything provided free of cost"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;