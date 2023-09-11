import React from 'react';

const EndSection = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] px-10 lg:px-[80px]">
      <div className="flex flex-col justify-center md:items-start w-full py-8">
        <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
          Attraction Yogyakarta
        </h1>
        <a href="#" className="flex ">
          Explore places
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div className="flex w-full text-[12px] text-center lg:text-[16px] md:items-center md:text-start lg:pt-6">
        <p>
          Yogyakarta have unique characteristics, and cultural attraction such
          as workshop that based on handmade stuff or paintings also any other
          art work that based on traditional way
        </p>
      </div>
    </div>
  );
};
export default EndSection;
