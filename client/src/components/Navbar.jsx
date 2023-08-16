import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMarketplacePage = location.pathname === "/marketplace"; // Check if it's the marketplace page

  return (
    <>
      <div className="z-20 mobile:px-10 lg:px-[10vw] lg:text-[18px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex items-center justify-between font-normal shadow-md fixed nav-light txt-light">
        <div className="cursor-pointer w-[60%] md:w-[20%] flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="./assets/Group 5.svg"
              alt="Logo"
              className="w-auto h-10 mx-2"
            />
            <h1 className="font-bold">CoinZ</h1>
          </Link>
        </div>
        {isHomePage && (
          <ul className="lg:justify-around md:justify-between items-center sm:flex hidden mt-2">
            {/* Menu items */}
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#home" style={{ fontSize: 15 }}>
                Home
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#features" style={{ fontSize: 15 }}>
                Features
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#about" style={{ fontSize: 15 }}>
                About Us
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <Link to="/marketplace" style={{ fontSize: 15 }}>
                Marketplace
              </Link>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#faq" style={{ fontSize: 15 }}>
                FAQs
              </a>
            </li>
          </ul>
        )}
        {!isMarketplacePage && (
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="justify-end mt-1 items-center sm:hidden w-8"
          >
            <img id="menu" alt="hamburger menu" src="./assets/menu-dark.png" />
          </button>
        )}
      </div>

      {toggle && isHomePage && (
        <div className="fixed sm:invisible top-[10.5%] divide-y divide-gray-100 nav-light txt-light shadow w-full">
          {/* Mobile menu */}
          <ul className="py-2 text-sm" onClick={() => setToggle(false)}>
            <li>
              <a
                href="#home"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
