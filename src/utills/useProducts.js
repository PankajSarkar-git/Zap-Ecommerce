import { useEffect, useState } from "react"
import { API_URL } from "./constant";

const useProducts = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fatchData();
    }, [])

    const fatchData = async() => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setData(json)
    }
    return data;
}

export default useProducts;