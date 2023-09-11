import React from 'react';
import HeroSection from '../Hero/HeroSection';
import AboutSection from '../AuthCards/AboutSection';
import IndexCard from '../AuthCards/IndexCard';
import EndSection from '../AuthCards/EndSection';
import IndexCarousel from '../Carousel/IndexCarousel';
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'

const Attraction = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <IndexCard />
      <EndSection />
      <IndexCarousel />
      <div className='flex justify-center items-center'>
        <BotButton/>
      </div>
    </div>
  );
};
export default Attraction;
