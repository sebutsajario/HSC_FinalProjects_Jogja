import React from 'react'
import Clear from '/Assets/Weather/clear.png'
import Rainy from '/src/assets/Weather/darkcloud.svg'
import RainDrop from '/src/assets/Weather/raindrop.svg'

import './weather.css'

const WeatherSection = () => {
  return (
    <div className="w-screen p-5 flex flex-col h-fit justify-center items-center rounded-l-xl lg:flex-row lg:items-start ">
      <div className='h-fit flex
        lg:w-[50vw] lg:ml-[2rem] lg:mr-[1rem]
      '>
          <div className='mt-10
            lg:flex lg:gap-10 lg:flex-col lg:justify-start
          '>
              <h1 className='text-font2 w-fit border-t border-black pt-4
                sm:w-[17rem]
                lg:font-bold lg:text-[36px] lg:w-[20rem] 
              ' >
                  Weather in Jogja
              </h1>
              <p className='mt-2 text-font2 text-center font-Poppins
                sm:text-justify text-[16px]
                lg:mt-0 lg:h-fit
              '>
                Yogyakarta's weather is characterized by a tropical climate with a wet season from <b>October</b> to <b>March</b> featuring frequent rainfall and a dry season from <b>April</b> to <b>September</b> marked by warmer temperatures and lower humidity.
              </p>
          </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center md:flex-row md:gap-5'>
        <div className='bg-button2 flex flex-col rounded-xl p-5 justify-center items-center h-[380px] w-[240px] drop-shadow-lg '>
          <img className='sun' src={Clear} alt="" />
          <h2>Hot Weather</h2>
          <p className='text-[12px] text-center'>The average temperature in Yogyakarta ranges from around 24°C (75°F) to 32°C (90°F).</p>
        </div>
        <div className='bg-button2 flex flex-col rounded-xl p-5 justify-center items-center h-[380px] w-[240px] drop-shadow-lg mt-5 md:mt-0 '>
          <div className='flex'>
            <img className='cloud' src={Rainy} alt="" />
            <img className='rain' src={RainDrop} alt="" />
          </div>
          <h2 className='mt-5 '>Rainy Weather</h2>
          <p className='text-[12px] text-center'>Rainy weather in Yogyakarta is characterized by frequent showers and increased humidity, often accompanied by cooler temperatures.</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherSection
