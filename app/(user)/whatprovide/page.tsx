import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "What we provide - FACE World Leadership School",
  description: "Explore the comprehensive offerings of FACE School, including innovative programs, state-of-the-art facilities, and a commitment to holistic education. Our curriculum is designed to empower students with the skills and knowledge needed for success in competitive exams and leadership roles.",  
}

function page() {
  return (
    <UserLayout
      title='What We Provide'
      description='Explore the comprehensive offerings of FACE School, including innovative programs, state-of-the-art facilities, and a commitment to holistic education. Our curriculum is designed to empower students with the skills and knowledge needed for success in competitive exams and leadership roles.'>
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
