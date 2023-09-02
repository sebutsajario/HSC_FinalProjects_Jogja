import React from 'react'

const TitleHotel = () => {
    return (
        <div className='h-full w-full lg:flex lg:gap-10 px-2 mb-5 mx-auto md:px-40'>
            <div className='col-span-6'>
                <h1 className='text-font2 border-t border-black pt-4 font-lora lg:w-[18rem]' >
                    Hotels and hostels
                </h1>
            </div>
            <div className="col-span-6">
                <p className='mt-5 mb-10 text-font2 text-center font-poppins text-[14px] lg:mt-0 lg:text-start'>
                Whether you're traveling on a budget or booking a Presidential Suite, Jogja has accommodations to suit your needs. Stay at a local, family-run establishment or book a room at your preferred global hotel chain.
                </p>
            </div>
        </div>
      )
    }

export default TitleHotel
