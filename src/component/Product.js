import React from 'react'
import GridViwe from "./GridViwe";
import ListViwe from "./ListViwe";
import { useFilterContext } from "../contex/filterContext";
import ShimmerUi from "./ShimmerUi"

const Product = () => {
const {filter_products , grid_viwe } = useFilterContext();

  if (grid_viwe) {
    return <GridViwe products={filter_products}/>
  }
  return(
    <ListViwe products={filter_products} />
  )
  
}

export default Product
