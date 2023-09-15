import React, { useState } from "react";

const ButtonLove = () => {
  const [isSolid, setIsSolid] = useState(false);
  const toggleIcon = () => {
    setIsSolid((prevIsSolid) => !prevIsSolid);
  };

  return (
    <div>
      <button
        onClick={toggleIcon}
        className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        {isSolid ? (
          <i className="bx bxs-heart text-button"></i>
        ) : (
          <i className="bx bx-heart text-button"></i>
        )}
      </button>
    </div>
  );
};

export default ButtonLove;
