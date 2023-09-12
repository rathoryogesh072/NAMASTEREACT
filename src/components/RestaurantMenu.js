import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Rest_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const menuData=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);
    if(menuData===null){
       return <Shimmer/>;
    }
    // console.log(menuData);

    const categories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
//    console.log(categories);

    const {name}=menuData?.data?.cards[0]?.card?.card?.info;
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">Menu</h2>
            {categories.map((item,index)=>(
                <RestaurantCategory  
                data={item?.card?.card}
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;