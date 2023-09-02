import React from 'react'

import Navbar from './Navbar/Navbar'
import LandingText from './LandingText/LandingText'
import BotButton from './Landing-bot/BotButton'
import BgVideo from './BgVideo/BgVideo'


const Landing = () => {
  return (
      <div id="landing" className='h-screen w-screen flex flex-col items-center'>
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
          <LandingText />
        </div>
        <BotButton />
        <BgVideo /> 
      </div>
  )
}

export default Landing
