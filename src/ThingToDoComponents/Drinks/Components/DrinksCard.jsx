import React , { useState } from 'react'
import { Link } from 'react-router-dom'

import DrinksButton from './DrinksButton'
import { ReactComponent as Love } from '../../Museum/Assets/icon-love.svg'


const DrinksCard = ({item , src , title , description}) => {
    
    const [toggle, setToggle] = useState(false)
    const clickLove = () => {
        setToggle(!toggle)
    }
  return (
    <div className='w-full mb-5  lg:w-[25%] md:w-[30%] md:p-2'>
            <div className="relative">
                <img src={src} alt="" className='w-full h-60 rounded-lg mb-2 object-cover' />
                <div onClick={clickLove} className='absolute bottom-0 right-0 bg-[#F1F8FF] w-[40px] h-[40px] opacity-90  rounded-br-md rounded-tl-md hover:bg-button hover:fill-white cursor-pointer'>
                    <Love  className={`p-2 ${toggle ?  'bg-button fill-white rounded-br-md rounded-tl-md hover:bg-white hover:fill-button'  : 'fill-button hover:fill-white '}`}/>
                </div>
            </div>
            <div className='h-[90px]'>
                <h3>{title}</h3>
                <p className='text-[14px] line-clamp-3'>{description}</p>
            </div>
            <Link to={`/things-to-do/drinks-jogja/${item}`}> 
                <DrinksButton />
            </Link>
    </div>
  )
}

export default DrinksCard
