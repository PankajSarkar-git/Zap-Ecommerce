import React from "react";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const ListView = ({ products }) => {
  if (products.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="flex flex-col gap-4 p-1.5">
      {products.map((items) => {
        const { image, category, description, price, rating, title, id } =
          items;
        return (
          <Link to={`/ProductList/${id}`} key={id} className="block">
            <div className="flex flex-col md:flex-row bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200">
              {/* Image Section */}
              <div className="flex-shrink-0 flex justify-center items-center p-1.5 ">
                <img
                  src={image}
                  alt={title}
                  className="w-full  max-w-[200px] object-cover rounded-lg max-h-[200px]"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-1 capitalize">
                    {category}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {description.substring(0, 100)}...
                  </p>
                </div>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 text-white text-sm font-semibold rounded-md ${
                      rating.rate > 3.8 ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {rating.rate} ⭐
                  </span>
                  <p className="text-xl font-bold text-gray-900">
                    MRP: ₹{price}
                  </p>
                </div>
                <button className="w-full py-2 mt-2.5 max-w-[200px] text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListView;
