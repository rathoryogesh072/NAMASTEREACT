import { useState } from "react";
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>(
                    setListOfRestaurants(listOfRestaurants.filter((i)=>i.info.avgRating>4.2))
                    )} onMouseOver={()=>(console.log("mouse overed"))}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((dhaba)=>{
                    return <RestaurantCard key={dhaba.info.id} resData={dhaba}/>
                })}
            </div>
        </div>
    )
}

export default Body;