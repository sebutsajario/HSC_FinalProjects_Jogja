import React from 'react'
import ReuseNav from '../Components/ReuseableNav/ReuseNav'
import Footer from '/src/Components/Footer/Footer'
import CartContainer from '../Components/Cart/CartContainer'

const CartPage = () => {
  return (
    <div className='w-full h-auto'>
      <ReuseNav />

      <CartContainer />

      <Footer />
    </div>
  )
}

export default CartPage