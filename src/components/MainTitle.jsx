import React from "react";

function MainTitle({ title }) {
  return (
    <div className="flex justify-between items-center px-[59px] py-[33px]">
      <h1 className="font-bold text-4xl font-Satoshi-Bold">{title}</h1>
    </div>
  );
}

export default MainTitle;
