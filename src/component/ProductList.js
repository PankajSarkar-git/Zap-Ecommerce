import React from "react";
import Sort from "./Sort";
import Product from "./Product";
import FilterSection from "./FIlterSection";

const ProductList = () => {
  return (
    <div className="bg-gray-100 pt-[10vh] min-h-screen">
      <div className="container mx-auto px-5 lg:px-10 py-5">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section (Sticky Sidebar) */}
          <aside className="w-full lg:w-1/4 rounded-lg sticky top-[12vh] h-fit">
            <FilterSection />
          </aside>

          {/* Product List Section */}
          <section className="w-full lg:w-3/4 flex flex-col h-[80vh]">
            {/* Sorting Section (Sticky Top) */}
            <div className="rounded-lg mb-4 sticky top-[12vh] z-20">
              <Sort />
            </div>

            {/* Product Grid/List (Scrollable) */}
            <div className=" rounded-lg flex-1 overflow-y-auto">
              <Product />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
