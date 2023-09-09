import React from 'react'
import SavedTitle from '../Components/SavedPage/SavedTitle'
import SavedList from '../Components/SavedPage/SavedList'
import Footer from '../Components/Footer/Footer'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import BotButton from '../Components/Landing/Landing-bot/BotButton'

function SavedPageJogja() {
  return (
    <div>
      <ReuseNav />
      <SavedTitle />
      <SavedList />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default SavedPageJogja
