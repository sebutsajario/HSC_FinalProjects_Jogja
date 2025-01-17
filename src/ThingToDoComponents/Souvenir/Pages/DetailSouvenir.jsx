import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import axiosSouvenir from "../../../API/apiSouvenir";

// import SouvenirButton from "../Components/SouvenirButton";

import ReuseNav from "../../../Components/ReuseableNav/ReuseNav";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import Footer from "/src/Components/Footer/Footer";
import axiosInstance from "../../../API/apiCall";

const DetailSouvenir = () => {
  const navigateToSouvenirPage = useNavigate();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const callApi = async () => {
    axiosInstance.detail(id).then((res) => {
      const data = res[0];
      setDetail(data);
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen">
      <ReuseNav />
      <div className="w-screen h[80px] flex justify-end items-center pt-4 gap-3 sm:pr-5">
        <div
          className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToSouvenirPage("/things-to-do/souvenir-jogja")}
        >
          <button
            id="botbutton"
            className="text-button text-3xl px-[6px] py-[1px] w-[3rem] flex justify-center items-center z[1]"
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Souvenir Page</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 m-auto ">
        <div className="object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit">
          <img className="w-full" src={detail.src} alt="Souvenir" />
        </div>
        <div className="flex-col justify-start md:items-start w-full py-8 ">
          <div className="flex flex-row px-5 justify-between space-x-4">
            <div className="flex flex-row space-x-4">
              <button
                type="button"
                className="flex flex-wrap items-center space-x-2"
              >
                <span className="mr-2">Share</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex flex-wrap items-center space-x-2"
              >
                <span className="mr-2">Save</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <h1 className="my-4 text-5xl font-bold text-start font-lora">
              {detail.name}
            </h1>
          </div>
          <div className="flex flex-col max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <p className="mt-4 max-w-3x1 space-y-6">{detail.description}</p>
            <h3 className="mt-4 text-2xl">Rp. {detail.price}</h3>
          </div>
          <div className="mt-4 max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <Link to={"/cart-page/"}>
              <button className="w[180px] bg-button flex items-center px-4 py-2 rounded-xl">
                <p className="text-white me-1 font-Poppins">Add to Cart</p>
                <i className="bx bx-cart-alt text-[30px] text-white ml-3"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailSouvenir;
