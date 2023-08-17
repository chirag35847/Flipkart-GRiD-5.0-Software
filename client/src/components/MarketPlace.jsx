import React, { useState } from "react";
import ProductHome from "./ProductHome";
import Sales from "./Sales";
import Footer from "./Footer";
import { useUserDataContext } from "../contexts/UserContextProvider";

const Marketplace = () => {
  const { products } = useUserDataContext();
  const [sortOrder, setSortOrder] = useState("bestRating");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleSortOrderChange = (event) => setSortOrder(event.target.value);
  const handleCategoryFilterChange = (event) =>
    setCategoryFilter(event.target.value);

  const filteredProducts = products.filter((product) => {
    if (categoryFilter === "All") {
      return true;
    }
    return product.category === categoryFilter;
  });

  const sortedAndFilteredProducts = filteredProducts.slice().sort((productA, productB) => {
    const priceA = parseFloat(productA.price);
    const priceB = parseFloat(productB.price);
    const ratingA = parseFloat(productA.rating.rate);
    const ratingB = parseFloat(productB.rating.rate);

    if (sortOrder === "lowToHigh") {
      return priceA - priceB;
    } else if (sortOrder === "highToLow") {
      return priceB - priceA;
    } else if (sortOrder === "bestRating") {
      return ratingB - ratingA;
    }
  });

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <ProductHome />
      <div className="mt-14 px-6">
        <div className="mt-14 px-6 flex items-center justify-between mb-4">
          <h1 className="font-semibold text-white" id="sellers">
            Top Sales
          </h1>
          <div className="flex justify-end">
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="p-2 rounded-md bg-gray-800 text-white"
          >
            <option value="bestRating">Best Rating</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <select
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="p-2 ml-4 rounded-md bg-gray-800 text-white"
          >
            <option value="All">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
          {sortedAndFilteredProducts.map((product, i) => (
            <Sales product={product} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
