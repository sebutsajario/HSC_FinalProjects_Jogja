import React from 'react'
import SouvenirCard from './SouvenirCard'

// import axiosSouvenir from '/src/API/apiMuseum.js'
import SouvenirData from '/src/Database/souvenirData.json'


const SouvenirContainer = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-10'>
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
  )
}

export default SouvenirContainer