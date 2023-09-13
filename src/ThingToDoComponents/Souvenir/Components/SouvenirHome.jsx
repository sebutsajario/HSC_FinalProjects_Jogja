import React from 'react'
import Navbar from '../../../Components/Landing/Navbar/Navbar'

const SouvenirHome = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[url("/Assets/souvenir/souvenir-bg.png")] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center '>
          <Navbar />
          <div className="w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col">
            <h1 className="text-white text-5xl lg:text-[72px] italic text-center">
              Souvenir
            </h1>
            <p className="text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]">
                Buying souvenirs in Jogja offers a delightful opportunity to immerse yourself in Javanese culture through a diverse array of traditional handicrafts, textiles, and unique mementos reflecting the city's rich heritage.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-5 md:px-[40px] md:justify-between lg:px-[80px] xl:px-[140px]">
            <div className="flex flex-col justify-center md:items-start lg:w-1/2 py-8">
              <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
                Souvenirs
              </h1>
              <div className="flex ">
                Explore items
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full md:w-[400px] lg:w-[500px] xl:w-[600px]  text-[12px] lg:text-[16px] md:items-center md:text-start lg:pt-6">
              <p>
              A memorable souvenir from Jogja serves as a tangible reminder of the city's enchanting charm and cultural treasures, encapsulating cherished moments and experiences that linger in your heart long after your visit.
              </p>
            </div>
          </div>
    </div>
  )
}

export default SouvenirHome
