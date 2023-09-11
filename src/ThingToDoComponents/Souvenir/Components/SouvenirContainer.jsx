import React from 'react'
import SouvenirCard from './SouvenirCard'

// import axiosSouvenir from '/src/API/apiMuseum.js'
import SouvenirData from '/src/Database/souvenirData.json'


const SouvenirContainer = () => {
  return (
    <section className='mt-5 '>
      <h1 className='mb-4 px-5'>Souvenir List</h1>
      <div className='grid ggrid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
      {SouvenirData.map((item, index) => (
        <SouvenirCard 
          key={index}
          item={item.id}
          pic={item.pic}
          title={item.title}
          price={item.price}
        />
      ))}
      </div>
    </section>
  )
}

export default SouvenirContainer