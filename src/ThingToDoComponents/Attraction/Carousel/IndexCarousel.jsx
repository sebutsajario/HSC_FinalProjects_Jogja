import React from 'react'
import AttractionCarouselCard from './Carousel';
import attractionData from '/src/Database/attractionData.json';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import './Carousel.css'

const IndexCarousel = () => {
    return (
      <div className='mt-5 flex justify-center items-center bg-background1 py-7 md:px-20 lg:px-[50px] xl:px-16'>
      <Swiper
        
        className='carousel3'
        spaceBetween={10}
        loop={true}
        slidesPerView={1}
        freeMode={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay , Pagination]}
        breakpoints={{
          500: {
          slidesPerView: 1,
          spaceBetween: 40,
          },
          768: {
          slidesPerView: 2,
          spaceBetween: 10,
          },
          1024: {
          slidesPerView: 3,
          spaceBetween: 10,
          }, 
          1280: {
          slidesPerView: 4,
          spaceBetween: 10,
          }, 
      
      }}
      >
        {attractionData.map(activity => (
          <SwiperSlide key={activity.id}>
            <AttractionCarouselCard
            imageSrc={activity.pic}
            title={activity.name} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
    )
};

export default IndexCarousel;
