import React from 'react'
import './arriving.css'

import airplane from '/Assets/practical-tips/airplane.png'
import car from '/Assets/practical-tips/car.png'
import motor from '/Assets/practical-tips/motor.png'

import { useNavigate } from 'react-router-dom'

const ArrivingSection = () => {

    const navigateToAirplaneJogjaPage = useNavigate()
    const navigateToCarJogjaPage = useNavigate()
    const navigateToMotorJogjaPage = useNavigate()

  return (
    <div className='py-10'>
        <div className='md:pr-10 md:flex md:justify-end'>
            <div className='py-10 px-5 text-end flex flex-col items-end md:w-2/3'>
                <h1 className='border-t-2 w-[250px]'>Transportation</h1>
                <p className='mt-5'>Jogja boasts a well-connected transportation network, make it easy to explore Jogja.</p>
            </div>
        </div>

        <div className='my-5 px-5 h-fit flex flex-col justify-center items-center gap-10 md:grid-cols-2 md:grid md:items-start md:px-[8rem] lg:px-5 lg:flex lg:flex-row'>
            <div className='p-5 bg-background1 rounded-lg w-full max-w-[340px] '>
                <img className='rounded-t-lg drop-shadow-lg' src={airplane} alt="airplane" />
                <div className='p-3 bg-white rounded-b-lg'>
                    <h3 className='text-[22px]'>Airplane</h3>
                    <p className='mt-5 lg:h-[244px] line-clamp-3 lg:line-clamp-none'>Jogja, is well-connected to major cities in Indonesia and some international destinations. Arriving by plane is one of the most convenient ways to reach this culturally rich city. Adisucipto International Airport is the primary airport serving Jogja.</p>
                    <div className='mt-5 flex justify-center'>
                        <button onClick={() => navigateToAirplaneJogjaPage('/practical-tips-page/airplane')}
                         className='py-2 px-5 rounded-lg text-white bg-button drop-shadow-lg'><p>Read More</p></button>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-background1 rounded-lg w-full max-w-[340px]'>
                <img className='rounded-t-lg drop-shadow-lg' src={motor} alt="motor" />
                <div className='p-3 bg-white rounded-b-lg'>
                    <h3 className='text-[22px]'>Motorcycle</h3>
                    <p className='mt-5 lg:h-[244px] line-clamp-3 lg:line-clamp-none'>Traveling to Yogyakarta (Jogja) by motorcycle can be an exciting and adventurous way to explore the region, especially for those who enjoy the freedom of two-wheeled travel.</p>
                    <div className='mt-5 flex justify-center'>
                        <button onClick={() => navigateToMotorJogjaPage('/practical-tips-page/motor')}
                        className='py-2 px-5 rounded-lg text-white bg-button drop-shadow-lg'><p>Read More</p></button>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-background1 rounded-lg w-full max-w-[340px]'>
                <img className='rounded-t-lg drop-shadow-lg' src={car} alt="car" />
                <div className='p-3 bg-white rounded-b-lg'>
                    <h3 className='text-[22px]'>Car</h3>
                    <p className='mt-5 lg:h-[244px] line-clamp-3 lg:line-clamp-none'>Jogja is well-connected to major cities in Java and Bali via a network of highways and roads.</p>
                    <div className='mt-5 flex justify-center'>
                        <button onClick={() => navigateToCarJogjaPage('/practical-tips-page/car')}
                        className='py-2 px-5 rounded-lg text-white bg-button drop-shadow-lg'><p>Read More</p></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArrivingSection
