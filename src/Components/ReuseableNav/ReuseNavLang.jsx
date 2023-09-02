import React from 'react'

const ReuseNavLang = () => {
    return (
        <div className='lg:hidden'>
            <a href="#">
                <div className='flex gap-2 justify-center items-center'>
                    <p className='text-button
                      sm:text-xl font-semibold
                    '>EN</p>
                    <div className='text-2xl icon1 text-[#000]'>
                      <i className='bx bx-globe'></i>
                    </div>
                </div>
            </a>
        </div>
      )
    }

export default ReuseNavLang
