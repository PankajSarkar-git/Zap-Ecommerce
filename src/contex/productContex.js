import { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../utills/constant";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContex = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( reducer, initialState);

  const getProducts = async (Api) => {
    dispatch({type:"SET_LOADING" })
    try {
      const res = await axios.get(Api);
      const products = await res.data;
    //   console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
        dispatch({type:"API_ERROR" })
    }
  };

  useEffect(() => {
    getProducts(API_URL);
  }, []);

  return (
    <AppContex.Provider value={{ ...state }}>{children}</AppContex.Provider>
  );
};

// custom hook

const useProductsContext = () => {
  return useContext(AppContex);
};

export { AppProvider, AppContex, useProductsContext };
