import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { Link } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
    return(
        <Provider store={appStore}>
            <div className="app">
            <Header/>
            <Outlet/>
            </div>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense><Grocery/></Suspense>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
])


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)//functional component is rendered like this