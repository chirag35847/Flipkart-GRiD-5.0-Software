import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

const ProductHome = () => {
  return (
    <>
      {/* <NavBar/> */}
      <section>
        <NavBar />

        <div className="home_page flex justify-center items-center">
          <div className="home_img ">
            <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
          </div>
          <div className="home_txt ">
            <h2 className="text-gray">
              Web3
              <br />
              Marketplace
            </h2>
            <div className="home_label ">
              <p className="text-stone-200">
                Flipkart Grid 5.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHome;
