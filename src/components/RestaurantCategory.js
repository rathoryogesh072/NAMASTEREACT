import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
        setShowIndex();
    }
    return(
        <div>
            <div className="w-6/12 bg-gray-300 shadow-lg mx-auto my-4">
                <div onClick={handleClick} className=" cursor-pointer flex justify-between">
                <span>{data.title}  ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                {showItems==true && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;
