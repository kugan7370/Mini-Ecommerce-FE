import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import { getProduct, updateProduct } from "../api/Product";

function EditProducts() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [sku, setSku] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProduct(productId);
        setSku(product.SKU);
        setProductName(product.productName);
        setQuantity(product.quantity);
        setDescription(product.description);
        setPrice(product.price);
        setImages(product.images);
      } catch (error) {
        toast.error("Error fetching product data");
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
    setImages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("SKU", sku);
    formData.append("productName", productName);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("price", price);

    newImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await updateProduct(productId, formData);
      toast.success("Product updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error updating product");
      console.error("Error updating product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-20">
      <Header />
      <div className="px-[102px]">
        <MainTitle title="PRODUCTS" isEditProduct={true} />
      </div>

      {/* edit products */}
      <div className="px-[161px] flex-col space-y-[56px]">
        <div className="w-full flex justify-between items-center">
          {/* SKU */}
          <div className="flex gap-[30px]">
            <label
              htmlFor="sku"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              SKU
            </label>
            <input
              type="text"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>

          {/* price */}
          <div className="flex gap-[44px]">
            <label
              htmlFor="price"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>
        </div>

        {/* product name and quantity */}
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-[30px]">
            <label
              htmlFor="product-name"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              Name
            </label>
            <input
              type="text"
              id="product-name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>
          <div className="flex gap-[44px]">
            <label
              htmlFor="quantity"
              className="text-secondary-16 text-[19px] font-Satoshi-Medium"
            >
              QTY
            </label>
            <input
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border-none outline-none w-[400px] bg-secondary-F7 rounded-md p-2"
            />
          </div>
        </div>

        {/* product description */}
        <div className="w-full flex flex-col space-y-[10px]">
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            {newImages.length > 0
              ? newImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt="product"
                    className="w-[85px] h-[85px] object-contain rounded-[10px]"
                  />
                ))
              : images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt="product"
                    className="w-[85px] h-[85px] object-contain rounded-[10px]"
                  />
                ))}
          </div>
          <div>
            <input
              type="file"
              id="image"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image"
              className="border-b-[1px] border-b-primary outline-none text-primary font-sans cursor-pointer text-center inline-block"
            >
              Add Images
            </label>
          </div>
        </div>

        {/* update product button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white w-[249px] py-[15px] px-[45px] h-[56px] rounded-md font-Satoshi-Bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
