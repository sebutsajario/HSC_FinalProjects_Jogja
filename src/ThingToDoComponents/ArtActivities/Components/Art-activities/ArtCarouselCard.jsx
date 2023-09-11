import React from 'react'

import ButtonLove from '../../../../Components/Atoms/ButtonLove';

const ArtCarouselCard = ({ imageSrc, title}) => {
    return (
        <div className="w-[280px] h-[420px] pt-5  flex flex-col items-center rounded-xl  shadow-lg font-poppins cursor-grab">
          <div className='w-[200px] h-[250px] rounded-lg '>
            <img src={imageSrc} className="h-[250px] object-cover w-full rounded-lg" alt="imagecard" />
            <div className='flex justify-end relative bottom-12 xl:bottom-16'>
              <ButtonLove />
            </div>
          </div>
          <div className="pl-3 py-4 w-[200px]">
            <p className="font-semibold mb-2 ">{title}</p>
          </div>
        </div>
      );
    }

export default ArtCarouselCard
