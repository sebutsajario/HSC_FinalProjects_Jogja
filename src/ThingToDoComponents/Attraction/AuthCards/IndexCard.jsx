import React from 'react';
import attractionData from '/src/Database/attractionData.json';
import './CardContainer.css';

// untuk card
import CardSection from './CardsSection';
const IndexCard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-background1 px-5 mt-5">
      <div id="section_card" className="container3 cursor-pointer">
        {attractionData.map((card) => (
          <CardSection
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-8">
        <button
          type="button"
          className="bg-button font-semibold py-3 px-5 rounded-lg  hover:brightness-110 hover:text-button drop-shadow-lg"
        >
          <p className="text-white">Load More</p>
        </button>
      </div>
    </div>
  );
};
export default IndexCard;
