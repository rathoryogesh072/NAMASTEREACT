import { CDN_URL } from "../utils/constants";

const RestaurantCard=(prop)=>{
    const {resData}=prop;
    const {name,cuisines,avgRating}=resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

//Higher Order Components
//it takes componenet and return componenet
//example-adding some unique thing on some of the cards
//input-RestaurantCard=>>RestaurantCardPromoted
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Good Rating
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;

