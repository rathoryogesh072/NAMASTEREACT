import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchString,setSearchString]=useState("");
    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
    
        // Optional Chaining
        setListOfRestaurants(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
      };
    useEffect(()=>{
        fetchData();
    },[]);

    console.log("rendered");
    return listOfRestaurants.length===0 ?(<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="search">
                <input 
                type="text" 
                className="search-box" 
                value={searchString} 
                onChange={(e)=>setSearchString(e.target.value)}/>
                <button 
                onClick={()=>{
                    const searched=listOfRestaurants.filter((item)=>{
                        return item.info.name.toLowerCase().includes(searchString.toLowerCase());
                    })
                    setFilteredRestaurants(searched);
                }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>(
                    setListOfRestaurants(listOfRestaurants.filter((i)=>i.info.avgRating>4.2))
                    )} onMouseOver={()=>(console.log("mouse overed"))}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((dhaba)=>{
                    return <RestaurantCard key={dhaba.info.id} resData={dhaba}/>
                })}
            </div>
        </div>
    )
}

export default Body;