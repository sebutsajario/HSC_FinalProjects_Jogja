import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ReuseNav from "../Components/ReuseableNav/ReuseNav";
import Footer from "../Components/Footer/Footer";
import DrinksData from "../Database/drinksData.json";
import BotButton from "../Components/Landing/Landing-bot/BotButton";
import ListedSearch from "../Components/Search/ListedSearch";
import axiosInstance from "../API/apiCall";

const SearchPage = () => {
  // const data = DrinksData;

  // const shouldDisplayList = text.trim() !== "";

  // const filteredItems = data.filter((item) => {
  //   return item.name.toLowerCase().includes(text.toLowerCase());
  // });
  // const numberItemAvailable = filteredItems.length;
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const callApi = async () => {
    try {
      const response = await axiosInstance.allitems(text);
      setItems(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    callApi();
  }, [text]);

  return (
    <div>
      <ReuseNav />
      {/* Search Bar */}
      <div className="bg-[#FFFFFF]">
        <div className="form-wrapper">
          <form action="">
            <div className="text-2xl font-semibold w-[80vw] mx-auto mt-5 py-1 border-b-2 border-[#94a3b8] focus-within:border-[#020617]">
              <i className="bx bx-search-alt text-lg w-[5%] md:text-xl lg:text-2xl" />
              <input
                className="w-[85%] ml-2 text-lg md:text-xl lg:text-2xl focus:outline-none hover:opacity-75"
                onChange={(e) => setText(e.target.value)}
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
        {/* Search Result */}
        {/* {shouldDisplayList ? (
          <div>
            {numberItemAvailable > 0 ? (
              <div className="w-[80vw] mx-auto mt-5">
                <p className="text-lg">
                  {" "}
                  {numberItemAvailable}{" "}
                  {numberItemAvailable === 1 ? "Result" : "Results"}
                </p>
              </div>
            ) : (
              <div className="w-[80vw] mx-auto mt-5">
                <p>No search results with keyword "{text}"</p>
              </div>
            )}
            {numberItemAvailable > 0
              ? filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-screen h-fit flex flex-col justify-center items-center p-5 gap-5 lg:py-10 lg:px-20"
                  >
                    <Link to={`/things-to-do/drinks-jogja/${item.id}`}>
                      <div className="w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row">
                        <div className="  overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]">
                          <img
                            className="rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center "
                            src={item.src}
                            alt=""
                          />
                        </div>
                        <div className="p-3 lg:w-2/3 lg:ml-5">
                          <h3 className="text-[22px]">{item.name}</h3>
                          <p className="line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        ) : null} */}
        <div className="w-screen h-fit flex flex-col justify-center items-start p-5 gap-5 lg:py-10 lg:px-20">
          <div className="w-[80vw] mx-auto font-semibold text-[20px]">
            <p>See also</p>
          </div>
          {items ? (
            items.map((item, i) => {
              return (
                <Link key={i} to={"/things-to-do/food-jogja/1"}>
                  <div className="w-full h-fit cursor-pointer justify-start flex flex-col lg:flex-row">
                    <div className="  overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]">
                      <img
                        className="rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center "
                        src={item ? item?.src : "/Assets/foods/apem.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="p-3 lg:w-2/3 lg:ml-5">
                      <h3 className="text-[22px]">{item.name}</h3>
                      <p className="line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>
              <h1 className="text-center text-4xl">Loading...</h1>
            </div>
          )}
        </div>
        {/* <ListedSearch /> */}
      </div>

      <Footer />
      <div className="flex justify-center">
        <BotButton />
      </div>
    </div>
  );
};

export default SearchPage;
