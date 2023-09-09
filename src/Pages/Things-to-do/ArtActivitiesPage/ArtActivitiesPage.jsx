import React from 'react'

import ArtActivities from '../../../ThingToDoComponents/ArtActivities/Pages/ArtActivities'
import Footer from '/src/Components/Footer/Footer'
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'

const ArtActivitiesPage = () => {
  return (
    <div>
      <ArtActivities />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
      <Footer />
    </div>
  )
}

export default ArtActivitiesPage
