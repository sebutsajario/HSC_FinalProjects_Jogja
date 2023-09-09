import React from 'react'
import Culture from '/Assets/practical-tips/culture-practicaltips.png'

const CultureJogja = () => {
  return (
    <div className='py-10 bg-background1 flex justify-center'>
        <div className='lg:flex max-w-[1280px]'>
            <div className='bg-white px-5 sm:px-10 py-10 lg:w-9/12'>
                <h1>Jogja - Culture's Heartbeat,<br />Rich Traditions Abound.</h1>
                <p className='mt-5 text-justify'>The native population of Yogyakarta, often referred to as Jogja, primarily consists of Javanese people. They form the cultural heart and heritage of this vibrant city. The Javanese have a rich history, deeply rooted in traditions, arts, and a strong sense of community. Their language, Javanese, is commonly spoken alongside Bahasa Indonesia, reflecting the region's cultural diversity. The locals take great pride in their distinctive customs, such as traditional ceremonies, batik craftsmanship, and gamelan music. Warm hospitality and a strong sense of unity are characteristic features of the Javanese people, contributing to the welcoming atmosphere that visitors often experience in Jogja.</p>
            </div>
            <div className='px-5 flex justify-center bg-white py-10 lg:pr-10'>
                <img className='rounded-lg w-[280px] sm:w-[400px]' src={Culture} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CultureJogja
