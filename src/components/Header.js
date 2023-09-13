import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const {loggedInUser}=useContext(UserContext);
    const status=useOnlineStatus();
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between bg-pink-100 h-20">
            <div className="h-15">
                <img className="h-[90px]" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-4">Status:{status==true?"Online":"Offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold text-2xl"><Link to="/cart">Cart {cartItems.length}</Link></li>
                    <button className="login" onClick={()=>(
                        btnName=="Login"?setBtnName("LogOut"):setBtnName("Login"))}>{btnName}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;