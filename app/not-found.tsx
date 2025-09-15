import FuzzyText from '@/components/ui/FuzzyText/FuzzyText'
import LogoStroke from '@/public/svg/LogoStrock'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center relative overflow-hidden px-4'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-50'></div>
      
      {/* Main content container */}
      <div className='relative z-10 text-center max-w-2xl mx-auto'>
        {/* 404 Text with logo overlay */}
        <div className='relative mb-8'>
          <FuzzyText 
            color='#0D2E2C'
            baseIntensity={0.15} 
            hoverIntensity={0.4}
            enableHover={true}
            fontSize={180}
          >
            404
          </FuzzyText>
          
          {/* Logo positioned over the 404 text */}
          {/* <div className='absolute inset-0 flex items-center justify-center'>
            <Image 
              alt='Face Logo' 
              src={'/images/logo green light.png'} 
              height={200} 
              width={200} 
              className='h-[200px] w-auto opacity-90 hover:opacity-100 transition-opacity duration-300'
              priority
            />
          </div> */}
        </div>

        {/* Error message */}
        <div className='mb-8 space-y-3'>
          <h1 className='text-xl font-bold text-slate-800 tracking-tight'>
            Oops! Page Not Found
          </h1>
          <p className='text-slate-600 text-sm max-w-md mx-auto leading-relaxed'>
            The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action buttons */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center mb-12'>
          <Link href='/' className='group'>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2'>
              <svg className='w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Footer info */}
      <div className='absolute bottom-6 text-center text-slate-500 text-sm'>
        <p>Error Code: 404 • Page Not Found</p>
      </div>
      <LogoStroke className="text-green-400/50 z-[1] w-[700px] h-auto absolute -bottom-40 rotate-12 -right-[12%]"/>
    </div>
  )
}

export default NotFound