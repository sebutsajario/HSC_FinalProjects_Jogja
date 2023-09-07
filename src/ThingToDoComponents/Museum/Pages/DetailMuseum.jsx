import React, {useState, useEffect} from 'react'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Footer from '/src/Components/Footer/Footer'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useParams } from 'react-router-dom';
import ImgSweper from '../Components/Atoms/ImgSweper';
import axiosInstance from '../../../API/apiMuseum';

import { useNavigate } from 'react-router-dom';



export default function DetailMuseum() {
    // Route
    const navigateToMuseumPage = useNavigate ()

  const [detail, setDetail] = useState({})
  const {id} = useParams()

  const callApi = async()=>{
    axiosInstance.detail(id).then((res) =>{
      setDetail(res)
    })
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <div className="flex flex-col min-h-screen pb-5">
        <ReuseNav />
        <div className='w-screen h-[80px] flex justify-end items-center pr-4 gap-3
            sm:pr-5
        '>
            <div className='flex gap-2 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14'
                onClick={() => navigateToMuseumPage('/things-to-do/museum-jogja')}>
                <button 
                    id='botButton' 
                    className='text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
                    >
                    <i className='bx bx-x'></i>
                </button>
                <p className='font-Poppins'>Back to Museum Page</p>
            </div>
        </div>
        <div className='lg:flex lg:items-center lg:justify-center mb-4'>
            <ImgSweper image={detail.src}/>
        </div>
        <div className='w-screen h-fit bg-[#F1F8FF] pt-5'>
            <section className="px-5 md:w-[50%] md:mx-auto ">
                <div className="flex flex-1  justify-between items-center mb-5">
                    <div>
                        <span className='font-Poppins'>Museum</span>
                    </div>
                    <button className='bg-button2 w-[100px] flex items-center px-4 py-2 rounded-xl'>
                        <p className='text-button me-1 font-Poppins'>Share </p>
                        <i className='bx bx-share-alt text-[20px] text-button'></i>
                    </button>
                    <button className='flex items-center bg-button2 w-[100px] px-4 py-2 rounded-xl'>
                        <p className='text-button me-1 font-Poppins'>Save </p>
                        <i className='bx bx-heart text-[20px] text-button'></i>
                    </button>
                </div>
                
                <div>
                    <h1 className="mb-5 font-bold text-4xl font-Lora">{detail.name}</h1>
                    <span className='mb-5 font-semibold'>Rp. 10.000</span>
                    <p className="mt-2 text-[12px] text-justify"> {detail?.description}</p>
                        <div className='flex justify-center items-center my-5 '>
                            <button className='bg-button w-[145px] flex items-center px-4 py-2 rounded-xl'>
                                <p className='text-white me-1 font-Poppins'>Buy Ticket </p>
                                <i className='bx bx-cart-alt text-[22px] text-white ml-1'></i>
                            </button>
                        </div>
                </div>
            </section>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}