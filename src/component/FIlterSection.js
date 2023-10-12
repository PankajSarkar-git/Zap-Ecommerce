import React from "react";
import { useFilterContext } from "../contex/filterContext";

const FIlterSection = () => {
  const {
    filters: { text, category , price, maxPrice, minPrice },
    updetFilterValue,
    all_products,
    clearFilters
  } = useFilterContext();

  const getUniqueData = (products, data) => {
    let newValue = products.map((currElm) => {
      return currElm[data];
    });
    newValue = ["All", ...new Set(newValue)];
    return newValue;
  };

  const categoryData = getUniqueData(all_products, "category");
  const priceData = getUniqueData(all_products, "price");
  // console.log(categoryData);

  return (
    <div className="p-5 text-xl">
      <label htmlFor="" className="text-2xl font-bold my-3">Search</label>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full mt-2 text-3xl"
          type="text"
          name="text"
          value={text}
          onChange={updetFilterValue}
          placeholder="Search"
        />

        <div className="">
          <h4 className=" text-2xl font-bold my-3">Category</h4>
          <div className="flex flex-col gap-2 items-start px-5 ">
            {categoryData.map((elem) => {
              return (
                <button
                  type="button"
                  name="category"
                  value={elem}
                  onClick={updetFilterValue}
                  className="capitalize p-2 bg-blue-300 rounded-lg hover:bg-blue-800 "
                >
                  {elem}
                </button>
              );
            })}
          </div>
        </div>
        <div>
        <h4 className=" text-2xl font-bold my-3">Price</h4>
          <div>
            <p> Price : {price} </p>
            <div>
              <input type="range" name="price" id="" min={minPrice} max={maxPrice} value={price}  onChange={updetFilterValue} className=" w-full " />
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="border border-black bg-blue-800 text-white p-2 m-2 hover:bg-blue-300 hover:text-black" onClick={clearFilters}> Clear Filters</button>
        </div>
      </form>
    </div>
  );
};

export default FIlterSection;
