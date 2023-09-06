import React from 'react'

// import clear_icon from '/Assets/Weather/clear.png'
// import cloud_icon from '/Assets/Weather/cloud.png'
// import drizzle_icon from '/Assets/Weather/drizzle.png'
import rain_icon from '/Assets/Weather/rain.png'

const Temperature = () => {

  return (
    <div className='flex justify-start items-center gap-5 '>
        <div>
            <img className='w-[4rem] weather-icon' src={rain_icon} alt="" />
        </div>
        <p className='font-Poppins font-semibold text-xl
          md:text-2xl 
        '>22&deg;C</p>
    </div>
  )
}

export default Temperature
