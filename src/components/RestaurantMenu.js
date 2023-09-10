import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Rest_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [menuData,setMenuData]=useState(null);
    const {resId}=useParams();
    console.log(resId)
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        const data=await fetch(Rest_URL+resId);
        const json=await data.json();
        console.log(json);
        setMenuData(json);
    }
    if(menuData===null){
       return <Shimmer/>;
    }
    const {name}=menuData?.data?.cards[0]?.card?.card?.info;
    return(
        <div className="menu">
            <h1>{name}</h1>
            {/* <h1>{city}</h1> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;