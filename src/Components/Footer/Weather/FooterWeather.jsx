import React from 'react'
import Temperature from './Temperature'
import JogjaTime from './JogjaTime'


function FooterWeather() {
  return (
    <div className=' mt-4
      sm:flex sm:justify-end
      lg:mt-[-10rem]
    '>
      <div className='w-screen p-7 h-[22rem] bg-[#2ebf77]
        sm:w-[25rem] sm:rounded-l-2xl 
        md:w-[40rem] md:pl-[5rem] 
        lg:w-[55rem] lg:pr-0
      '>
        <Temperature />
        <JogjaTime />
        <div className='mt-3
          md:mt-0 md:relative md:bottom-[28px]
        '>
            <p className='font-Poppins font-medium text-lg
              md:text-xl 
            '>Yogyakarta Region: cloudy</p>
        </div>
      </div>
    </div>
  )
}

export default FooterWeather
