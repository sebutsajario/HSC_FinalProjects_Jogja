import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
// untuk card

const CarouselCard = ({ imageSrc, title }) => {
  return (
    // pecah card disini
    <div className="flex justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
        <div className="border-2 border-black rounded-md ml-5 mr-5 mt-6">
          <img src={imageSrc} alt={title} className="h-[300px] w-[300px]" />
        </div>
        <div className="flex justify-end mr-5">
          <button className="mt-[-56px] p-2 sm:p-3 flex justify-center items-center rounded-tl-md rounded-br-md bg-button2 border-r-2 border-b-2 border-black opacity-90 hover:opacity-100">
            <IoHeartOutline
              name="heart-outline"
              className="bx bx-heart text-[24px] text-button"
            ></IoHeartOutline>
          </button>
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
