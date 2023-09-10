import React, {useState} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'


// ==== Database local
import museumsData from '/src/Database/museumsData.json'
import attractionsData from '/src/Database/attractionsData.json'
import artActivitiesData from '/src/Database/artActivitiesData.json'


// ================ CSS styles for leaflet-container ada di app.css

import "leaflet/dist/leaflet.css"

function LeafletMap() {

  const [activeCategory, setActiveCategory] = useState(museumsData);
  const handleCategoryChange = (categoryData) => {
    setActiveCategory(categoryData);
  };

  const markerIcon = new L.Icon ({
    iconUrl:'/Assets/Leaflet/location.svg',
    iconSize: [40, 40],
    iconAnchor:[20,40],
  })


  const position = [-7.8 , 110.363]
  return (
    <div className='flex flex-col justify-center items-center py-5'>
      <div className='mt-5 w-[18rem] lg:w-[23rem] flex justify-between mb-2'>
        <button onClick={() => handleCategoryChange(museumsData)}
        className='bg-button px-3 py-2 rounded-lg text-white text-[12px] lg:text-[1rem] hover:opacity-70 drop-shadow-lg'>
          <p>Museums</p>
        </button>
        <button onClick={() => handleCategoryChange(attractionsData)}
        className='bg-button px-3 py-2 rounded-lg text-white text-[12px] lg:text-[1rem] hover:opacity-70 drop-shadow-lg'>
          <p>Attraction</p>
        </button>
        <button onClick={() => handleCategoryChange(artActivitiesData)}
        className='bg-button px-3 py-2 rounded-lg text-white text-[12px] lg:text-[1rem] hover:opacity-70 drop-shadow-lg'>
          <p>Art Activities</p>
        </button>
      </div>
      <div className='mb-2 font-semibold'>
        <p>Click to see the location!</p>
      </div>
    <MapContainer 
      center={position} 
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {activeCategory.map((item, index) => (
        <Marker key={index} position={item.position} icon={markerIcon} >
          <Popup>
            <div className='flex flex-col justify-center items-center' >
              <h3>{item.name}</h3>
              <img className='rounded-[8px]' src={item.pic} alt={item.name} width="100" />
              <a className=' text-white' href={item.link} >
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

export default LeafletMap
