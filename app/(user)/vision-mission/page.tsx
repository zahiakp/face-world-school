import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Vision from './Vision'
import Mission from './Mission'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vision & Mission - FACE World Leadership School",
  description: "",  
}
function page() {
  return (
    <UserLayout
      title='Vision & Mission'
      description='FACE World Leadership School is dedicated to nurturing the next generation of civil servants and global leaders through a commitment to excellence in education, leadership development, and social responsibility.'>
      <Hero/>
      <Vision/>
      <Mission/>
    </UserLayout>
  )
}

export default page
