import React from 'react'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Footer from '/src/Components/Footer/Footer'
import ArtDetailComponent from '../Components/Art-detail/ArtDetailComponent'

const DetailArt = () => {
  return (
    <div className="flex flex-col min-h-screen pb-5">
      <ReuseNav />
      <ArtDetailComponent />
    </div>
  )
}

export default DetailArt
