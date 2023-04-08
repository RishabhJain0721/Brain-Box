import React from "react";
import "../LoginSignup/input.css";

function Input(props){
    return(
        <input type="text" className="input" placeholder={props.placeholder}/>
    )
}

export default Input;