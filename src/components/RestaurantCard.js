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
export default RestaurantCard;