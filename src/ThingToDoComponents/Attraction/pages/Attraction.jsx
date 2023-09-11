import React from 'react';
import HeroSection from '../Hero/HeroSection';
import AboutSection from '../AuthCards/AboutSection';
import IndexCard from '../AuthCards/IndexCard';
import EndSection from '../AuthCards/EndSection';
import IndexCarousel from '../Carousel/IndexCarousel';

const Attraction = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <IndexCard />
      <EndSection />
      <IndexCarousel />
    </div>
  );
};
export default Attraction;
