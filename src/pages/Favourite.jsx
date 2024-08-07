import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import SearchHeader from "../components/SearchHeader";

function Favourite() {
  return (
    <div>
      <Header />
      <MainTitle title="FAVOURITE PRODUCTS" />

      <SearchHeader />

      {/* table section */}
      <div className="px-[144px]  py-[33px] w-full ">
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
