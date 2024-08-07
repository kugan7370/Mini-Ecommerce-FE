import React from "react";

function MainTitle({ title, isAddProduct }) {
  return (
    <div className="flex gap-[15px] items-center px-[59px] mt-[41px] mb-[32px]">
      <h1 className="font-bold text-[36px] tracking-wide font-Satoshi-Bold uppercase">
        {title}
      </h1>
      {/* arrow image */}
      {isAddProduct && (
        <>
          <img
            src="./images/arrow.svg"
            alt="arrow"
            className="w-[32px] h-[32px] object-cover"
          />
          <h1 className="text-[24px] text-primary tracking-wide font-Satoshi-Bold ">
            Add new product
          </h1>
        </>
      )}
    </div>
  );
}

export default MainTitle;
