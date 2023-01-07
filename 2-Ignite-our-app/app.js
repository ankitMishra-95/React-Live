import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
    id: "heading1",
    className: "cls-heading1",
    key: "h1-1"
    
},
"heading1");
// console.log(heading1);

//React.createElement => object => HTML(DOM)

const heading2 = React.createElement("h2", {
    id: "heading2",
    className: "cls-heading2",
    key: "h1-2"
}, "heading222");


// JSX => React.createElement => object => HTML(DOM)
// JSX Expression 
// React Element
const heading3 = <h1 id="title" key="1">Heading</h1>

// React Component

console.log(heading3);

const container = React.createElement("div", {}, [
    heading1,
    heading2
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


