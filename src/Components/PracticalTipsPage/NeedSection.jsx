import React from 'react'

import currency from '/Assets/practical-tips/currency.png'
import bahasa from '/Assets/practical-tips/bahasa.png'
import timezone from '/Assets/practical-tips/timezone.png'

const NeedSection = () => {
  return (
    <div className='py-10'>
        <div className='md:flex md: justify-end md:pr-10'>
          <div className='py-10 px-5 text-end flex flex-col items-end md:w-2/3'>
              <h1 className='border-t-2 w-[230px]'>Need to know!</h1>
              <p className='mt-5'>In Yogyakarta, Indonesia, there are important details you should be aware of, such as the currency in use and the languages spoken.</p>
          </div>
        </div>
        <div className='m-5 flex flex-col justify-center items-center md:items-start gap-10 md:flex-row'>
          <div className=' bg-background1 w-full max-w-[300px] rounded-lg lg:h-[400px] '>
            <div className='flex justify-center my-5'>
              <img src={currency} alt="currency" />
            </div>
            <div className='px-5 pb-5'>
              <h3 className='text-[22px]'>Currency</h3>
              <p className='mt-2 text-justify'>In Yogyakarta, Indonesia, the official currency used is the Indonesian <b>Rupiah</b>, denoted as <b>IDR</b>. It's essential to have some Rupiah on hand for transactions, as it is the widely accepted currency in the region.</p>
            </div>
          </div>
          <div className=' bg-background1 w-full max-w-[300px] rounded-lg lg:h-[400px] '>
            <div className='flex justify-center my-5'>
              <img src={bahasa} alt="bahasa" />
            </div>
            <div className='px-5 pb-5'>
              <h3 className='text-[22px]'>Language</h3>
              <p className='mt-2 text-justify'>The primary language spoken in Jogja, is <b>Bahasa Indonesia</b>, which is the official language of Indonesia. Additionally, <b>Javanese</b> is commonly spoken in daily interactions, reflecting the local culture and traditions.</p>
            </div>
          </div>
          <div className=' bg-background1 w-full max-w-[300px] rounded-lg lg:h-[400px] '>
            <div className='flex justify-center my-5'>
              <img src={timezone} alt="timezone" />
            </div>
            <div className='px-5 pb-5'>
              <h3 className='text-[22px]'>Time Zone</h3>
              <p className='mt-2 text-justify'>Yogyakarta, Indonesia, is typically in the Western Indonesia Time (WIB) zone, which is <b>UTC+7</b>. However, please note that Indonesia does not observe Daylight Saving Time, so the time remains consistent throughout the year.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NeedSection
