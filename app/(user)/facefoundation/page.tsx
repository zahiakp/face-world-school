import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Vision from './Vision'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Vision/>
    </UserLayout>
  )
}

export default page
