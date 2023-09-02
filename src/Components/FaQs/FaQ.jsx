import React from 'react'
import FaQTitles from './FaQTitle/FaQTitles'
import FaQArc from './FaQArcodion/FaQArc'
import FaQLogo from './FaQLogo/FaQLogo'

const FaQ = () => {
  return (
    <div className='w-screen px-5 h-fit 
      lg:flex lg:flex-col lg:justify-center lg:items-center
    '>
        <FaQTitles />
        <div className='lg:w-[100vw] lg:px-[4rem] lg:flex lg:justify-between lg:items-center' >
          <FaQArc />
          <FaQLogo />
        </div>
        
    </div>
  )
}

export default FaQ
