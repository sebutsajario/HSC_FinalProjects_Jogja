import React from 'react'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Museum from '/src/ThingToDoComponents/Museum/Pages/Museum'
import Footer from '../../../Components/Footer/Footer'

const MuseumPage = () => {
  return (
    <div>
      {/* <ReuseNav /> */}
      <Museum />
      <Footer />
    </div>
  )
}

export default MuseumPage
