import { useState,useEffect } from "react";
import { Rest_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [menuData,setMenuData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(Rest_URL+resId);
        const json=await data.json();
        setMenuData(json);
    }
    return menuData;
}

export default useRestaurantMenu;