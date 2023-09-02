import React from 'react'
import AbtMap from './AbtMap'
import AbtText from './AbtText'

const About = () => {
  return (
    <div className=' flex justify-center py-12 h-max bg-background1  w-screen
      md:px-10
      lg:px-[80px] lg:pt-10 lg:pb-10
    '>
      <div className='flex h-max bg-white rounded-xl flex-col
        sm:justify-center sm:items-center
        lg:px-[56px] lg:py-10 lg:flex-row lg:gap-10 lg:w-[85vw] lg:justify-between
      '>
        <AbtText />
        <AbtMap />
      </div>
    </div>
  )
}

export default About
