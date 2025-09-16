'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, BookOpen, Heart, MapPin, Calendar, Quote, Menu, X, ArrowRight, Globe, Award, HandHeart, Icon } from 'lucide-react';
import Image from 'next/image';
import LogoStroke from '@/public/svg/LogoStrock';

export const Content = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'initiatives', 'chapters', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId:any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const chapters = [
    { name: 'Aligarh', region: 'Uttar Pradesh' },
    { name: 'Bangalore', region: 'Karnataka' },
    { name: 'Delhi', region: 'National Capital Territory' },
    { name: 'Pondicherry', region: 'Union Territory' },
    { name: 'Madhya Pradesh', region: 'Central India' },
    { name: 'Bhopal', region: 'Madhya Pradesh' },
    { name: 'Andhra Pradesh', region: 'South India' },
    { name: 'Kerala', region: 'South India' }
  ];

  const Features = [
    {
        icon : <Award className="w-8 h-8 text-white" />,
        title:"Higher Education",
        desc:"Promoting academic excellence and educational opportunities for students across the nation."
    },
    {
        icon : <HandHeart className="w-8 h-8 text-white" />,
        title:"Social Empowerment",
        desc:"Creating positive social impact through community engagement and meaningful initiatives."
    },
    {
        icon : <Target className="w-8 h-8 text-white" />,
        title:"Competitive Excellence",
        desc:"Fostering a culture of excellence and healthy competition among students."
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      

      <section id="home" className="relative  bg-green-light/50">
        <div className="max-w-[1200px] w-[85%] mx-auto">
          <div className="flex items-center relative">
            <div className='py-24'>
              <div className="inline-flex items-center px-4 py-2 bg-green-light rounded-full mb-6">
                <Globe className="w-4 h-4 text-green-200 mr-2" />
                <span className="text-sm font-medium text-green-200">National Student Association</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"> 
                Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400">Future Leaders</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The official national association of students from FACE World Leadership School, <br />
                promoting higher education, social empowerment, and competitive excellence across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('initiatives')}
                  className="inline-flex items-center px-8 py-4 bg-green-300 cursor-pointer text-white rounded-lg hover:bg-green-300 transition-all transform hover:scale-[1.01] font-semibold"
                >
                  Our Initiatives
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('chapters')}
                  className="inline-flex items-center px-8 py-4 border-2 border-green-300 text-green-300 rounded-lg transition-colors font-semibold"
                >
                  Find Your Chapter
                </button>
              </div>
            </div>
            <div className='h-full hidden md:block absolute bottom-0 right-0 overflow-hidden'>
                <Image alt='face-photo.png' src={'/images/face-photo.png'} height={400} width={200} className='h-[600px] w-auto '/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto w-[85%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">About FACE Study Circle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collective platform for leadership development, collaboration, and social responsibility
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {Features.map((item:any,index:number)=>(
             <div key={index} className="bg-gradient-to-br from-green-light/40 to-green-light/80 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-300 rounded-xl flex items-center justify-center mx-auto my-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>   
            ))}
            
          </div>

          <div className="bg-gradient-to-r flex from-green-200 to-green-300 relative overflow-hidden rounded-2xl p-10 md:p-20 text-white text-center">
            <Quote className="w-32 hidden md:block h-32 mx-auto mr-20 text-green-light" />
            <div className='flex flex-col items-center justify-start flex-1'>
                <blockquote className="text-4xl md:text-6xl text-left font-medium text-green-light">
              Guided by a national committee, we work as a collective platform for <span className='text-white'> leadership development</span>, 
              collaboration, and <span className='text-white'>social responsibility.</span>
            </blockquote>
            </div>
            <LogoStroke className="text-green-light/30 z-[1] w-[480px] h-auto absolute -bottom-40 right-[12%] rotate-12"/>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-green-light/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-[85%]">

          <div className="grid lg:grid-cols-3 gap-10 items-center relative ">
            <div className='col-span-2'>
              <div className=" inline-flex items-center px-4 py-2 bg-green-light/50 rounded-full mb-6">
                <Heart className="w-4 h-4 text-green-300 mr-2" />
                <span className="text-sm font-medium text-green-300">Winter Relief Campaign</span>
              </div>
              
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Blanket Challenge</h3>
              
              <p className="text-lg text-gray-600 mb-6">
                Our most impactful initiative takes place annually in Delhi, where our dedicated members 
                come together to distribute blankets to the homeless during harsh winter months. This 
                heartfelt campaign directly addresses the risks of cold exposure and aligns with 
                <span className="font-semibold text-green-300"> Sustainable Development Goal 3: Good Health and Well-being</span>.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Delhi</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Annual Winter Campaign</span>
                </div>
              </div>
            </div>
            <LogoStroke className="text-green-300/30 z-[1] w-[480px] h-auto absolute -bottom-60 right-0 rotate-12"/>
          </div>
        </div>
      </section>
      </div>
            )}