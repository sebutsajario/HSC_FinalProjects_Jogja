import React from 'react'
import { useNavigate } from 'react-router-dom'

const SavedTitle = () => {

    const navigateToMainPage = useNavigate()

  return (
    <div>
        <div className='w-screen h-[80px] flex justify-end items-center pr-4 gap-3
            sm:pr-5
        '>
            <div className='flex gap-3 items-center bg-button2 rounded-xl w-[230px] cursor-pointer drop-shadow-md bottom-14'
                onClick={() => navigateToMainPage('/')}>
                <button 
                    id='botButton' 
                    className='text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
                    >
                    <i className='bx bx-x'></i>
                </button>
                <p className='font-Poppins'>Back to Main Page</p>
            </div>
        </div>
        <div className="w-screen h-[350px] bg-[url('/src/assets/background-saved-page.svg')] flex flex-col justify-center p-5 gap-4
            md:justify-start md:pt-[50px] md:pl-[40px]
            lg:pt-[65px] lg:pl-[65px]

        ">
            <p className='font-Poppins text-2xl font-semibold
                md:text-[32px]
                lg:text-[36px]
            '>Your saved items</p>
            <p className='font-Poppins text-[0.8rem]
                md:text-[0.9rem]
            '>Here you'll find all your carefully selected favourites, neatly together.</p>
        </div>
    </div>
  )
}

export default SavedTitle

