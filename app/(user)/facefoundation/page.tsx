import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Vision from './Vision'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Face Foundation - FACE World Leadership School",
  description: "FACE Foundation is dedicated to empowering underprivileged youth through education and leadership development. Our mission is to create a transformative impact by providing access to quality education, mentorship, and resources that enable students to become future leaders. We believe in fostering a culture of inclusivity, innovation, and social responsibility, ensuring that every student has the opportunity to thrive and contribute positively to society.",  
}

function page() {
  return (
    <UserLayout
      title='Face Foundation'
      description='FACE Foundation is dedicated to empowering underprivileged youth through education and leadership development. Our mission is to create a transformative impact by providing access to quality education, mentorship, and resources that enable students to become future leaders. We believe in fostering a culture of inclusivity, innovation, and social responsibility, ensuring that every student has the opportunity to thrive and contribute positively to society.'>
      <Hero/>
      <Vision/>
    </UserLayout>
  )
}

export default page
