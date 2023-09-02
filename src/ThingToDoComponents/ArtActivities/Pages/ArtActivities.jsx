import React from 'react'

import ArtHero from '../Components/Art-activities/ArtHero'
import ArtCardContainer from '../Components/Art-data/ArtCardContainer'
import ArtCarousel from '../Components/Art-data/ArtCarousel'

const ArtActivities = () => {
  return (
    <div className='w-screen bg-white flex flex-col justify-between'>
      <ArtHero />
      <ArtCardContainer />
      <ArtCarousel />
    </div>
  )
}

export default ArtActivities
