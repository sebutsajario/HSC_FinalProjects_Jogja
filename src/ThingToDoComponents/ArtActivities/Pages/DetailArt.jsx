import React from 'react'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Footer from '/src/Components/Footer/Footer'
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'
import ArtDetailComponent from '../Components/Art-detail/ArtDetailComponent'

const DetailArt = () => {
  return (
    <div className="flex flex-col min-h-screen pb-5">
      <ReuseNav />
      <ArtDetailComponent />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default DetailArt
