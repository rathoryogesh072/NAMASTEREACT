import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    //subscribe to desired bpart only 
    //you can write (store)=>store but it will take performance hit
    //always subscribe to desired slice
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button onClick={handleClearCart}>ClearCart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )

}

export default Cart;