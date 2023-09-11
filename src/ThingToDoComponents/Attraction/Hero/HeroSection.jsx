import React from 'react';
import Navbar from '/src/Components/Landing/Navbar/Navbar';
const HeroSection = () => {
  return (
    <div className='bg-[url("/Assets/attraction/background-attraction.png")] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center '>
      <Navbar />
      <div className="w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col">
        <h1 className="text-white text-5xl lg:text-[72px] italic text-center">
          Attraction Yogyakarta
        </h1>
        <p className="text-white text-[12px] xl:text-[1rem] text-center mt-5 lg:w-[50vw] ">
        Experience the awe-inspiring allure of Yogyakarta, where ancient temples, vibrant arts, and genuine hospitality converge to create an unforgettable adventure for foreign explorers.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
