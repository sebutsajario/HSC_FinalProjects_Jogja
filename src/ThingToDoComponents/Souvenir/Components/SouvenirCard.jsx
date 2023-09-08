import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SouvenirButton from './SouvenirButton'
import { ReactComponent as Love } from '../../Museum/Assets/icon-love.svg'

const SouvenirCard = ({item, src, title, desc}) => {

    const [toggle, setToggle] = useState(false)
    const clickLove = () => {
        setToggle(!toggle)
    }
    
  return (
    <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-w-[10rem] '>

        <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <div className='relative'>
            <img className='object-cover w-full h-48' src="{src}" alt="souvenir_img" />
            <div onClick={{clickLove}} className='absolute bottom-0 right-0 bg-[#F1F8FF] w-[40px] h-[40px] opacity-90  rounded-br-md rounded-tl-md hover:bg-button hover:fill-white cursor-pointer'>
                <Love className={`p-2 ${toggle ?  'bg-button fill-white rounded-br-md rounded-tl-md hover:bg-white hover:fill-button'  : 'fill-button hover:fill-white '}`} />

            </div>
            </div>       
             <div className='p-4'>
            <h4 className='text-xl font-semibold text-bue-600'>
                {title}
            </h4>
            <p className='mb-2 leading-normal'>
                {desc}
            </p>
            <SouvenirButton />
            </div>
        </div>

       
        
    </div>


  )
}

export default SouvenirCard