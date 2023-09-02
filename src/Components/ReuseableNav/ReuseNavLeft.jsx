import React from 'react'
import logoBlack from '/src/assets/wonderful-jogja-logo-black-2.svg';
import { useNavigate } from 'react-router-dom';

function ReuseNavLeft() {
  const navigateToMainPage = useNavigate()

  return (
    <div onClick={() => navigateToMainPage('/')}>
        <img
          className='w-[180px] h-[78.75px] sm:w-[200px] sm:h-[87.5px] lg:w-[220px] lg:h-[96.25px] lg:overflow-hidden cursor-pointer'
          src={logoBlack}
          alt="logo"
        />
    </div>
  );
};

export default ReuseNavLeft
