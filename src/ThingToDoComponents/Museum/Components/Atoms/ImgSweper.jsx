import React from 'react'
import { SwiperSlide } from 'swiper/react';

function ImgSweper({image}) {
  return (
        <>
            <img src={`/src/assets/museum/${image}.jpg`} className='w-full lg:min-h-[96vh] object-cover rounded-2xl drop-shadow-xl' alt="" />
        </>
     
    
  )
}

export default ImgSweper