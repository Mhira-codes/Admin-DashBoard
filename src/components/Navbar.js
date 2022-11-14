import React from "react";
import Card from "./card/Card";

const Navbar = () => {
  return (
    <div className="md:w-[250px] h-[91%] hidden md:flex flex-col items-center justify-between px-3">
      <div className="pt-12 pb-8 border-b border-gray-900 w-full  space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
        <Card type="mastercard" />
        <Card type="visa" />
      </div>
      <div className="flex justify-center items-center w-full border-dashed border border-gray-400 rounded-lg py-3 my-2">
<button className="w-full">Add Cart</button>
      </div>

      <div className="flex items-start flex-col justify-between w-full h-full space-y-4 px-3  pb-2 pt-[150px]">
        <div className="flex flex-col items-start justify-center w-full space-y-4  pb-6 border-b  border-gray-900">
          <a>Deposits</a>
          <a>Loyalty Programs</a>
          <a>Loans</a>
        </div>
        <div className="text-black space-y-3 flex flex-col items-start justify-center ">
          <h1 className="font-bold text-lg">OpenBank</h1>
          <p className="text-sm text-start">2022 openbank licence #19 from 06.07.2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
