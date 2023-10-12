import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ star, reviews }) => {
  console.log(star, reviews);
  const ratingStar = Array.from({ length: 5 }, (e, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : star >= number ? (
          <FaStarHalf className="text-yellow-400" />
        ) : (
          <AiOutlineStar className="text-yellow-400" />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex text-xl">
        
        <p
          className={
            star > 3.8
              ? "bg-green-600 block w-fit px-2 py-[2] rounded-lg"
              : "bg-red-600 block w-fit px-2 py-[2] rounded-lg"
          }
        >
          {star}
        </p>
        <p className="flex mt-1">{ratingStar}</p>
        <p className="text-green-700 px-2">{reviews} Customer reviews</p>
      </div>
    </>
  );
};

export default Star;
