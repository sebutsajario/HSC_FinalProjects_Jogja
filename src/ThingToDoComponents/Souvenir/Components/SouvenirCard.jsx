import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SouvenirButton from './SouvenirButton'
import { ReactComponent as Love } from '../../Museum/Assets/icon-love.svg'
import ButtonLove from '../../../Components/Atoms/ButtonLove'

const SouvenirCard = ({item, pic, title, desc, price}) => {

    const [toggle, setToggle] = useState(false)
    const clickLove = () => {
        setToggle(!toggle)
    }
    
  return (
    <div className='w-full p-4'>
    <div className='bg-white rounded-lg shadow-md'>
      <div className='relative'>
        <img className='object-cover w-full h-48' src={pic} alt='' /> {/* Use curly braces to interpolate the pic property */}
        <div
          onClick={clickLove}
          className='absolute bottom-0 right-0 bg-[#F1F8FF] w-[40px] h-[40px] opacity-90 rounded-br-md rounded-tl-md hover:bg-button hover:fill-white cursor-pointer'
        >
          <ButtonLove
            className={`p-2 ${
              toggle
                ? 'bg-button fill-white rounded-br-md rounded-tl-md hover:bg-white hover:fill-button'
                : 'fill-button hover:fill-white'
            }`}
          />
        </div>
      </div>
      <div className='p-4'>
        <h4 className='text-xl font-semibold text-blue-600'>{title}</h4>
        <p className='mb-2 leading-normal'>{price}</p>
        <Link to={`/things-to-do/souvenir-jogja/${item}`}>
          <SouvenirButton />
        </Link>
      </div>
    </div>
  </div>
);
};

export default SouvenirCard