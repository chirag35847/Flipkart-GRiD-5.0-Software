import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import NavBar from "./Navbar";

const ProductHome = () => {
  return (
    <>
    {/* <NavBar/> */}
      <section>
        <div className="home_page ">
          <div className="home_img ">
            <img src="https://media.istockphoto.com/id/537892088/photo/classy-stylish-girl.jpg?s=612x612&w=0&k=20&c=tILekpWzJJza9F8otOy4Mg32IB7sh13G_YQi7tTgdCE=" alt="img " />
          </div>
          <div className="home_txt ">
            <p className="collection">SUMMER COLLECTION</p>
            <h2 className="text-gray">
              FALL - WINTER
              <br />
              Collection 2023
            </h2>
            <div className="home_label ">
              <p className="text-stone-200">
                A specialist label creating luxury essentials. Ethically crafted
                <br />
                with an unwavering commitment to exceptional quality.
              </p>
            </div>
            <button>
              <a href="#sellers">SHOP NOW</a>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
            <div className="home_social_icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHome;
