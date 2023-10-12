import { useEffect, useState } from "react"
import { API_URL } from "./constant";


const useProductDetails = (productID) => {
const [data , setData] = useState([]);

    useEffect(()=>{
        fatchData()
    },[])

    const fatchData = async() => {
        const data = await fetch(API_URL + `/${productID}`);
        const json = await data.json();
        setData(json)
    }

    return data;
}

export default useProductDetails;