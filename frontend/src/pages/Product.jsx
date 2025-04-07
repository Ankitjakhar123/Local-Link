import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ReactImageMagnify from "react-image-magnify";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setSelectedImage(found.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Loading product...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(productData._id, selectedSize);
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10 pt-28">
      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Thumbnails + Main Image */}
        <div className="flex gap-4 w-full lg:w-[50%]">
          {/* Thumbnails */}
          <div className="mr-4 lg:sticky top-10">
            {/* Mobile: horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto lg:hidden mb-4">
              {productData.image.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-200"
                  }`}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>

            {/* Desktop: vertical scroll */}
            <div className="hidden lg:flex flex-col gap-2 overflow-y-auto max-h-[500px]">
              {productData.image.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-200"
                  }`}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full border rounded-lg p-2 bg-white">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: productData.name,
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          <div className="text-gray-600 text-sm">
            {productData.description.slice(0, 90)}...
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span className="text-gray-500 ml-2 text-sm">(203 reviews)</span>
          </div>

          <div className="text-2xl font-bold text-black">
            ₹{productData.price}
          </div>

          <div className="text-green-600 text-sm font-semibold">
            100% Original Product
          </div>

          <div className="text-sm text-gray-500 mt-2">
            Cash on delivery is available on this product.
          </div>

          {/* Size Selection */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Select Size:</p>
            {productData.sizes?.length > 0 ? (
              <div className="flex gap-3">
                {productData.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded px-4 py-1 ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Sizes not available</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="px-5 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
            <button className="border p-2 rounded hover:scale-105 transition">
              <AiOutlineHeart size={20} />
            </button>
            <button className="border p-2 rounded hover:scale-105 transition">
              <FaShareAlt size={18} />
            </button>
          </div>

          <div className="border-t border-gray-200 my-6" />

          <div className="text-sm text-gray-500">
            Return and exchange policy: Return within 7 days.
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-2">Product Description</h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {productData.description}
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="border rounded p-3">
            <p className="font-medium text-black">Rahul Sharma</p>
            <p>Great product quality! Worth the price.</p>
          </div>
          <div className="border rounded p-3">
            <p className="font-medium text-black">Neha Singh</p>
            <p>Size fits perfectly. Delivery was fast too.</p>
          </div>
        </div>
      </div>

      {/* Write Review */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Write your review here..."
            className="w-full border p-2 rounded h-24"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Related Products */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products
            .filter(
              (item) =>
                item.category === productData.category &&
                item._id !== productData._id
            )
            .slice(0, 4)
            .map((related) => (
              <a
                href={`/product/${related._id}`}
                key={related._id}
                className="border rounded-lg p-3 hover:shadow-md transition bg-white"
              >
                <img
                  src={related.image[0]}
                  className="w-full h-40 object-cover rounded mb-2"
                  alt={related.name}
                />
                <h3 className="text-sm font-medium">{related.name}</h3>
                <p className="text-gray-600 text-sm">₹{related.price}</p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
