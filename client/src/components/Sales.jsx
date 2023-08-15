import React, { useState } from "react";
// import { BiStar, BiCircle } from 'react-icons/bi';
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Sales = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <section>
      <div className="seller container">
        <div className="best-seller">
          <div className="best-p1">
            <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
            <div className="best-p1-txt">
              <div className="name-of-p">
                <p className="font-medium text-white">PS England Shoes</p>
              </div>
              <div
                className="rating flex items-center"
                style={{ color: "gold" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="price">
                $37.24
                <div className="colors flex items-cemter gap-x-2">
                  <BsFillCircleFill className="red" onClick={() => handleColorClick('red')}/>
                  <BsFillCircleFill className="blue" onClick={() => handleColorClick('blue')} />
                  <BsFillCircleFill className="white" onClick={() => handleColorClick('white')}/>
                </div>
              </div>
              <div className="buy-now">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                    Buy Now
                  </a>
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
