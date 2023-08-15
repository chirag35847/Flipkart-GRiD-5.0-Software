import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <>
      <div class="item">
        <div class="img-box">
          <img
            src="https://source.unsplash.com/1-nx1QR5dTE"
            alt="Awesome Sunglasses"
          />
        </div>
        <div class="details">
          <h2>
            Awesome Sunglasses
            <br />
            <span>Men's Collection</span>
          </h2>
          <div class="price">149$</div>
          <label>Size</label>
          <ul>
            <li>55-14</li>
            <li>58-14</li>
            <li>62-14</li>
          </ul>
          <label>Color</label>
          <ul class="colors">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <a href="#">Add to cart</a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
