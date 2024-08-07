import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import { useSearchParams } from "react-router-dom";
function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log("Query:", query);
  return (
    <div>
      <Header />
      <MainTitle title="Product" />

      {/* search section */}
      <div className="flex  items-center justify-between gap-2 px-[59px] py-[33px] w-full">
        <div className="flex gap-2 py-2 px-4 w-3/5 bg-secondary-F7 rounded-full">
          <input
            type="text"
            placeholder="Search for products"
            className="border-none outline-none  rounded-md  flex-1 p-2 bg-secondary-F7"
          />
          <button className="bg-primary text-white gap-2  py-2 px-4 w-[180px] rounded-3xl font-Satoshi-Bold flex items-center justify-center">
            <img
              src="./images/search.png"
              alt="search"
              className="w-4 h-4 object-contain"
            />
            Search
          </button>
        </div>
        <div className="flex items-center  gap-4">
          <button className="bg-primary text-white  py-2 px-4 h-[56px] w-[180px] rounded-md font-Satoshi-Bold">
            Add Product
          </button>

          <div className="border border-primary p-2  h-[56px] rounded-md flex items-center justify-center">
            <img
              src="./images/star.svg"
              alt="filter"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div>

      {/* search list */}

      {/* search count */}
      <div className="px-[59px] py-[33px] w-full">
        <p className="text-secondary-16 opacity-50 text-[24px] font-Satoshi-Bold">
          {`4 results found for ‘${query}’`}
        </p>
      </div>

      {/* search list */}
      <div className=" px-[140px] py-[33px] w-full">
        <div className="flex items-center justify-between border-b px-[47px] py-6">
          <div className="flex-col space-y-2 ">
            <h1 className="text-[14px] font-Satoshi-Medium text-primary">
              #CA25
            </h1>
            {/* product name */}
            <h1 className="text-[19px] font-Satoshi-Bold text-secondary-16">
              Product Name
            </h1>
            {/* description */}
            <p className="text-[14px] font-Satoshi-Regular text-secondary-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
              lectus a risus a nibh massa ut leo.
            </p>
          </div>

          <div className="right">
            {/* image */}
            <img
              src="./images/arrow.svg"
              alt="product"
              className="w-[32px] h-[32px] object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-between border-b px-[47px] py-6">
          <div className="flex-col space-y-2 ">
            <h1 className="text-[14px] font-Satoshi-Medium text-primary">
              #CA25
            </h1>
            {/* product name */}
            <h1 className="text-[19px] font-Satoshi-Bold text-secondary-16">
              Product Name
            </h1>
            {/* description */}
            <p className="text-[14px] font-Satoshi-Regular text-secondary-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
              lectus a risus a nibh massa ut leo.
            </p>
          </div>

          <div className="right">
            {/* image */}
            <img
              src="./images/arrow.svg"
              alt="product"
              className="w-[32px] h-[32px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
