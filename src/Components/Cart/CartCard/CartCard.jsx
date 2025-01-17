import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex px-2 mt-1 md:px-10 shadow-md">
      <div className="mx-auto mt-4">
        <div className="flex justify-between w-auto  mb-5">
          <h3>Title Product</h3>
          <button>
            <BsTrash3 size={20} />
          </button>
        </div>
        <hr className="w-full border-gray-100 mb-5" />
        <div className="flex flex-col items-center mb-4 bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-30 md:h-40 md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/Assets/souvenir/kain-lurik.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product Name
            </h4>
          </div>
          <div className="grid grid-cols-1 px-6 mt-4">
            <p>Rp. 300000</p>
            <div className="mt-2 flex justify-center items-center border-gray-100">
              <span
                onClick={decrementQuantity}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-button hover:text-white"
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={quantity}
                min="1"
                readOnly
              />
              <span
                onClick={incrementQuantity}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-button hover:text-white"
              >
                {" "}
                +{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
