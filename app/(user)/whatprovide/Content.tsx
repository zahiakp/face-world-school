import React from 'react'
import { FaGraduationCap, FaLanguage, FaUniversity } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'
import { IoFitnessSharp } from 'react-icons/io5'
import { PiExam, PiExamFill } from 'react-icons/pi'

function Content() {
    const Services = [
    { 
      icon:<PiExamFill />,
      image:"6.jpg",
      tiitle:"Competitive Examinations Coaching",
      description:"At FACE, students receive focused coaching for a variety of competitive examinations, including civil services, university entrances, and scholarship tests. Our structured mentorship, regular mock tests, and expert faculty ensure that every student builds a strong academic foundation and learns the strategies required to excel under pressure."
    },
    {
      icon:<FaGraduationCap />,
      image:"7.jpg",
      tiitle:"Higher Secondary Education in Humanities and Science",
      description:"We provide Kerala State Higher Secondary Board education in both Humanities and Science streams, delivered with high academic standards. Our curriculum is integrated with real-world applications, encouraging critical thinking and a deep understanding of core subjects, while ensuring students meet and exceed board expectations."
    },
    {
      icon:<FaUniversity />,
      image:"6.jpg",
      tiitle:"Global University Preparation",
      description:"FACE prepares students to apply to leading universities in India and abroad. With personalized guidance in portfolio building, Statement of Purpose (SOP) writing, and scholarship applications, our students are consistently admitted to top global institutions with significant scholarships, including offers worth up to ₹2 crore."
    },
    {
      icon:<PiExam />,
      image:"8.jpg",
      tiitle:"Moral Education in Practice",
      description:"Moral education is at the heart of FACE’s vision. Through daily reflections, community living, and service-oriented tasks, students are nurtured to become compassionate, ethical, and responsible citizens. It is not merely taught—it is practiced and lived in everyday campus life."
    },
    {
      icon:<FaLanguage />,
      image:"9.jpg",
      tiitle:"English Language Proficiency Course",
      description:"Strong communication skills are essential for success in the modern world. Our comprehensive English language program focuses on spoken fluency, academic writing, public speaking, and confidence building, empowering students to express themselves clearly and convincingly in any setting."
    },
    {
      icon:<IoFitnessSharp />,
      image:"10.jpg",
      tiitle:"Physical Fitness and Martial Arts Training",
      description:"We believe in holistic development. Students engage in regular fitness routines, sports, and certified martial arts training to build physical strength, discipline, and mental resilience. Inter-house tournaments and fitness challenges keep them active and competitive."
    },
    {
      icon:<GrTechnology />,
      image:"11.jpg",
      tiitle:"Technology and AI",
      description:"FACE introduces students to the future of innovation through hands-on learning in Artificial Intelligence, coding, and digital literacy. Through workshops and live projects, students gain essential 21st-century skills and become ready to lead in tech-driven environments."
    },
  ]
  return (
    <section className='w-full bg-white text-gray-800'>
        <main className='w-[90%] max-w-[1200px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Services.map((item:any,index:number)=>(
                <div key={index} className='overflow-hidden group/card relative rounded-xl border border-gray-200'>
                    <div className='h-60 w-full relative'>
                        <div className='absolute -bottom-5 right-10 w-12 h-12 rounded-lg flex text-2xl items-center justify-center bg-green-light text-green'>{item.icon}</div>
                        <img src={`/images/${item.image}`} alt="" className='w-full h-full object-cover'/>
                        <div className='h-1 w-full flex'>
                            {/* <div className='bg-green w-full h-full'></div> */}
                            <div className='bg-green-light group-hover/card:w-[5%] duration-200 w-[33%] h-full'></div>
                            <div className='bg-green group-hover/card:w-[15%] duration-200 w-[33%] h-full'></div>
                            <div className='bg-green-light group-hover/card:w-[80%] duration-200 w-[33%] h-full'></div>
                        </div>
                        </div>
                    <div className='p-10'>
                    <h6 className='text-green text-xl font-medium mb-2'>{item.tiitle}</h6>
                    <p className='text-sm'>{item.description}</p>
                    </div>
                    
                </div>
            ))}
        </main>
      
    </section>
  )
}

export default Content
