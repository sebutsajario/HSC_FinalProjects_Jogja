import React from 'react'
import Museum from '/src/ThingToDoComponents/Museum/Pages/Museum'
import Footer from '../../../Components/Footer/Footer'
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'

const MuseumPage = () => {
  return (
    <div>
      <Museum />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default MuseumPage
