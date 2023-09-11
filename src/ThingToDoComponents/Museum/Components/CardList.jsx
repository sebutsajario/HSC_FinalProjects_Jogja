import React, { useState } from 'react'
import { ReactComponent as Love } from '../Assets/icon-love.svg'
import ButtonLove from '../../../Components/Atoms/ButtonLove'

import { Link } from 'react-router-dom'
import Button from './Atoms/Button'


function CardList({...props}) {

    const {title, src, address, item} = props
    const [toggle, setToggle] = useState(false)

    const clickLove = () => {
        setToggle(!toggle)
    }
  return (
    <div className='w-full mb-5 lg:w-[25%] md:w-[30%] md:p-2'>
            <div className="relative mb-2">
                <img src={`/Assets/museum/${src ?? 'default'}.jpg`} alt="" className='w-full h-60 rounded-lg object-cover' />
                <div className='flex justify-end relative bottom-12 xl:bottom-[52px] h-0'>
                    <ButtonLove />
                </div>
                {/* <div onClick={clickLove} className='absolute bottom-0 right-0 bg-[#F1F8FF] w-[40px] h-[40px] opacity-90  rounded-br-md rounded-tl-md hover:bg-button hover:fill-white cursor-pointer'>
                    <Love  className={`p-2 ${toggle ?  'bg-button fill-white rounded-br-md rounded-tl-md hover:bg-white hover:fill-button'  : 'fill-button hover:fill-white '}`}/>
                </div> */}
            </div>
            <div className='h-[90px]'>
                <h3>{title}</h3>
                <p className='text-[14px]'>{address}</p>
            </div>
            <Link to={`/things-to-do/museum-jogja/${item}`}> 
                <Button />
            </Link>
    </div>
  )
}

export default CardList