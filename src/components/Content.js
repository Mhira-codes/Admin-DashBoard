import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { HiChevronDoubleUp } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Statistics from "./Statistics";

const Content = () => {
  return (
    <div className="w-full h-[90vh]  space-x-4 items-center justify-center grid grid-cols-2 lg:grid-cols-3  ">
      <div className="items-center justify-center flex flex-col col-span-2 h-full py-2  px-3 w-full space-y-4 ">
        <div className="pb-1 pt-12 px-3 w-full h-full space-y-8">
          <div className="py-1 px-2 flex items-center justify-center w-full ">
            <h1 className="flex items-start justify-start w-full text-2xl lg:text-4xl self-center  font-bold text-black">
              MasterCard Gold
            </h1>
            <div className="flex items-end justify-end w-full space-x-4 ">
              <div>
                <AiOutlineFileText />
              </div>
              <div>
                <HiChevronDoubleUp />
              </div>
            </div>
          </div>
          <div className="pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2  xl:grid-cols-4 w-full">
            <div className="flex items-center justify-between w-full bg-[#F8F8F8] rounded-tl col-span-2 xl:col-span-1 px-3 py-2">
              <div className="flex-col w-full items-center justify-center">
                <h1 className="flex items-start justify-start text-start font-bold text-black text-xl w-full">
                  ...4050
                </h1>
                <div className="flex items-center justify-between space-x-4 w-full">
                  <p>02/09</p>
                  <p className="text-indigo-900">CVV code</p>
                </div>
              </div>
              <div className="px-4">
                <FiSettings />
              </div>
            </div>
            <div className="py-1 px-3 w-full xl:col-span-3 col-span-2 xl:flex items-center justify-between xl:space-y-0 space-y-4 xl:space-x-4">
              <div className="w-full items-start jusify-start xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500">Cash Available</h1>
                <h1 className="text-2xl font-bold">$ 64,000</h1>
              </div>
              <div className="w-full items-start jusify-start xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500">Credit Limit</h1>
                <h1 className="text-2xl font-bold">$ 80,000</h1>
              </div>
              <div className="w-full items-start jusify-start xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500">Debit</h1>
                <h1 className="text-2xl font-bold">$ 24,000</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-3">
            <div className="w-full items-center justify-between py-4 px-6 lg:flex  bg-[#F8F8F8] rounded-lg space-y-6 lg:space-y-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                className="w-24 h-24  lg:inline-hidden fill-purple-500  stroke-gray-700 stroke-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>

              <div className="lg:flex justify-between items-center lg:space-x-12">
                <div className="space-y-2">
                  <h1 className="text-lg font-medium text-gray-500">
                    Piggy Bank
                  </h1>
                  <h1 className="text-2xl font-bold">30,000 $</h1>
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-medium text-gray-500">Payment</h1>
                  <h1 className="text-2xl font-bold">12,000 $</h1>
                </div>
              </div>
              <div className="lg:w-1/2 flex items-start justify-start lg:items-end lg:justify-end lg:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  className="h-6 w-6 md:inline hidden self-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
                <button className="text-gray-100 bg-black py-3 px-8 border border-transparent rounded-md hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div classsName="py-1 px-3 w-full h-full">
          <Statistics />
        </div>
      </div>
      <div className="w-full h-full py-2 px-6">
        {/* transfer */}
        {/* Upcomingbills*/}
      </div>
    </div>
  );
};

export default Content;
