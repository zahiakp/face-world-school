'use client'
import UserLayout from '@/components/layout/UserLayout'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const params = useParams()
    const {slug} = params
  return (
    <UserLayout title='' description=''>
      {slug}
    </UserLayout>
  )
}

export default page
