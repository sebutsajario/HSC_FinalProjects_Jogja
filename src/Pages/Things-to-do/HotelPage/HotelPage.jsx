import React from 'react'

import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Hotel from '/src/ThingToDoComponents/Hotel/Pages/Hotel'
import Footer from '../../../Components/Footer/Footer'

const HotelPage = () => {
  return (
    <div>
      <ReuseNav />
      <Hotel />
      <Footer />
    </div>
  )
}

export default HotelPage
