import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: "Academic Council - FACE World Leadership School",
  description: "",  
}

function page() {
  return (
    <UserLayout
      title='Academic Council'
      description='FACE World Leadership School is dedicated to nurturing the next generation of civil servants and global'>
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
