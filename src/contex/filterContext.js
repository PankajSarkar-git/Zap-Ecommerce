import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./productContex";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_viwe: false,
  sorting_product: "default",
  filters: {
    text: "",
    maxPrice: 0,
    price : 0,
    minPrice : 0,
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  const setGridViwe = () => {
    return dispatch({ type: "SET_GRID_VIWE" });
  };
  const setListViwe = () => {
    return dispatch({ type: "SET_List_VIWE" });
  };
  const sorting = (e) => {
    dispatch({ type: "GET_SHORT_VALUE", payload: e.target.value });
  };

  // filter

  const updetFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type:"UPDATE_FILTER_VALUE", payload:{ name, value } });
  };
const clearFilters = () => {
dispatch({type : "CLEAR_FILTERS"})
}
  useEffect(() => {
    dispatch({type: "UPDATE_FILTERS_PRODUCTS"})
    dispatch({ type: "SHORTING_PRODUCTS" });
  }, [state.sorting_product , state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridViwe, setListViwe, sorting, updetFilterValue ,clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext, FilterContext };
