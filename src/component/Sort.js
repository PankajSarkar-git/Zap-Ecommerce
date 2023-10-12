import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../contex/filterContext";

const Sort = () => {
  const {grid_viwe , setGridViwe, setListViwe ,filter_products ,sorting,sorting_product} = useFilterContext();
  return (
    <div className="h-[10vh] w-full flex items-center justify-between ">
      <div className="text-xl px-3 flex gap-2">
        <div className={grid_viwe ? "bg-gray-400 rounded-full p-3" : "hover:bg-gray-400 hover:rounded-full p-3"} onClick={setGridViwe}>
          <BsGrid1X2Fill  />
        </div>
        <div className={!grid_viwe ? "bg-gray-400 rounded-full p-3" : "hover:bg-gray-400 hover:rounded-full p-3"} onClick={setListViwe}>
          <FaList />
        </div>
      </div>
      <div>
        <p>{filter_products.length} products available</p>
      </div>
      <div className="">
        <form action="#">
          <label htmlFor="sort" ></label>
          <select name="" id="sort" className="text-xl" onClick={sorting} >
            <option value="default">Default</option>
            <option value="lowToHingh">Low to high</option>
            <option value="highToLow">high to Low</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
