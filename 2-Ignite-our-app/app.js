import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
    id: "heading1",
    className: "cls-heading1"
},
"heading1");

const heading2 = React.createElement("h2", {
    id: "heading2",
    className: "cls-heading2"
}, "heading222");

const container = React.createElement("div", {}, [
    heading1,
    heading2
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


