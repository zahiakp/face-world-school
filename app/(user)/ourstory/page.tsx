import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'
import Stages from '@/components/Home/Stages'
import { StickyScrollRevealDemo } from './Story'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "our story - FACE World Leadership School",
  description: "Discover the inspiring journey of FACE World Leadership School, a residential institution in Kerala dedicated to nurturing the next generation of civil servants and global leaders. Our story is rooted in a commitment to providing quality education, fostering leadership skills, and empowering underprivileged youth to make a positive impact on society.",  
}

function page() {
  return (
    <UserLayout
      title='Our Story'
      description='Explore the inspiring journey of FACE World Leadership School, a residential institution in Kerala dedicated'>
      <Hero/>
      <Stages/>
      <Content/>
      {/* <StickyScrollRevealDemo/> */}
    </UserLayout>
  )
}

export default page
