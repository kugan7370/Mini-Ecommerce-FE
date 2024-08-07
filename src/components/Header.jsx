import React from "react";

function Header() {
  return (
    <div className="w-full h-10">
      {/* innercontainer */}
      <div className="flex justify-end items-center  px-[59px] py-[33px]">
        <h1 className="font-bold text-[19px] uppercase font-Satoshi-Bold">
          Admin
        </h1>
        <img
          src="./images/Dropdown.png"
          alt="dropdown"
          className="w-[10px] h-[10px] ml-[10px]"
        />

        <div className="w-[58px] h-[58px]  bg-primary rounded-full relative ml-[37px]">
          <div className="rounded-full h-full w-full " />
          {/* badge */}
          <div className="w-[12px] h-[12px] bg-[#3DF265] rounded-full absolute top-10 right-0 flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
