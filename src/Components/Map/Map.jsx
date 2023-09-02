import React from 'react'
import MapTitle from './MapTitle/MapTitle'
import LeafletMap from './LeafletMap/LeafletMap'


function Map() {
  return (
    <div id='map' className=' my-5 h-fit items-center flex flex-col
      lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-[4rem] lg:mb-0
    '>
      <MapTitle />
      <LeafletMap />
    </div>

  )
}

export default Map



