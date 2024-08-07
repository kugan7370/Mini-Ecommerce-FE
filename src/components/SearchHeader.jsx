import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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
    <div className="flex  items-center justify-between gap-2 px-[59px] w-full">
      <div className="flex gap-2 py-2 px-4 w-3/5 bg-secondary-F7 rounded-full">
        <input
          type="text"
          placeholder="Search for products"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-none outline-none  rounded-md  flex-1 p-2 bg-secondary-F7"
        />
        <button
          className="bg-primary text-white gap-2  py-2 px-4 w-[180px] rounded-3xl font-Satoshi-Bold flex items-center justify-center"
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
      <div className="flex items-center  gap-4">
        <button
          className="bg-primary text-white  py-2 px-4 h-[56px] w-[180px] rounded-md font-Satoshi-Bold"
          onClick={() => navigate("/addProduct")}
        >
          Add Product
        </button>

        <div className="border border-primary p-2  h-[56px] rounded-md flex items-center justify-center">
          <Link to="/favourite">
            <img
              src="./images/star.svg"
              alt="filter"
              className="w-8 h-8 object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
