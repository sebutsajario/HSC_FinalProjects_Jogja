import React from 'react'
import { Link } from 'react-router-dom';

import ButtonLove from '../../../../Components/Atoms/ButtonLove';

const ArtCard = ({item, pic, name, description }) => {

    return (
    <div className='w-[280px] sm:w-[240px] md:w-[233px] lg:w-[310px] xl:w-[400px] mb-[20px] lg:mb-[30px] bg-white px-3 py-2 flex flex-col  rounded-lg justify-center break-inside-avoid'>
        <div className='h-fit rounded-lg mt-1 border overflow-hidden'>
            <Link to={`/things-to-do/art-activities-jogja/${item}`}>
                <img className='hover:scale-105 duration-300' src={pic} alt="image-card" />
            </Link>
            <div className='flex justify-end h-0 relative bottom-12 xl:bottom-[52px]'>
                <ButtonLove />
            </div>
        </div>
        <div className='flex flex-col pl-2 pt-2'>
            <p className='font-semibold font-Poppins text-[20px]'>
                {name}
            </p>
            <p className='mt-2 text-justify text-[12px] line-clamp-3'>
                {description}
            </p>
        </div>
    </div>
    );
}
export default ArtCard
