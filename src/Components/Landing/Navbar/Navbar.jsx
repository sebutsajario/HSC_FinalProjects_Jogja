
import React, { useState, useEffect } from 'react';
import Headroom from 'react-headroom';
import './navbar-headroom.css';

import NavbarLang from './navbarLang';
import NavbarLeft from './Navbar__Left/NavbarLeft';
import NavbarMid from './Navbar__Middle/NavbarMid';
import NavbarRight from './Navbar__Right/NavbarRight';

const Navbar = () => {
  const [isHeadroomHovered, setIsHeadroomHovered] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true); // Awalnya di paling atas

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Headroom
      disableInlineStyles
      onMouseEnter={() => setIsHeadroomHovered(true)}
      onMouseLeave={() => setIsHeadroomHovered(false)}
      className={`${
        isHeadroomHovered || !isScrolledToTop ? 'headroom-hovered' : ''
      }`}
    >
      <div
        className={`w-[100vw] px-8 h-[80px] flex justify-between items-center overflow-hidden drop-shadow-md
         lg:px-[30px] lg:h-[102px] lg:pt-0 ${
           isHeadroomHovered || !isScrolledToTop ? 'bg-white' : 'bg-transparant'
         }`}
      >
        <NavbarLeft
          isHeadroomHovered={isHeadroomHovered}
          isScrolledToTop={isScrolledToTop}
        />
        <NavbarMid />
        <NavbarLang />
        <NavbarRight />
      </div>
    </Headroom>
  );
};

export default Navbar;

