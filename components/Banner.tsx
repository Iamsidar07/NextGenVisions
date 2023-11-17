"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Banner = () => {
  const [isShowBanner, setIsShownBanner] = useState(true);
  const bannerMsg =
    "Creating art will not work for now as I exceeded the openai limit.";
  return (
    <>
      {isShowBanner ? (
        <div className="relative border-b w-full bg-gradient-to-tr from-yellow-300 to-orange-300 flex items-start justify-between p-2">
          <p className="max-w-[90%] sm:max-w-full italic text-sm">
            {bannerMsg}
          </p>
          <RxCross1
            onClick={() => setIsShownBanner(false)}
            className="w-4 h-4 cursor-pointer absolute top-4 right-4 sm:top-2 "
          />
        </div>
      ) : null}
    </>
  );
};

export default Banner;
