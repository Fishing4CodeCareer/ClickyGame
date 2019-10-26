import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;

///imports the ./style.css from the wrapper in JSX.elements /////
///and returns it to the the data in the wrapper to render to the page.