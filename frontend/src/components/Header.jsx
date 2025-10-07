import Logout from "@/app/BaseComponents/Logout";
import { SearchBox } from "@/app/BaseComponents/SearchBox";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-blue-300 shadow-2xl h-full flex items-center justify-between p-5 border rounded-xl">
      <div className="w-[75%] flex justify-between">
        <span className="font-bold text-2xl ">
          ChatterBox
        </span>
        <div className="w-[50%]"><SearchBox /></div>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
