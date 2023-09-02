import React from 'react'
import TngTitle from './TngTitle'
import ThingsCarousel from './Carousel/ThingsCarousel'

const Things = () => {
  return (
    <div>
      <div id='thing-to-do' className='flex flex-col my-0 px-[20px] h-max mt-5
      lg:justify-center lg:items-center
      '>
      <TngTitle />
      </div>
      <ThingsCarousel />
    </div>
  )
}

export default Things
