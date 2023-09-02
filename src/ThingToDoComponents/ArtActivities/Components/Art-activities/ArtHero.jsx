import React from 'react'
import Navbar from '/src/Components/Landing/Navbar/Navbar'

const ArtHero = () => {
    return (
        <div className='bg-[url("/src/assets/art-activities/background-art.svg")] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center '>
            <Navbar />
            <div className='w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col'>
                <h1 className='text-white text-5xl lg:text-[72px] italic text-center'>Art Activities</h1>
                <p className='text-white text-[12px] xl:text-[1rem] text-center mt-5 lg:w-[50vw] '>Yogyakarta is renowned for its vibrant art scene, offering a diverse range of cultural workshops, galleries, and street art that allow visitors to immerse themselves in the city's rich artistic heritage.</p>
            </div>
        </div>
      )
    }

export default ArtHero
