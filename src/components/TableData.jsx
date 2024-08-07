import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { deleteProduct } from "../api/Product";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../features/FavouriteSlicer";

function TableData({ products, onProductDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const favourites = useSelector((state) => state.favourite.favourite);
  const dispatch = useDispatch();

  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    console.log("Deleting product with id:", productToDelete);

    try {
      await deleteProduct(productToDelete);
      toast.success("Product deleted successfully!");
      onProductDelete(productToDelete); // Inform the parent component about the deletion
    } catch (error) {
      toast.error("Error deleting product");
      console.error("Error deleting product:", error);
    }

    // Close the modal
    setShowModal(false);
    setProductToDelete(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  const toggleFavourite = (product) => {
    console.log("Toggling favourite for favourites:", favourites);
    if (favourites.find((item) => item._id === product._id)) {
      dispatch(removeFavourite(product));
    } else {
      dispatch(addFavourite(product));
    }
  };

  return (
    <div className="px-[144px] py-[33px] w-full">
      {products.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
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
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b border-[rgba(150, 145, 145, 1)]"
              >
                <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 opacity-50 align-middle">
                  {product.SKU}
                </td>
                <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].name}
                    className="w-[66px] h-[66px] object-cover rounded-sm"
                  />
                </td>
                <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16">
                  {product.productName}
                </td>
                <td className="py-6 px-4 font-Satoshi-Medium text-[19px] text-secondary-16 align-middle">
                  ${product?.price?.toFixed(2) || 0}
                </td>
                <td className="py-10 flex gap-4 items-center justify-end">
                  <img
                    src="./images/delete-icon.svg"
                    alt="delete"
                    className="w-6 h-6 object-contain cursor-pointer"
                    onClick={() => handleDeleteClick(product._id)}
                  />
                  <Link to={`/editProduct/${product._id}`}>
                    <img
                      src="./images/edit-icon.svg"
                      alt="edit"
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                  <img
                    src={
                      favourites.find((item) => item._id === product._id)
                        ? "./images/starred.svg"
                        : "./images/star.svg"
                    }
                    alt="star"
                    className="w-6 h-6 object-contain cursor-pointer"
                    onClick={() => toggleFavourite(product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available</p>
      )}
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default TableData;
