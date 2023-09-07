import React from 'react'
import { useNavigate } from 'react-router-dom'

import FaQArc from '../FaQs/FaQArcodion/FaQArc'
import FaQLogo from '../FaQs/FaQLogo/FaQLogo'

const FAQSection = () => {

  const navigateToHomePage = useNavigate()
  
  return (
    <div className='w-screen h-fit mt-5'>
      <div className='flex justify-end mr-6'>
        <div className='flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14'
          onClick={() => navigateToHomePage('/')}>
          <button 
            id='botButton' 
            className='text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
          >
            <i className='bx bx-arrow-back'></i>
          </button>
          <p className='font-Poppins'>Back to Home Page</p>
        </div>
      </div>
      <div className='w-[85vw] h-fit p-5 bg-button2 rounded-r-xl mt-5'>
        <div className='pl-3 mb-10'>
            <h1 className='leading-none lg:leading-normal'>Frequently Asked Questions</h1>
        </div>
        <div className='lg:flex lg:justify-center'>
            <FaQArc />
            <div className='w-[300px] flex justify-center items-center pl-20'>
                <FaQLogo />
            </div>
        </div>

      </div>
    </div>
  )
}

export default FAQSection
