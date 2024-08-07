import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/Product";
import Search from "./Search";
import TableData from "../components/TableData";
import SearchHeader from "../components/SearchHeader";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        console.log("Products:", products);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <MainTitle title="Products" />
      {/* search section */}
      <SearchHeader />

      {/* table section */}
      {products && <TableData products={products} />}
    </div>
  );
}

export default Product;
