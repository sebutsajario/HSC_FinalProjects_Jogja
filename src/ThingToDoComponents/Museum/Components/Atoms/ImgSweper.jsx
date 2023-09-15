import React from "react";

function ImgSweper({ image }) {
  return (
    <>
      <img
        src={image}
        className="w-full lg:min-h-[96vh] object-cover rounded-2xl drop-shadow-xl"
        alt={"Image" + image}
      />
    </>
  );
}

export default ImgSweper;
