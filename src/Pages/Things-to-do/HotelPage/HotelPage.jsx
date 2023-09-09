import React from 'react'

import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Hotel from '/src/ThingToDoComponents/Hotel/Pages/Hotel'
import Footer from '../../../Components/Footer/Footer'
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'

const HotelPage = () => {
  return (
    <div>
      <ReuseNav />
      <Hotel />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default HotelPage
