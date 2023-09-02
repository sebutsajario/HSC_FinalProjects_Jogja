import React from 'react';
import Headroom from 'react-headroom';
import '/src/Components/Landing/Navbar/navbar-headroom.css';

import ReuseNavLang from './ReuseNavLang';
import ReuseNavLeft from './ReuseNavLeft';
import ReuseNavMid from './ReuseNavMid';
import ReuseNavRight from './ReuseNavRight';

function ReuseNav() {
    return (
      <Headroom
        disableInlineStyles
      >
        <div
          className='w-[100vw] px-8 h-[80px] flex justify-between items-center overflow-hidden drop-shadow-md bg-white
           lg:px-[30px] lg:h-[102px] lg:pt-0' 
        >
          <ReuseNavLeft/>
          <ReuseNavMid/>
          <ReuseNavLang/>
          <ReuseNavRight/>
        </div>
      </Headroom>
    );
  };
export default ReuseNav
