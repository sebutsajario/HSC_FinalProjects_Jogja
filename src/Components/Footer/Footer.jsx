import React from 'react'
import FooterWeather from './Weather/FooterWeather'
import FooterSocials from './Socials/FooterSocials'

const Footer = () => {
  return (
    <div className='h-fit w-screen mx-auto bg-background1 
      lg:mt-[10rem] lg:pt-10 lg:h-[450px]
    '>
      <FooterWeather />
      <FooterSocials />
    </div>
  )
}

export default Footer
