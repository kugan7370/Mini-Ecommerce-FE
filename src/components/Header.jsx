import React from "react";

function Header() {
  return (
    <div className="w-full h-10">
      {/* innercontainer */}
      <div className="flex justify-end items-center gap-2 px-[59px] py-[33px]">
        <h1 className="font-bold text-[19px] uppercase font-Satoshi-Bold">
          Admin
        </h1>
        <img
          src="../assets/Dropdown.png"
          alt="dropdown"
          className="w-[16px] h-[16px]"
        />

        <div className="w-[58px] h-[58px]  bg-primary rounded-full">
          <div className="rounded-full h-full w-full " />
        </div>
      </div>
    </div>
  );
}

export default Header;
