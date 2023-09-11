import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

import ButtonLove from '../../../Components/Atoms/ButtonLove';
// untuk card

const CarouselCard = ({ imageSrc, title }) => {
  return (
    // pecah card disini
    <div className="flex justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
        <div className="border-2 border-black rounded-md ml-5 mr-5 mt-6">
          <img src={imageSrc} alt={title} className="h-[280px] w-full object-cover object-center" />
          <div className='flex justify-end h-0 relative bottom-12 xl:bottom-[52px]'>
              <ButtonLove />
          </div>
        </div>

        <div className="py-4 px-8">
          <h3>
            <p className="block mb-3 font-semibold lg:text-xl sm:text-sm">
              {title}
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
