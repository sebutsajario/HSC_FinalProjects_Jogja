import React from 'react'

const ArtCarouselCard = ({ imageSrc, title, description }) => {
    return (
        <div className="w-[280px] h-[420px] pt-5  flex flex-col items-center rounded-xl  shadow-lg font-poppins">
          <div className='w-[200px] h-[300px] overflow-hidden rounded-lg '>
            <img src={imageSrc} className="h-[300px]" alt="imagecard" />
          </div>
          <div className='relative bottom-[40px] left-[80px] sm:bottom-[48px] sm:left-[76px]'>
            <button className='p-2 sm:p-3 flex justify-center items-center bg-button2 rounded-tl-lg rounded-br-lg'>
              <i className='bx bx-heart text-[24px] text-button'></i>
            </button>
          </div>
          <div className="pl-3 py-4 w-[200px] relative bottom-[40px]">
            <p className="font-semibold mb-2 ">{title}</p>
          </div>
        </div>
      );
    }

export default ArtCarouselCard
