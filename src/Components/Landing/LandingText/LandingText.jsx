import React from 'react'

const LandingText = () => {
  return (
    <div className=' px-5
      sm:px-[40px]
      md:w-[90vw]
      lg:w-[75vw] lg:flex lg:justify-center lg:items-center lg:flex-col
    '>
        <h1 className='text-white text-center font-bold text-4xl
          md:text-[44px]
          lg:text-[70px]
        '>
            Welcome to Jogja
        </h1>

        <p className='text-center text-white mt-10
          sm:text-lg
          lg:w-[30rem]
        '>
            Jogja, where time dances to the rhythm of ancient temples, vibrant artistry, and the warm embrace of a culture that whispers tales of tradition in every corner.
        </p>
    </div>
  )
}

export default LandingText
