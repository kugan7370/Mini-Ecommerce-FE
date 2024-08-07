import React from "react";
import { Link } from "react-router-dom";

function TableData({ products }) {
  const handleDelete = (productId) => {
    console.log("Deleting product with id:", productId);
  };
  return (
    <div className="px-[144px] py-[33px] w-full">
      {products.length > 0 && (
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
                    className="w-6 h-6 object-contain"
                    onClick={() => handleDelete(product._id)}
                  />
                  <Link to={`/editProduct/${product._id}`}>
                    <img
                      src="./images/edit-icon.svg"
                      alt="edit"
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                  <img
                    src="./images/starred.svg"
                    alt="star"
                    className="w-6 h-6 object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableData;
