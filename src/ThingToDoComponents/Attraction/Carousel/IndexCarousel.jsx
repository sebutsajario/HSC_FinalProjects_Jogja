import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import attractionData from '/src/Database/attractionData.json';
import CarouselCard from './Carousel';
import './Carousel.css';

const IndexCarousel = () => {
  return (
    <section className="mt-5 flex justify-center items-center bg-background1 pt-7">
      <div className="m-5">
        <Carousel
          className="carousel3"
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {attractionData.map((card) => (
            <div key={card.id}>
              <CarouselCard imageSrc={card.imageSrc} title={card.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default IndexCarousel;
