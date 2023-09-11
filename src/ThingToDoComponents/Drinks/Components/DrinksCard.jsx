import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonLove from '../../../Components/Atoms/ButtonLove'

import DrinksButton from './DrinksButton'
import { ReactComponent as Love } from '../../Museum/Assets/icon-love.svg'


const DrinksCard = ({item , src , title , description}) => {
    
    const [toggle, setToggle] = useState(false)
    const clickLove = () => {
        setToggle(!toggle)
    }
  return (
    <div className='w-full mb-5  lg:w-[25%] md:w-[30%] md:p-2'>
            <div className="relative mb-2 ">
                <img src={src} alt="" className='w-full h-60 rounded-lg object-cover' />
                <div className='flex justify-end h-0 relative bottom-12 xl:bottom-[52px]'>
                    <ButtonLove />
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
