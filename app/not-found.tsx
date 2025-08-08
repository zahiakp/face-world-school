import FuzzyText from '@/components/ui/FuzzyText/FuzzyText'
import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col relative items-center justify-center w-full h-screen'>
      <FuzzyText 
      color='#0D2E2C'
  baseIntensity={0.2} 
  hoverIntensity={.5}
  enableHover={true}
  fontSize={150}
>
  404
</FuzzyText>
<p className='mt-5 font-medium'>page not found</p>
    </div>
  )
}

export default NotFound
