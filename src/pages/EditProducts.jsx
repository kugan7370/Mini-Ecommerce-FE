import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";

function EditProducts() {
  return (
    <div className="mb-20">
      <Header />
      <div className="px-[102px]">
        <MainTitle title="PRODUCTS" isEditProduct={true} />
      </div>

      {/* add products */}
      <div className="px-[161px]   flex-col space-y-[56px]">
        {/* SKU */}
        <div className="w-full flex gap-[44px]">
          <label
            htmlFor="sku"
            className="text-secondary-16 text-[19px] font-Satoshi-Medium"
          >
            SKU
          </label>
          <input
            type="text"
            id="sku"
            className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
          />
        </div>

        {/* product name and quantity */}
        <div className="w-full flex justify-between items-center">
          <div className="flex  gap-[30px]">
            <label
              htmlFor="product-name"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              Name
            </label>
            <input
              type="text"
              id="product-name"
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>
          <div className="flex  gap-[44px]">
            <label
              htmlFor="quantity"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              QTY
            </label>
            <input
              type="text"
              id="quantity"
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>
        </div>

        {/* product description */}
        <div className=" w-full flex flex-col space-y-[10px]">
          <label
            htmlFor="description"
            className="text-secondary-16 text-[19px] font-Satoshi-Medium"
          >
            Product Description
          </label>
          <p className="text-secondary-16 opacity-50 text-[14px] font-Satoshi-Medium">
            A small description about the product
          </p>

          <textarea
            name="description"
            id="description"
            className="border-none outline-none w-full h-[89px] bg-secondary-F7 rounded-md p-2"
          ></textarea>
        </div>

        {/* add image */}
        <div className="w-full flex gap-[44px]">
          <label
            htmlFor="image"
            className="text-secondary-16 text-[19px] font-Satoshi-Medium"
          >
            Product Images
            <p className="text-secondary-16 opacity-50 w-[166px] mt-[15px] text-[14px] font-Satoshi-Medium">
              JPEG, PNG, SVG or GIF (Maximum file size 50MB)
            </p>
          </label>
          {/* image display */}
          <div className="flex gap-[10px]">
            <img
              src="./images/product-img-1.png"
              alt="product"
              className="w-[85px] h-[85px] object-contain rounded-[10px]"
            />
            <img
              src="./images/product-img-2.png"
              alt="product"
              className="w-[85px] h-[85px] object-contain rounded-[10px]"
            />
            <img
              src="./images/product-img-3.png"
              alt="product"
              className="w-[85px] h-[85px] object-contain rounded-[10px]"
            />
          </div>
          <div>
            <input type="file" id="image" className="hidden" />
            <label
              htmlFor="image"
              className="border-b-[1px] border-b-primary outline-none text-primary font-sans   cursor-pointer text-center inline-block"
            >
              Add Images
            </label>
          </div>
        </div>

        {/* add product button */}
        <div className="flex justify-end">
          <button className="bg-primary text-white w-[249px] py-[15px] px-[45px] h-[56px]  rounded-md font-Satoshi-Bold">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
