import React from "react";
import { useFilterContext } from "../contex/filterContext";

const FilterSection = () => {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    updetFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (products, data) => {
    let newValue = products.map((currElm) => currElm[data]);
    return ["All", ...new Set(newValue)];
  };

  const categoryData = getUniqueData(all_products, "category");

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
      {/* Search Input */}
      <label className="text-2xl font-bold block mb-2">Search</label>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="text"
          value={text}
          onChange={updetFilterValue}
          placeholder="Search products..."
        />

        {/* Category Filter */}
        <div>
          <h4 className="text-2xl font-bold mb-3">Category</h4>
          <div className="flex flex-wrap gap-3">
            {categoryData.map((elem, index) => (
              <button
                key={index}
                type="button"
                name="category"
                value={elem}
                onClick={updetFilterValue}
                className="capitalize px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
              >
                {elem}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="text-2xl font-bold mb-3">Price</h4>
          <p className="text-lg font-medium">Price: ₹{price}</p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updetFilterValue}
            className="w-full cursor-pointer accent-blue-600"
          />
        </div>

        {/* Clear Filters Button */}
        <button
          type="button"
          className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 transition"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default FilterSection;
