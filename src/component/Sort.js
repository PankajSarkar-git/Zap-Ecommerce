import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../contex/filterContext";

const Sort = () => {
  const {
    grid_viwe,
    setGridViwe,
    setListViwe,
    filter_products,
    sorting,
  } = useFilterContext();

  return (
    <div className="h-[10vh] w-full flex flex-wrap items-center justify-between bg-white shadow-md px-4 py-3 rounded-lg">
      
      {/* Grid & List View Toggle */}
      <div className="text-xl flex gap-3">
        <button
          className={`p-3 rounded-lg transition ${
            grid_viwe ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={setGridViwe}
        >
          <BsGrid1X2Fill />
        </button>
        <button
          className={`p-3 rounded-lg transition ${
            !grid_viwe ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={setListViwe}
        >
          <FaList />
        </button>
      </div>

      {/* Products Count */}
      <div className="text-lg font-medium">
        {filter_products.length} products available
      </div>

      {/* Sorting Dropdown */}
      <div>
        <form>
          <label htmlFor="sort" className="hidden">Sort By:</label>
          <select
            id="sort"
            className="text-lg px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={sorting}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
