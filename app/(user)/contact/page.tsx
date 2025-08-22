import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import ContactInfoSection from './Content'

function page() {
  return (
    <UserLayout
      title='Contact Us'
      description='Get in touch with FACE World Leadership School for inquiries, admissions, and more. We are here to assist you on your educational journey.'>
      <Hero/>
      <ContactInfoSection/>
    </UserLayout>
  )
}

export default page
