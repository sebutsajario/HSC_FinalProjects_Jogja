import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axiosSouvenir from '../../../API/apiSouvenir';
import ReuseNav from '../../../Components/ReuseableNav/ReuseNav';
import SouvenirButton from '../Components/SouvenirButton';
import Footer from '/src/Components/Footer/Footer'

const DetailSouvenir = () => {

    const [detail, setDetail] = useState([])
    const {id} = useParams()
    const callApi = async() => {
        axiosSouvenir.detail(id).then((res) => {
            setDetail(res)
        })
    }

    useEffect(() => {
        callApi()
    }, [])

  return (
    <div className='min-h-screen'>
    <ReuseNav />
    <div className='grid md:grid-cols-2 m-auto '>
    <div className='object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit'>
      <img className='w-full' src={detail.pic} alt='Souvenir' />
    </div>
    <div className=' flex-col justify-start md:items-start w-full py-8 mt-20'>
      <div className='flex flex-row px-5 justify-between space-x-4'>
        <div className='flex flex-row space-x-4'>
            <button type='button' className='flex flex-wrap items-center space-x-2'>
                <span className='mr-2'>Share</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
            </button>
            <button type='button' className='flex flex-wrap items-center space-x-2'>
                <span className='mr-2'>Save</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </button>
        </div>
      </div>
      <div className='max-w-7x1 nx-auto px-4 sm:px-6 md:px-8'>
        <h1 className='my-4 text-5xl font-bold text-start font-lora'>{detail.title}</h1>
      </div>
      <div className='flex flex-col max-w-7x1 nx-auto px-4 sm:px-6 md:px-8'>
      <p className='mt-4 max-w-3x1 space-y-6'>{detail.description}</p>
      <h3 className='text-2xl'>Rp. {detail.price}</h3>
      </div>
      <div className='mt-4 max-w-7x1 nx-auto px-4 sm:px-6 md:px-8'>
        <Link to={'/cart-page/'}>
        <button className='bg-button text-lg justify-center mx-auto py-2 px-3 text-white rounded-md my-5 font-Poppinsy'>Add to Cart</button>
       
        </Link>
        </div>
    </div>
    </div>
    <Footer />
           

    </div>
  )
}

export default DetailSouvenir