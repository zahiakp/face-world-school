import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Vision from './Vision'
import Mission from './Mission'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Vision/>
      <Mission/>
    </UserLayout>
  )
}

export default page
