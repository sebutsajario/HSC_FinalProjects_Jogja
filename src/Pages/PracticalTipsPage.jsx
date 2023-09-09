import React from 'react'
import Footer from '../Components/Footer/Footer'
import BotButton from '../Components/Landing/Landing-bot/BotButton'

// from PracticalTipsPage - Component

import PracticalMainPage from '../Components/PracticalTipsPage/PracticalMainPage'
import CultureJogja from '../Components/PracticalTipsPage/CultureJogja'

import ArrivingSection from '../Components/PracticalTipsPage/ArrivingSection'
import WeatherSection from '../Components/PracticalTipsPage/WeatherSection'
import NeedSection from '../Components/PracticalTipsPage/NeedSection'

function PracticalTipsPage() {
  return (
    <div>
      <PracticalMainPage />
      <CultureJogja />
      <ArrivingSection />
      <WeatherSection />
      <NeedSection />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default PracticalTipsPage

