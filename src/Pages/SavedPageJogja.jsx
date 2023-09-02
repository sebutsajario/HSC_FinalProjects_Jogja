import React from 'react'
import SavedTitle from '../Components/SavedPage/SavedTitle'
import SavedList from '../Components/SavedPage/SavedList'
import Footer from '../Components/Footer/Footer'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'

function SavedPageJogja() {
  return (
    <div>
      <ReuseNav />
      <SavedTitle />
      <SavedList />
      <Footer />
    </div>
  )
}

export default SavedPageJogja
