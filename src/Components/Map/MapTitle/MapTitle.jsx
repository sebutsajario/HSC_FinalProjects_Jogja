import React from 'react'

const MapTitle = () => {
  return (
    <div className='flex flex-col gap-5 w-screen px-[20px] h-max
      lg:w-[80vw] lg:flex-row lg:items-end lg:px-0 lg:gap-10
    '>
        <h1 className='text-center pt-4 mt-10 border-t border-black
          sm:text-start sm:w-[18rem]
          lg:font-bold lg:text-[36px] lg:w-[30rem]
        '>Jogja Destination</h1>

        <p className='sm:text-[18px] font-Poppins
          lg:text-[16px]
        '>Would you like to know more about the destinations in Jogja? Click on the pins in the map to discover the best places to visit.</p>
    </div>
  )
}

export default MapTitle
