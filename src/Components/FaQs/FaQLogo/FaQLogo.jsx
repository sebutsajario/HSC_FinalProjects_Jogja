import React from 'react'
import questionLogo from '/src/assets/question-logo.svg'

function FaQLogo() {
  return (
    <div className='hidden
      lg:block lg:w-[10rem] lg:mr-20
    '>
      <img src={questionLogo} alt="question-logo" />
    </div>
  )
}

export default FaQLogo

