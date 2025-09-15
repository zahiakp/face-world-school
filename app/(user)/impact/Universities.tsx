'use client'
import { TextAnimate } from '@/components/ui/text-animate'
import LogoStroke from '@/public/svg/LogoStrock'
import Image from 'next/image'
import React, { useState } from 'react'

function Universities() {
    const [active,setActive] = useState("1")
    const Tabs = [
        {value:"1",label:"Indian Universities",count:"23"},
        {value:"2",label:"Foreign Universities",count:"33"},
    ]
    const India = [
        "Aligarh muslim University.png",
        "Amity university.png",
        "Ashoka university.png",
        "Azim premji university.png",
        "Bangalore university.png",
        "Central university of Andhra pradesh.png",
        "Central university of Kerala.png",
        "Delhi university.png",
        "Dr . bhim rao ambedkar college, delhi university.png",
        "Hindu college, delhi university.png",
        "Indian institute of technology.png",
        "Jamia millia islamia university.png",
        "krea university.png",
        "Lakshmibhai, delhi university.png",
        "Maulana azad national urdu University.png",
        "Motilal nehru delhi college, delhi university.png",
        "National institute of technology, Rourkela.png",
        "Pondicherry central university.png",
        "Rajadhani college, delhi university.png",
        "Zakir hussain college, delhi university_.png",
    ]
    const Foreign = [
        "Aberystwyth university.jpg",
        "al qasmia university.png",
        "Auckland university.png",
        "Cukurova unversity.png",
        "Curtin university.png",
        "Cyprus university.png",
        "De montfort university.png",
        "Dominican university.jpg",
        "Duke university.png",
        "Durham university.png",
        "Eastern mediterranean university.png",
        "Edinburgh university.png",
        "Gaziantep university_.png",
        "Heriot Watt University.png",
        "Latvia university.png",
        "London school of economics.png",
        "Loras collage.png",
        "Manchester university.png",
        "Massey university.png",
        "Miami university.png",
        "Murdoch university.png",
        "newyork university.jpg",
        "Queen mary university.png",
        "Queen_s university belfast.png",
        "Samsun university.png",
        "the university of texas at dallas.png",
        "university birmingham.png",
        "University of Arizona.png",
        "University of Queensland.jpg",
        "University of Sharjah.png",
    ]
  return (
    <section className='w-full bg-white relative'>
        <main className='w-[85%] grid-cols-8 flex flex-col md:flex-row text-gray-800 gap-14 max-w-[1200px] mx-auto py-20 z-[2] relative'>
         <div className='w-full md:w-[33%]'><h6 className="text-4xl md:text-6xl text-green font-medium ">
                           <TextAnimate animation="blurInUp" by="word">
                            Academic Partners Around the World
                           </TextAnimate>
                         </h6>
                         <div className='space-y-3 mt-5 '>
                            {Tabs.map((tab:any)=>(
                                <p onClick={()=>setActive(tab.value)} className={`p-2 cursor-pointer px-5 border rounded-lg ${active == tab.value ? "border-green-500 bg-green-light/50" : "border-gray-200"} `} key={tab.value}><span className='text-medium text-sm p-1 px-2 rounded-2xl mr-2 bg-green-400 text-white'>{tab.count}</span>{tab.label} 
                                </p>
                            ))}
                         </div>
                         </div>
                         {active == '1' ? 
                         <div className='flex gap-5 flex-wrap items-center'>
                            {India.map((flag:any,index:number)=>(
                                <div key={index} className='p-3'><Image src={`/images/india/${flag}`} alt={flag} height={56} width={56} className='h-14 w-auto'/></div>
                            ))}
                            <p className='w-14 h-14 rounded-full bg-gray-100 font-medium border-4 border-gray-300 flex items-center justify-center'>+3</p>
                         </div> :
                         <div className='flex gap-5 flex-wrap'>
                            {Foreign.map((flag:any,index:number)=>(
                                <div key={index} className='p-3'><Image src={`/images/foreign/${flag}`} alt={flag} height={56} width={56} className='h-10 w-auto'/></div>
                            ))}
                                                        <p className='w-14 h-14 rounded-full bg-gray-100 font-medium border-4 border-gray-300 flex items-center justify-center'>+3</p>
                         </div>}
    </main>
    {/* <LogoStroke className="text-green blur-md z-0 w-[480px] h-auto absolute -bottom-40 left-[12%] rotate-12"/> */}
    </section>
  )
}

export default Universities
