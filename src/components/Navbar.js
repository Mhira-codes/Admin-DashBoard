import React from "react";
import Card from "./card/Card";

const Navbar = () => {
  return (
    <div className="md:w-[250px] h-[91%] hidden md:flex flex-col items-center justify-between px-3">
      <div className="pt-12 pb-8 border-b border-gray-900 w-full  space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
        <Card type="mastercard" />
        <Card type="visa" />
      </div>
    </div>
  );
};

export default Navbar;
