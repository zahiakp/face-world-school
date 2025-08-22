import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Program Overview - FACE World Leadership School",
  description: "Explore the comprehensive program overview of FACE World Leadership School, designed to empower students with the skills and knowledge needed for success in competitive exams and leadership roles. Our curriculum is tailored to provide a holistic education, fostering critical thinking, innovation, and social responsibility among students.",  
}

function page() {
  return (
    <UserLayout
      title='Program Overview'
      description='Explore the comprehensive program overview of FACE World Leadership School, designed to empower students with the skills and knowledge needed for success in competitive exams and leadership roles. Our curriculum is tailored to provide a holistic education, fostering critical thinking, innovation, and social responsibility among students.'>
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
