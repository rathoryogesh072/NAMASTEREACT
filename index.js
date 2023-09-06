import React from "react";
import ReactDOM from "react-dom/client";


// Two ways to create react Element
// way 1
// const heading=<h1>Hello brother</h1>
// way 2
// const heading=React.createElement("h1",
// {id:"heading"},
// "namaste react")
// console.log(heading)
//JSX(transpiled before it reaches the JS) -PARCEL-Babel
//JSX-React.createElement=>ReactElement-JS Object=>HTML(render)
//It is react.render(heading) which convert js object created by create Element to html elemnt that browser understands
//ReactDOM.createRoot(document.getElement by id("root")) it create the root of react tree
