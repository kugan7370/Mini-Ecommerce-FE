import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import { getProducts } from "../api/Product";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [products, setProducts] = useState([]);
  const [hasResults, setHasResults] = useState(true);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(query || "");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(`/product?productName=${query}`);
        if (products.length === 0) {
          setHasResults(false);
        } else {
          setHasResults(true);
        }
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setHasResults(false);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Header />
      <MainTitle title="Product" />

      {/* search section */}
      <SearchHeader />
      {/* 
      <div className="flex items-center justify-between gap-2 px-[59px] w-full">
        <div className="flex gap-2 py-2 px-4 w-3/5 bg-secondary-F7 rounded-full">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-none outline-none rounded-md flex-1 p-2 bg-secondary-F7"
          />
          <button
            className="bg-primary text-white gap-2 py-2 px-4 w-[180px] rounded-3xl font-Satoshi-Bold flex items-center justify-center"
            onClick={handleSearch}
          >
            <img
              src="./images/search.png"
              alt="search"
              className="w-4 h-4 object-contain"
            />
            Search
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-primary text-white py-2 px-4 h-[56px] w-[180px] rounded-md font-Satoshi-Bold"
            onClick={() => navigate("/addProduct")}
          >
            Add Product
          </button>
          <div className="border border-primary p-2 h-[56px] rounded-md flex items-center justify-center">
            <img
              src="./images/star.svg"
              alt="filter"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div> */}

      {/* search count */}
      <div className="px-[59px] py-[33px] w-full">
        <p className="text-secondary-16 opacity-50 text-[24px] font-Satoshi-Bold">
          {hasResults
            ? `${products.length} results found for ‘${query}’`
            : "No results found"}
        </p>
      </div>

      {/* search list */}
      <div className="px-[140px] py-[33px] w-full">
        {hasResults &&
          products.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between border-b px-[47px] py-6"
            >
              <div className="flex-col space-y-2">
                <h1 className="text-[14px] font-Satoshi-Medium text-primary">
                  {product.SKU}
                </h1>
                <h1 className="text-[19px] font-Satoshi-Bold text-secondary-16">
                  {product.productName}
                </h1>
                <p className="text-[14px] font-Satoshi-Regular text-secondary-16">
                  {product.description}
                </p>
              </div>
              <div className="right">
                <img
                  src="./images/arrow.svg"
                  alt="product"
                  className="w-[32px] h-[32px] object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
