'use client'
import UserLayout from '@/components/layout/UserLayout'
import { notFound, useParams } from 'next/navigation'
import React from 'react'
import Hero from './Hero'
import { Leaders } from '../Content'
import Content from './Content'

function page() {
  const params = useParams()
  const {slug} = params
  const data = Leaders.filter((item:any)=>item.slug==slug)[0]
  if(!data){
    return notFound()
  }
    
  return (
    <UserLayout title={data.name} description=''>
      <Hero name={data.name} position={data.designation}/>
      <Content data={data}/>

    </UserLayout>
  )
}

export default page