import React from 'react'

function Button({title}) {
  return (
    <div>
        <a href="" className='bg-button flex w-[120px]  justify-center mx-auto py-2 px-3  text-white rounded-2xl my-3 font-Poppins'>{title ?? 'Read More'}</a>
    </div>
  )
}

export default Button