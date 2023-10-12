import React from "react";
import ItemCategoryCard from "./ItemCategoryCard";
import { Link } from "react-router-dom";

const GridViwe = ({ products }) => {
 
 
  return (
    <div className="flex flex-wrap">
      {products.map((items, index) => {
        return (
          <Link to={"/ProductList/" + items.id} key={items.id}>
            <ItemCategoryCard items={items} index={index} />
          </Link>
        );
      })}
    </div>
  );
};

export default GridViwe;
