import React from 'react'
import NothingImg from '/src/assets/nothing.svg'

import ActivatedButtonLove from '../Atoms/ActivatedButtonLove'

const SavedList = () => {
  return (
    <div>
      <div id='nothing-list' className='w-screen h-fit flex flex-col justify-center items-center p-4'>
          <img src={NothingImg} alt="nothing" />
          <div className='mt-5'>
              <h1 className='text-[1.8rem] text-center leading-tight'>Oops, it looks quite empty here.</h1>
          </div>
          <div className='mt-4'>
              <p className='font-Poppins text-[0.8rem text-center'>Add favourites by clicking the heart on various content on the page.</p>
          </div>
      </div>

      <div id='added-list' className='w-screen h-fit flex flex-col justify-center items-center p-5 gap-5 lg:py-10 lg:px-20'>
          <div className='w-full h-fit cursor-pointer'>
              <div className='overflow-hidden rounded-lg '>
                <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[400px] xl:object-center ' src="/Assets/foods/apem.jpg" alt="" />
                {/* nanti diganti jadi ${...} */}
                <div className='relative flex justify-end bottom-12 xl:bottom-16  h-0'>
                  <ActivatedButtonLove />
                </div>
              </div>
              <div className='p-3'>
                <h3 className='text-[22px]'>Javanese Apem Cake</h3>
                <p className='line-clamp-2'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
              </div>
          </div>

          <div className='w-full h-fit cursor-pointer'>
              <div className='overflow-hidden rounded-lg'>
                <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[400px] xl:object-center ' src="/Assets/foods/apem.jpg" alt="" />
                {/* nanti diganti jadi ${...} */}
                <div className='relative flex justify-end bottom-12 xl:bottom-16  h-0'>
                  <ActivatedButtonLove />
                </div>
              </div>
              <div className='p-3'>
                <h3 className='text-[22px]'>Javanese Apem Cake</h3>
                <p className='line-clamp-2'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
              </div>
          </div>

      </div>
    </div>

  )
}

export default SavedList
