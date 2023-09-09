import React from 'react'

import Navbar from '/src/Components/Landing/Navbar/Navbar'

const PracticalMainPage = () => {
  return (
    <div className='w-screen h-screen bg-[url("/Assets/practical-tips/background-practicaltips-page.png")] bg-cover bg-center bg-no-repeat flex flex-col items-center'>
        <Navbar />
        <div className='w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col'>
            <h1 className='text-white text-5xl lg:text-[72px] italic text-center'>Practical Tips</h1>
            <p className='text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]'>Traveling to Yogyakarta, often referred to as Jogja, is an exciting experience filled with rich cultural heritage and natural beauty. To make your journey to Jogja as smooth and enjoyable as possible, here are some practical tips.</p>
        </div>
    </div>
  )
}

export default PracticalMainPage

