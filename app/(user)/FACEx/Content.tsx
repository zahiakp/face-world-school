import React from 'react';
import { Play, Users, Globe, Award, Calendar, MapPin, ArrowRight, Star, Mic, Video, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import GradientBlinds from '@/components/GradientBlinds';

const Content = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className='w-full md:h-[450px] overflow-hidden'>
        <Image alt='FACEx program' src={'/images/IMG-20250922-WA0014.jpg'} height={400} width={800} className='w-full h-full object-cover'/>
      </div>
      {/* Hero Section */}
      <section className="py-20  bg-gradient-to-t from-red-800/30 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-red-500/30 text-red-400 px-6 py-3 rounded-full text-sm font-medium border border-red-800/30">
                <Star className="h-4 w-4 mr-2" />
                India's First Student Talk Show
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white md:leading-">
                FACE<span className='font-medium'>x</span> 
                <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mt-2">
                  Talk Show
                </span>
              </h1>
              
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                A revolutionary platform where India's brightest minds converge. More than just a talk show—it's a movement 
                empowering students to voice groundbreaking ideas and drive global change.
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center">
                  <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Latest Episode
                </button>
                <button className="border-2 border-red-600 text-red-400 px-10 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  Join the Movement
                </button>
              </div> */}
              
              {/* <div className="grid grid-cols-3 gap-8 p-8 border rounded-2xl bg-red-600/10 border-red-600/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">700+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">16+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">States</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-1">#1</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Pioneer</div>
                </div>
              </div> */}
            </div>
            
            <div className="relative">
              <div className="relative z-[2] flex gap-3">
              <div className='w-48 hover:w-72 h-[400px] border rounded-xl border-red-600/40 overflow-hidden duration-300'>
                <Image alt='FACEx program' src={'/images/talk1.jpg'} height={400} width={800} className='w-full h-full object-cover'/>
              </div>
              <div className='w-48 hover:w-72 h-[400px] border rounded-xl border-red-600/40 overflow-hidden duration-300'>
                <Image alt='FACEx program' src={'/images/talk2.jpg'} height={400} width={800} className='w-full h-full object-cover'/>
              </div>
              <div className='w-48 hover:w-72 h-[400px] border rounded-xl border-red-600/40 overflow-hidden duration-300'>
                <Image alt='FACEx program' src={'/images/talk3.jpg'} height={400} width={800} className='w-full h-full object-cover'/>
              </div>
                
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-600/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-red-800/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold text-red-600 mb-6">Beyond a Platform</h2>
            <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
              FACEx represents a paradigm shift in student engagement. Initiated by FACE Campus, 
              we're creating tomorrow's leaders through strategic communication and bold thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group text-center border border-red-600/50 bg-red-600/10 rounded-2xl p-10 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl mx-auto flex items-center justify-center transition-all duration-500 border border-red-500/20">
                  <Lightbulb className="h-8 w-8 text-white transition-transform" />
                </div>
                <div className="absolute inset-0 bg-red-600/20 rounded-2xl mx-auto w-16 h-16 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold  mb-4">Think Boldly</h3>
              <p className=" leading-relaxed">
                Fostering revolutionary thinking patterns that challenge conventional wisdom and generate breakthrough solutions.
              </p>
            </div>

            <div className="group text-center border border-red-600/50 bg-red-600/10 rounded-2xl p-10 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-xl mx-auto flex items-center justify-center transition-all duration-500 border border-red-500/20">
                  <Mic className="h-8 w-8 text-white transition-transform" />
                </div>
                <div className="absolute inset-0 bg-red-700/20 rounded-2xl mx-auto w-16 h-16 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold  mb-4">Speak Clearly</h3>
              <p className=" leading-relaxed">
                Mastering the art of impactful communication to transform ideas into actionable strategies that resonate globally.
              </p>
            </div>

            <div className="group text-center border border-red-600/50 bg-red-600/10 rounded-2xl p-10 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-800 to-red-900 rounded-xl mx-auto flex items-center justify-center transition-all duration-500 border border-red-500/20">
                  <Target className="h-8 w-8 text-white transition-transform" />
                </div>
                <div className="absolute inset-0 bg-red-800/20 rounded-2xl mx-auto w-16 h-16 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold  mb-4">Lead Confidently</h3>
              <p className=" leading-relaxed">
                Building next-generation leadership capabilities aligned with UN SDGs to drive meaningful global impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Events */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold text-white mb-6">The Future Unfolds</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Groundbreaking events that will redefine student leadership on national and international stages
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="group relative bg-gradient-to-br from-red-900/20 to-black rounded-3xl p-10 border border-red-600/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-[2]">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-red-400 mr-4" />
                  <span className="bg-red-900/40 px-4 py-2 rounded-full text-red-300 text-sm font-semibold border border-red-700/30">
                    National Event 2025
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">FACEx National Summit</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  The most anticipated convergence of student leaders, featuring intensive workshops, 
                  keynote presentations, and strategic networking sessions.
                </p>
                <div className="flex items-center text-red-400 mb-6">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="font-semibold">Rajkot, Gujarat</span>
                </div>
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-500 flex items-center transform transition-all duration-300">
                  Register Interest
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-red-950/30 to-black rounded-3xl p-10 border border-red-600/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-[2]">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-red-400 mr-4" />
                  <span className="bg-red-900/40 px-4 py-2 rounded-full text-red-300 text-sm font-semibold border border-red-700/30">
                    Global Expansion
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">FACEx International Dubai</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Historic international debut bringing Indian student voices to the global stage, 
                  fostering cross-cultural leadership exchange.
                </p>
                <div className="flex items-center text-red-400 mb-6">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="font-semibold">Dubai, United Arab Emirates</span>
                </div>
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all flex items-center group-hover:transform group-hover:scale-105 duration-300">
                  Early Access
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="">
  <div style={{ width: '100%', height: '600px', position: 'relative' }}>
    <GradientBlinds
      gradientColors={['#c7000a', '#fe8181']}
      angle={30}
      noise={0.3}
      blindCount={20}
      blindMinWidth={50}
      spotlightRadius={0.5}
      spotlightSoftness={1}
      spotlightOpacity={1}
      mouseDampening={0.15}
      distortAmount={0}
      shineDirection="left"
      mixBlendMode="lighten"
    />

    {/* Centered content */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
    <div className="mb-12">
      <h2 className="text-6xl font-semibold text-white mb-8 leading-tight">
        Shape Tomorrow's
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Leadership Narrative
        </span>
      </h2>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Join an exclusive community of visionary students who are redefining global discourse 
        through innovative thinking and strategic communication.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
      <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center">
        Apply to Participate
        <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
      </button>
      {/* <button className="border-2 border-red-600 text-red-400 px-12 py-5 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
        Explore Episodes
      </button> */}
    </div>
  </div>
</div>
  </div>
</section>

    </div>
  );
};

export default Content;