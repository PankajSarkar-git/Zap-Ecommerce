import ItemCategoryCard from "./ItemCategoryCard";
// import useProducts from "../utills/useProducts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contex/productContex";
import { useState } from "react";

const ItemCategory = () => {
  const { isLoading, products } = useProductsContext();

  return isLoading ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="bg-gray-200">
        <p className="p-2 pt-6 text-3xl text-center">Our Store</p>
        <div className="flex justify-around flex-wrap px-6 sm:px-12 md:px-24 lg:px-36 py-4">
          {products.map((item) => (
            <Link to={`/ProductList/${item.id}`} key={item.id}>
              <ItemCategoryCard items={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemCategory;
