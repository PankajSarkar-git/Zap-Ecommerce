import React from "react";
import ItemCategoryCard from "./ItemCategoryCard";
import { Link } from "react-router-dom";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((items, index) => (
        <Link to={"/ProductList/" + items.id} key={items.id}>
          <ItemCategoryCard items={items} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default GridView;
