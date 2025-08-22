import UserLayout from '@/components/layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'
import SEO from '@/components/common/SEO'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Core Pillars - FACE World Leadership School",
  description: "FACE World Leadership School, a residential institution in Kerala, is dedicated to nurturing the next generation of civil servants and global leaders from diverse and underprivileged backgrounds. We offer a holistic educational model with fully funded scholarships , providing intensive coaching for competitive exams like Civil Services, CUET, JEE, and NDA. Our unique three-stage journey guides students from our campus in Kozhikode to top national and international universities and finally to our FACE IAS Academy in Trivandrum for dedicated civil service preparation. Rooted in ethical leadership and social impact, our curriculum includes AI and technology training, global diplomacy, and social entrepreneurship to create changemakers for a better world",  
}

function page() {
  return (
    <UserLayout
      title='Our Core Pillars'
      description='Discover the comprehensive offerings of FACE School, including innovative programs, state-of-the-art'>
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
