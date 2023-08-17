import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import CheckoutModal from "./CheckoutModal"; 

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!productDetails) {
    return (
      <div className="loader-container bg-black" id="loader-container">
        <div className="loader">
          <div className="rotatingLoader"></div>
        </div>
      </div>
    );
  }

  const descriptionPoints = productDetails.description.split(". ");

  return (
    <div className="bg-gradient-to-br from-black to-gray-600 min-h-fit text-white">
      <NavBar />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-16">
          <div className="product_images bg-cover bg-center flex justify-center items-center overflow-hidden transform hover:scale-105 transition-transform relative ">
          
          <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full md:rounded-md overflow-hidden"
              style={{ maxWidth: '70%', height: '60%' }}
            />
          </div>
          <div
            className="product_details p-4 md:p-3 shadow-lg relative z-10"
            style={{ backgroundColor: "#161616" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
              {productDetails.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 md:mb-6">
              ${productDetails.price}
            </h3>

            <div className="mb-4 md:mb-6">
              <p className="text-sm md:text-base">
                Verified Availability:{" "}
                <span className="text-blue-400">In-Stock</span>
              </p>
              <p className="text-sm md:text-base">
                Token ID: <span className="text-blue-400">{productId}</span>
              </p>
              <p className="text-sm md:text-base">
                Tags:{" "}
                <span className="text-blue-400">Fashion, Blockchain, NFT</span>
              </p>
            </div>

            <ul className="list-disc pl-6 mb-2 md:mb-4">
              {descriptionPoints.map((point, index) => (
                <li key={index} style={{ fontSize: "16px" }}>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mb-2 md:mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
            >
                Buy Now
              </button> 
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CheckoutModal
          productDetails={productDetails}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
