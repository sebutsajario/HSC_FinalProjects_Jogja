import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import hotelList from '../Components/ListHotel/hotelList.json'

import "leaflet/dist/leaflet.css"

const MapHotel = () => {
    const position = [-7.81 , 110.37]
    return (
      <div className='flex justify-center items-center md:items-start pb-10 pt-5 flex-col h-fit'>
        <div className=' border-b-2 mb-5'>
            <h1>Hotel's Location</h1>
        </div>
      <MapContainer 
        center={position} 
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
  
        {hotelList.map((hotel, index) => (
          <Marker key={index} position={hotel.position}>
            <Popup>
              <div className='flex flex-col justify-center items-center' >
                <h3>{hotel.title}</h3>
                <img className='rounded-[8px]' src={hotel.image} alt={hotel.title} width="100" />
                {/* === BLM MASUKIN LINK KE DATABASE museumsData.js === */}
                <a className=' text-white' href={hotel.link} >
                  <button className='bg-button px-2 py-1 mt-2 rounded text-white cursor-pointer font-Poppins' >
                    Visit Site
                  </button>
                </a>
              </div>
            </Popup>
          </Marker>
        ))};
    </MapContainer>
  </div>
  )
}
export default MapHotel
