import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Programs - FACE World Leadership School",
  description: "",  
}

function page() {
  return (
    <UserLayout
      title='Programs'
      description=''>
      <Hero/>
    </UserLayout>
  )
}

export default page
