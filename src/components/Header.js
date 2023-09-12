import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const status=useOnlineStatus();
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
                    <li>Cart</li>
                    <button className="login" onClick={()=>(
                        btnName=="Login"?setBtnName("LogOut"):setBtnName("Login"))}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;