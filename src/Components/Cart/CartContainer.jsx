import React from 'react'

const CartContainer = () => {
  return (
    <div className='flex flex-wrap mt-5 justify-between px-10'>
      <h1 className=' text-4xl'>Cart</h1>
      <button className='bg-white hover:bg-button text-gray-800 hover:text-whitefont-semibold py-2 px-4 border border-gray-400 rounded shadow'>Clear Cart List</button>
    </div>
  )
}

export default CartContainer