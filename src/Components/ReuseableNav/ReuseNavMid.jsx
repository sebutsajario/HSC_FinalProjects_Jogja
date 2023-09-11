import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ReuseNavMid.css'


function ReuseNavMid() {

  const navigateToPracticalTipsPage = useNavigate()

    return (
        <div
          className='flex items-center text-[#000]
            max-[1023px]:hidden 
            lg:block lg:mr-[2rem]'
        >
            <div className='flex gap-[4rem] '>
                <Link to='/#thing-to-do'>
                  <p className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text1'>Things to do</p>
                </Link>
                <Link to="/#map">
                  <p className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text2'>Places to go</p>
                </Link>
                <p onClick={() => navigateToPracticalTipsPage('/practical-tips-page')} 
                className='text-[18px] w-[120px] font-Poppins transform hover:scale-105 hover:font-semibold transition-all cursor-pointer font-light text3'>Practical tips</p>
            </div>
        </div>
      )
    }
    

export default ReuseNavMid
