import React from 'react'
import './menusmall.css'
import { useNavigate } from 'react-router-dom'

const MenuSmall = () => {
    const navigateToMainPage = useNavigate ()
    const navigateToPracticalTipsPage = useNavigate ()
    // ============= Things-to-do
    // museum
    const navigateToMuseumPageJogja = useNavigate ()
    // hotel
    const navigateToHotelPageJogja = useNavigate ()
    // Art Activities
    const navigateToArtActivitiesPageJogja = useNavigate ()
    // Souvenir
    const navigateToSouvenirPageJogja = useNavigate()

  return (
    <div className='flex flex-col max-w-screen h-fit items-center
        lg:hidden
    '>

        <div className='my-5 w-[100%]'>
            <div className='px-5 menu__title pb-2 '>
                <h1 className='text-2xl'>Things to do</h1>
            </div>
            <div className='bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Attraction</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <div onClick={() => navigateToArtActivitiesPageJogja('/things-to-do/art-activities-jogja')}
                 className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Art Activities</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToMuseumPageJogja ('/things-to-do/museum-jogja')}
                >
                    <p>Museum</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Foods</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Drinks</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToHotelPageJogja ('/things-to-do/hotel-jogja')}
                >
                    <p>Hotels</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToSouvenirPageJogja ('/things-to-do/souvenir-jogja')} className='flex justify-between items-center menu__text'>
                    <p>Souvenir</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>

            </div>
        </div>

        <div className='mb-5 w-[100%]'>
            <div className='px-5 menu__title pb-2  '>
                <h1 className='text-2xl'>Places to go</h1>
            </div>
            <div className=' bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Jogja</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Semarang</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Dieng</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
                <a href="" className='flex justify-between items-center menu__text'>
                    <p>Karimun Jawa</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </a>
            </div>
        </div>

        <div className='mb-5 w-[100%]'>
            <div className='px-5 menu__title pb-2 '> 
                <h1 className='text-2xl'>Practical tips</h1>
            </div>
            <div className='bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>FAQ about Central Java</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>Arriving and getting around</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>Weather in Central Java</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>What we need?</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
            </div>
        </div>

        <div className='fixed z-[1600] bottom-10 flex justify-center items-center
            lg:hidden
            '>
            <button className='bg-white text-button text-xl rounded-l-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative left-1 drop-shadow-md'>
                <ion-icon name="search-outline"></ion-icon>
            </button>

            <button 
                id='botButton' 
                className='text-button bg-button2 text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'
                onClick={() => navigateToMainPage('/')}
                >
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <button className='bg-white text-button text-xl rounded-r-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative right-1 drop-shadow-md'> 
                <ion-icon name="heart-outline"></ion-icon>
            </button>
        </div>
    </div>

  )
}

export default MenuSmall
