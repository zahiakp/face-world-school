import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Overview2 from './Overview2'
import Universities from './Universities'
import Batches from './Batches'
import Countries from './Countries'
import { TimelineDemo } from './Timeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Impact - FACE World Leadership School",
  description: "FACE World Leadership School is committed to making a significant impact on the lives of underprivileged youth through our comprehensive educational programs. Our initiatives focus on providing access to quality education, mentorship, and resources that empower students to become future leaders. We aim to create a transformative impact by fostering a culture of inclusivity, innovation, and social responsibility, ensuring that every student has the opportunity to thrive and contribute positively to society.",  
}

function page() {
  return (
    <UserLayout
      title='Our Impact'
      description='FACE World Leadership School is committed to making a significant impact on the lives of under'>
      <Hero/>
      <Overview/>
      <Overview2/>
      <Universities/>
      <Countries/>
      <TimelineDemo/>
      {/* <Batches/> */}
    </UserLayout>
  )
}

export default page
