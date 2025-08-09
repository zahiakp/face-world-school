import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Overview2 from './Overview2'
import Universities from './Universities'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Overview/>
      <Overview2/>
      <Universities/>
    </UserLayout>
  )
}

export default page
