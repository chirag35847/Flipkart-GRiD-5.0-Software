import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Sales = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const truncatedTitle = product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title;

  const formattedRating = product.rating.rate.toFixed(1);

  return (
    <section>
      <div className="seller container">
        <div className="best-seller">
          <div className="best-p1 mb-4">
            <div className="image-container">
              <img src={product.image} alt="Product" className="expand-on-hover" />
              <div className="rating-badge">
                <span className="rating-value">{formattedRating}</span>
                <AiFillStar className="star-icon" />
              </div>
            </div>
            <div className="best-p1-txt">
              <div className="name-of-p">
                <p className="font-medium text-white mt-3 mb-2">{truncatedTitle}</p>
              </div>
              <div className="price">
                ${product.price}
                <div className="colors flex items-center gap-x-2">
                  <BsFillCircleFill className="red"/>
                  <BsFillCircleFill className="blue"/>
                  <BsFillCircleFill className="white"/>
                </div>
              </div>
              <div className="buy-now">
                <button>
                  <a href={product.link}>Buy Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
