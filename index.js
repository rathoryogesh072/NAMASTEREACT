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

//Multiple line JSX is written in () brackets
const title=(
    <h1 className="head">
        Namaste React using jsx
    </h1>
)
//React Component 2
const Title2=()=>(
    <h1 className="head">
        Title2 component
    </h1>
)
//React Functional Components--it returns a react element
const Heading=()=>{
    const num=1000;
    return(
        <div id="container">
            {/* the title Jsx that is react eleemnt which is javascript object is rendered in curly brackets which is common way to write js in react  */}
            {title}
            {/* title2 componeent can be imported in below 3 ways */}
            <Title2/>
            <Title2></Title2>
            {Title2()}
            <h1>Namaste React Functional Components</h1>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)//functional component is rendered like this