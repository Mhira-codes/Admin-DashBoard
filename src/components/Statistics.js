import React from "react";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="lg:flex items-start justify-start self-center lg:space-x-2 lg:space-y-0 space-y-4 w-full px-3 py-2 cursor-pointer">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="self-center px-8 py-2 rounded-md text-lg">
            {i === 0 ? "Statement" : "Statistics"}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Statistics;
