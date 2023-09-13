import React, { useEffect, useState } from 'react';
import ReuseNav from '../Components/ReuseableNav/ReuseNav';
import Footer from '../Components/Footer/Footer';
import DrinksData from '../Database/drinksData.json';
import { Link } from 'react-router-dom';
import BotButton from '../Components/Landing/Landing-bot/BotButton';
import NotFound from '../assets/search-not-found.svg';

const SearchPage = () => {
  // Database
  const data = DrinksData;

  // For Searchbar
  const [text, setText] = useState ('');

  //For Search Result
  const filteredData = data.filter((item) => {
    return text.toLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(text)
      }).map((item) => (
          <div className='w-[80vw] mx-auto' key={item.id}>
            <Link to={`/things-to-do/drinks-jogja/${item.id}`}>
              <div className='flex flex-row justify-between mt-5'>
                <div className='w-[20vw] h-[20vw] max-h-[200px] max-w-[200px] mr-2 place-items-center'>
                  <img className='object-cover rounded-xl w-full h-full' src={item.src} alt="" />
                </div>
                <div className='w-[60vw] h-[20vw] md:h-[20vw] md:ml-2 lg:w-[60vw] content-center flex-col flex-1 overflow-hidden'>
                  <div className='text-sm md:text-lg lg:text-xl font-semibold hover:underline underline-offset-4'>{item.name}</div>
                  <div className='text-xs leading-tight break-words md:text-sm lg:text-base'>{item.description}</div>
                </div>
              </div>
            </Link>
          </div>
      ))
  
  // For not found result
  const NoData = () => {
    return (
      <div className='mt-10 px-5 flex flex-col items-center'>
        <img className='w-[50%] md:w-[40%] lg:w-[30%]' src={NotFound} alt="Not Found" />
        <p className='mt-5 text-base font-semibold text-center leading-tight md:text-lg lg:text-xl'>Unfortunately, there is no results.</p>
        <p className='mt-2 text-xs text-center md:text-sm lg:text-base'>Try to use another keyword or search for another content.</p>
      </div>
    )
  }

  const SearchResult = () => {
    let result = []
    if (filteredData.length == 0) { result = <NoData /> }
    else { result = filteredData}
    return result
  }

  // Search Page

  return (
    <div>
      <ReuseNav />
      {/* Search Bar */}
      <div className='bg-[#FFFFFF]'>
        <div className='form-wrapper'>
          <form action="">
            <div className='text-2xl font-semibold w-[80vw] mx-auto mt-5 py-1 border-b-2 border-[#94a3b8] focus-within:border-[#020617]'>
              <i className='bx bx-search-alt text-lg w-[5%] md:text-xl lg:text-2xl' />
              <input className='w-[85%] ml-2 text-lg md:text-xl lg:text-2xl focus:outline-none hover:opacity-75' onChange={(e) => setText(e.target.value)} placeholder='Search...'/>
            </div>
          </form>
        </div>
        {/* Search Result */}
        <div className='search-result'>
          <SearchResult />
        </div>
      </div>
      <Footer />
      <div className='flex justify-center'>
        <BotButton />
      </div>
    </div>
  );
};

export default SearchPage
