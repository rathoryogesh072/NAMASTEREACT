import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Rest_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const menuData=useRestaurantMenu(resId);
    
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