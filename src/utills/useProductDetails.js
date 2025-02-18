import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useProductDetails = (productID) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fatchData();
  }, [productID]);

  const fatchData = async () => {
    setIsLoading(true);
    const data = await fetch(API_URL + `/${productID}`);
    const json = await data.json();
    setData(json);
    setIsLoading(false);
  };

  return { data, isLoading };
};

export default useProductDetails;
