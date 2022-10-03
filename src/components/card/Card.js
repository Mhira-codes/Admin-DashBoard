import React from "react";
import { RiMastercardLine } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
const Card = ({ type }) => {
  return (
    <div
      className={`${
        type === "visa" ? "bg-zinc-200" : "bg-black"
      } w-full rounded-md py-2 space-y-10 px-3`}
    >
      <h1
        className={`items-end justify-end flex w-full ${
          type === "visa" ? "text-black" : "text-gray-100"
        }`}
      >
        03/04/2010
      </h1>
      <div className="flex justify-between">      
        {type === "mastercard" ? (
          <div>
            <RiMastercardLine className="text-white" />
          </div>
        ) : (
          <div>
            <RiVisaLine />
          </div>
        )}

        <h1
          className={`items-end justify-end flex w-full self-center ${
            type === "visa" ? "text-black" : "text-gray-100"
          }`}
        >
          ...3455
        </h1>
      </div>
    </div>
  );
};

export default Card;
