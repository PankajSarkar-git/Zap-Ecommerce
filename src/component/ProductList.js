import React from "react";
import Sort from "./Sort";
import Product from "./Product";
import FIlterSection from "./FIlterSection";

const ProductList = () => {
  return (
    <div className="bg-gray-200 pt-[10vh] ">
      <div className="flex mt-10 px-28 gap-10 ">
        <div className="h-[90vh] w-1/4 ">
          <FIlterSection />
        </div>
        <section className="w-3/4 px-4">
          <div>
            <Sort />
          </div>
          <div>
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
