import React from 'react'

const SouvenirCard = () => {
  return (
    <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-w-[10rem] '>

        <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img className='object-cover w-full h-48' src="/src/assets/art-activities/BatikMasterClass.jpg" alt="" />
        <div className='p-4'>
            <h4 className='text-xl font-semibold text-bue-600'>
                Title
            </h4>
            <p className='mb-2 leading-normal'>
                desc
            </p>
            <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read More
            </button>
            </div>
        </div>

        <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img className='object-cover w-full h-48' src="/src/assets/art-activities/BatikMasterClass.jpg" alt="" />
        <div className='p-4'>
            <h4 className='text-xl font-semibold text-bue-600'>
                Title
            </h4>
            <p className='mb-2 leading-normal'>
                desc
            </p>
            <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read More
            </button>
            </div>
        </div>

        <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img className='object-cover w-full h-48' src="/src/assets/art-activities/BatikMasterClass.jpg" alt="" />
        <div className='p-4'>
            <h4 className='text-xl font-semibold text-bue-600'>
                Title
            </h4>
            <p className='mb-2 leading-normal'>
                desc
            </p>
            <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read More
            </button>
            </div>
        </div>
        <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img className='object-cover w-full h-48' src="/src/assets/art-activities/BatikMasterClass.jpg" alt="" />
        <div className='p-4'>
            <h4 className='text-xl font-semibold text-bue-600'>
                Title
            </h4>
            <p className='mb-2 leading-normal'>
                desc
            </p>
            <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read More
            </button>
            </div>
        </div>
        
    </div>


  )
}

export default SouvenirCard