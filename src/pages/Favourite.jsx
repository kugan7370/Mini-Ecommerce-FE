import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";

function Favourite() {
  return (
    <div>
      <Header />
      <div className="px-[102px]">
        <MainTitle title="PRODUCTS" />
      </div>

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

      {/* table section */}
      <div className="px-[59px] py-[33px] w-full ">
        <table className="w-full ">
          <thead className="">
            <tr className="">
              <th className="text-left px-4 py-2 font-Satoshi-Bold text-[19px] text-primary">
                SKU
              </th>
              <th className="text-left px-4 py-2 font-Satoshi-Bold text-[19px] text-primary">
                IMAGE
              </th>
              <th className="text-left px-4 py-2 font-Satoshi-Bold text-[19px] text-primary">
                PRODUCT NAME
              </th>
              <th className="text-left px-4 py-2 font-Satoshi-Bold text-[19px] text-primary">
                PRICE
              </th>
              <th className="py-2 px-4 font-Satoshi-Bold text-[19px] text-primary justify-end"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[rgba(150, 145, 145, 1)]">
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 opacity-50 align-middle">
                #CA25
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                <img
                  src="./images/product-img-1.png"
                  alt="product"
                  className="w-[66px] h-[66px] object-cover rounded-sm"
                />
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16">
                Product-name
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                $24.00
              </td>
              <td className="py-10  flex gap-4 items-center justify-end">
                <img
                  src="./images/delete-icon.svg"
                  alt="edit"
                  className="w-6 h-6 object-contain"
                />
                <img
                  src="./images/edit-icon.svg"
                  alt="delete"
                  className="w-6 h-6 object-contain"
                />
                <img
                  src="./images/starred.svg"
                  alt="delete"
                  className="w-6 h-6 object-contain"
                />
              </td>
            </tr>
            <tr className="border-b border-[rgba(150, 145, 145, 1)]">
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 opacity-50 align-middle">
                #CA25
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                <img
                  src="./images/product-img-1.png"
                  alt="product"
                  className="w-[66px] h-[66px] object-cover rounded-sm"
                />
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16">
                Product-name
              </td>
              <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                $24.00
              </td>
              <td className="py-10  flex gap-4 items-center justify-end">
                <img
                  src="./images/delete-icon.svg"
                  alt="edit"
                  className="w-6 h-6 object-contain"
                />
                <img
                  src="./images/edit-icon.svg"
                  alt="delete"
                  className="w-6 h-6 object-contain"
                />
                <img
                  src="./images/starred.svg"
                  alt="delete"
                  className="w-6 h-6 object-contain"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favourite;
