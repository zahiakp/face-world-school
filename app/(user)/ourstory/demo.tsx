// components/ScrollImageChanger.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'; // Optional: for conditional class names

interface Section {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  points: {
    number: number;
    text: string;
    highlight: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
  videoId?: string;
}

interface DebugInfo {
  activeSection: number;
  scrollProgress: number;
  currentImage: number;
}

interface ScrollImageChangerProps {
  sections: Section[];
  showDebug?: boolean;
  className?: string;
}

const ScrollImageChanger: React.FC<ScrollImageChangerProps> = ({
  sections,
  showDebug = false,
  className = ''
}) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    activeSection: 0,
    scrollProgress: 0,
    currentImage: 0
  });

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isInitialized = useRef<boolean>(false);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (!isInitialized.current) return;

    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    setDebugInfo(prev => ({
      ...prev,
      scrollProgress: Math.round(scrollProgress * 10) / 10
    }));
  }, []);

  // Throttled scroll event
  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Intersection Observer setup
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.1, 0.5, 0.9]
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0') - 1;
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(sectionIndex);
        }

        // Add/remove active class
        const element = entry.target as HTMLElement;
        if (entry.intersectionRatio > 0.3) {
          element.classList.add('section-active');
        } else {
          element.classList.remove('section-active');
        }
      });
    }, options);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    isInitialized.current = true;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  // Handle section change
  const setActiveSection = useCallback((sectionIndex: number) => {
    if (sectionIndex === currentSection || isTransitioning || sectionIndex < 0 || sectionIndex >= sections.length) {
      return;
    }

    console.log(`Changing to section ${sectionIndex + 1}`);
    setCurrentSection(sectionIndex);
    setIsTransitioning(true);

    setDebugInfo(prev => ({
      ...prev,
      activeSection: sectionIndex,
      currentImage: sectionIndex
    }));

    // Reset transition flag
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [currentSection, isTransitioning, sections.length]);

  // Handle play button click
  const handlePlayClick = useCallback(() => {
    const currentSectionData = sections[currentSection];
    console.log('Play button clicked for section:', currentSectionData?.title);
    
    if (currentSectionData?.videoId) {
      // Handle video popup logic here
      console.log('Playing video:', currentSectionData.videoId);
    }
  }, [currentSection, sections]);

  // Set section ref
  const setSectionRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  // Parse description text with highlights
  const parseDescription = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="text-cyan-400 font-bold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={cn("flex min-h-screen w-full p-5 gap-10 text-white lg:gap-16", className)}>
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={setSectionRef(index)}
            className="mb-20 py-10 opacity-30 transition-opacity duration-400 section-active:opacity-100 lg:mb-32"
            data-section={section.id}
          >
            <div className="mb-8">
              <button className="bg-gradient-to-r from-red-400 to-cyan-400 text-white border-none py-2 px-4 rounded-full text-xs mb-4 cursor-pointer transition-transform hover:scale-105">
                {section.buttonText}
              </button>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-5">
                {section.title} <br />
                <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                  {section.subtitle}
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed mb-5 lg:text-xl">
                {parseDescription(section.description)}
              </p>

              <div className="mt-8">
                {section.points.map((point) => (
                  <div key={point.number} className="flex items-center mb-4 gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-cyan-400 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {point.number}
                    </div>
                    <p className="text-base leading-relaxed">
                      <span className="text-cyan-400 font-semibold">{point.highlight}</span>
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Image Container */}
      <div className="flex-1 sticky top-[32%] h-[calc(100vh-2.5rem)] min-h-[350px] order-first lg:order-last lg:h-[calc(100vh-2.5rem)]">
        <div className="w-full h-[350px] relative overflow-hidden bg-gray-800">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="absolute h-full inset-0 transition-opacity duration-500"
              style={{
                opacity: index === currentSection ? 1 : 0,
                zIndex: index === currentSection ? 2 : 1
              }}
            >
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          {/* <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] cursor-pointer w-20 h-20 bg-white/90 border-none rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 lg:w-20 lg:h-20"
            onClick={handlePlayClick}
            aria-label="Play video"
          >
            <span className="text-2xl text-gray-800 ml-1">▶</span>
          </button> */}
        </div>
      </div>

      <style jsx>{`
        .section-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default ScrollImageChanger;

// lib/utils.ts (Optional utility for conditional classes)
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}





