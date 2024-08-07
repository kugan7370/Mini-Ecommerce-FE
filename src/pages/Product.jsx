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
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  return (
    <div>
      <Header />
      <MainTitle title="Products" />
      {/* search section */}
      <SearchHeader />

      {/* table section */}
      <TableData products={products} onProductDelete={handleProductDelete} />
    </div>
  );
}

export default Product;
