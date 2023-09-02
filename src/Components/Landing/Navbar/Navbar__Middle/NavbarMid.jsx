import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './navbarmid.css'

const NavbarMid = () => {
    const navigateToPracticalTipsPage = useNavigate()

    const [isHeadroomHovered, setIsHeadroomHovered] = useState(false);
    const [isHeadroomPinned, setIsHeadroomPinned] = useState(false);
  return (
    <div
      className={`flex items-center text-white
        max-[1023px]:hidden 
        lg:block lg:mr-[2rem] ${
        isHeadroomHovered ? 'headroom-hovered' : ''
      } ${isHeadroomPinned ? 'headroom--pinned' : ''}`}
    >
        <div className='flex gap-[4rem] '>
            <a href="#thing-to-do">
              <p className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text1'>Things to do</p>
            </a>
            <a href="#map">
              <p className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text2'>Places to go</p>
            </a>
            <div onClick={() => navigateToPracticalTipsPage('/practical-tips-page')} >
              <p className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text3'>Practical tips</p>
            </div>
        </div>
    </div>
  )
}

export default NavbarMid
