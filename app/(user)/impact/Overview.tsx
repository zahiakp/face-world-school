import CountUp from '@/components/ui/CountUp/CountUp'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FaGraduationCap, FaStarOfLife, FaUniversity } from 'react-icons/fa'
import { PiStarFourFill } from 'react-icons/pi'
import { TbNorthStar } from 'react-icons/tb'

function Overview() {

    const Overview = [
        // {
        //     count:"229",
        //     label:"Admissions",
        //     icon:<FaGraduationCap />
        // },
        {
            count:"56",
            label:"Universities",
            icon:<FaUniversity />
        },
        {
            count:"16",
            label:"Countries",
            icon:<BiWorld />
        },
    ]
  return (
    <section className='hidden md:block w-full bg-green-light/50'>
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
                <p className='text-green-400 text-[30px] font-medium leading-9'>Crore <span className="imperial-script ml-0  mr-2 text-[50px]">
            rupees
          </span>  earned through scholarship</p>
            </div>
            <div className='border-l flex items-center text-green-500 text-3xl border-green-500/50'>
            <TbNorthStar  className='-translate-x-4'/></div>
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
                <p className='text-green-400 text-[30px] font-medium leading-9'>Admissions Secured
Worldwide</p>
            </div>
            <div className='border-l flex items-center text-green-500 text-3xl border-green-500/50'>
            <TbNorthStar  className='-translate-x-4'/></div>
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
                
                {/* Animated progress bar */}
                {/* <div className='mt-4 h-1 bg-emerald-100 rounded-full overflow-hidden'>
                  <div 
                    className='h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transition-all duration-1000 ease-out'
                    style={{
                      width: index === 0 ? '85%' : '70%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div> */}
              </div>
            ))}

            {/* Additional highlight card */}
            {/* <div className='bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='text-center'>
                <p className='text-2xl font-bold mb-2'>100%</p>
                <p className='text-sm font-medium opacity-90'>Success Rate</p>
                <div className='mt-3 flex justify-center'>
                  <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                    <span className='text-lg'>🎓</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      
    </section>
  )
}

export default Overview
