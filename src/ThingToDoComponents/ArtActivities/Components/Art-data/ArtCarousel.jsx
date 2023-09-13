import React from 'react'
import ArtCarouselCard from '../Art-activities/ArtCarouselCard';
import artActivitiesData from '/src/Database/artActivitiesData.json';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import './artCarousel.css'

const ArtCarousel = () => {
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
