import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
  return (
    <>
      <div className="best-p1 border p-2 text-white rounded-sm shadow-lg cursor-pointer hover:shadow-2xl">
        <img src={product?.image} alt="img" />
        <div className="best-p1-txt">
          <div className="name-of-p mt-2 px-1 text-white">
            <p className="text-capitalize">{product?.title}</p>
          </div>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price px-1 font-semibold text-yellow-500">
            $ {product?.price}
            <div className="colors">
              <i className="bx bxs-circle red"></i>
              <i className="bx bxs-circle blue"></i>
              <i className="bx bxs-circle white"></i>
            </div>
          </div>
          <div className="text-center mt-2 mb-5">
         
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm cursor-pointer font-medium text-white focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;


