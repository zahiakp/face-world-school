import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Vision from './Content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Leadership - FACE World Leadership School",
  description: "",  
}

function page() {
  return (
    <UserLayout
      title='Leadership'
      description='FACE World Leadership School is dedicated to nurturing the next generation of civil servants and global'>
      <Hero/>
      <Vision/>
    </UserLayout>
  )
}

export default page
