import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import CartCard from './CartCard/CartCard';

const CartContainer = () => {
  return (
    <section>
      <div className='flex flex-wrap mt-5 justify-between px-10'>
        <h1 className='text-4xl'>Cart</h1>
        <button className='bg-white hover:bg-button text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Clear Cart List
        </button>
      </div>
      <hr className='mt-5 flex border-5 border-blue-500 cursor-pointer hover:border-red-500 duration-500' />
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col px-5'>
          <div className='flex px-10 justify-between w-auto '>
            <h3>Title Product</h3>
            <button>
              <BsTrash3 size={20} />
            </button>
          </div>
          <CartCard />
        </div>
        <div className='md:hidden mt-5'>test2</div>
      </div>
    </section>
  );
};

export default CartContainer;