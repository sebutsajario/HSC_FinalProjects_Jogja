import React from 'react'
import ReuseNav from '../Components/ReuseableNav/ReuseNav'
import Footer from '../Components/Footer/Footer'

// from PracticalTipsPage - Component

import FAQSection from '../Components/PracticalTipsPage/FAQSection'
import ArrivingSection from '../Components/PracticalTipsPage/ArrivingSection'
import WeatherSection from '../Components/PracticalTipsPage/WeatherSection'
import NeedSection from '../Components/PracticalTipsPage/NeedSection'

function PracticalTipsPage() {
  return (
    <div>
      <ReuseNav />
      <FAQSection />
      {/* <ArrivingSection /> */}
      <WeatherSection />
      <NeedSection />
      <Footer />
    </div>
  )
}

export default PracticalTipsPage

