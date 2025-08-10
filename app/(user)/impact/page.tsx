import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Overview2 from './Overview2'
import Universities from './Universities'
import Batches from './Batches'
import Countries from './Countries'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Overview/>
      <Overview2/>
      <Universities/>
      <Countries/>
      <Batches/>
    </UserLayout>
  )
}

export default page
