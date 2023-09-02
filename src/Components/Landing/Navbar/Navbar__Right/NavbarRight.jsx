import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbarright.css'
import 'boxicons';

const NavbarRight = () => {
    const [isHeadroomHovered, setIsHeadroomHovered] = useState(false);
    const [isHeadroomPinned, setIsHeadroomPinned] = useState(false);

    const navigateToMenuJogja = useNavigate ()  
    const navigateToSavedPageJogja = useNavigate ()  

  return (
    <div className={`flex gap-[1rem] w-fit h-[40px] 
        max-[1023px]:hidden ${
            isHeadroomHovered ? 'headroom-hovered' : ''
          } ${isHeadroomPinned ? 'headroom--pinned' : ''}`}
        >

        <a href="">
            <div className='flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out  px-2'>
                <p className='font-bold text-button'>EN</p>
                <div className='w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center transition duration-300 ease-in-out icon'>
                    <i className='bx bx-globe'></i>
                </div>
            </div>
        </a>
        <a href="">
            <div className='w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out  icon'>
                <i className='bx bx-search-alt'></i>
            </div>
        </a>
        <div 
            onClick={() => navigateToSavedPageJogja('/saved-page')}
            className='p-[8px] text-2xl w-[40px] flex items-center justify-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer icon'>
                <i className='bx bx-heart'></i>
        </div>
        <div 
            onClick={() => navigateToMenuJogja('/menu-jogja')}
            className='p-[8px] h-[40px] flex justify-center items-center text-2xl rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer icon'>
                <i className='bx bx-menu'></i>
        </div>


    </div>
  )
}

export default NavbarRight
