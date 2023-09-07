import React from 'react'
import ArtCarouselCard from '../Art-activities/ArtCarouselCard';
import artActivitiesData from '/src/Database/artActivitiesData.json';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css';
import './artCarousel.css'

const ArtCarousel = () => {
    return (
        <div className='mt-5 flex justify-center items-center bg-background1 pt-7'>
        <Swiper
          
          className='carousel3'
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          freeMode={true}
        >
          {artActivitiesData.map(activity => (
            <SwiperSlide key={activity.id}>
              <ArtCarouselCard
              imageSrc={activity.pic}
              title={activity.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )
    }
    

export default ArtCarousel
