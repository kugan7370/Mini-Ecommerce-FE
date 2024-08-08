import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import SearchHeader from "../components/SearchHeader";
import { useSelector } from "react-redux";
import TableData from "../components/TableData";

function Favourite() {
  const favourites = useSelector((state) => state.favourite.favourite);

  const handleProductDelete = (productId) => {};

  return (
    <div>
      <Header />
      <MainTitle title="FAVOURITE PRODUCTS" />
      <SearchHeader />
      {/* table section */}
      {favourites.length > 0 ? (
        <TableData
          products={favourites}
          onProductDelete={handleProductDelete}
        />
      ) : (
        <p className="px-[144px] py-[33px] w-full text-center text-lg text-secondary-16">
          No favourite products found.
        </p>
      )}
    </div>
  );
}

export default Favourite;
