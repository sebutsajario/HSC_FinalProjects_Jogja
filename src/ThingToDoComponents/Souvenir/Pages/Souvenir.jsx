import React from 'react'
import SouvenirContainer from '../Components/SouvenirContainer'
import SouvenirHome from '../Components/SouvenirHome';
import Footer from '../../../Components/Footer/Footer';
import BotButton from '../../../Components/Landing/Landing-bot/BotButton';

const Souvenir = () => {
  return (
    <div className='flex flex-col justify-center'>
      <SouvenirHome />
      <SouvenirContainer />
        <div className='flex justify-center items-center'>
          <BotButton />
        </div>
      <Footer />
    </div>
  )
}

export default Souvenir