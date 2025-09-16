import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FACE Study Cirlce - FACE World Leadership School",
  description: "",  
}

function page() {
  return (
    <UserLayout
      title='FACE Study Cirlce'
      description='FACE World Leadership School is dedicated to nurturing the next generation of civil servants and global'>
      <Hero/>
    </UserLayout>
  )
}

export default page
