import React from "react";
import { useUserDataContext } from "../contexts/UserContextProvider";
import ProductCard from "./ProductCard";

const MarketPlace = () => {
  const { products } = useUserDataContext();
  return (
    <>
      <section id="sellers" className="bg-black text-white">
        <div className="seller container">
          <div className="flex justify-between">
            <div><h2>Top Sales</h2></div>
            <div class="dropdown inline-block relative">
              <button class="bg-gray-300 text-gray-700 mt-5 py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">Brands</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul class="dropdown-menu absolute  text-gray-700 pt-1">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            {products.map((product, i) => {
              return <ProductCard product={product} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPlace;
