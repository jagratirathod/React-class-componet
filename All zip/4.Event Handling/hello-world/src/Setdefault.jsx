import React from "react";


function Setdefault(props){
    function handleClick(e){
        // e.preventDefault();                          // set preventDefault
        console.log("Button Clicked");
    }
    
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <a href="https://www.youtube.com/watch?v=Q3mLaDmwsKQ&list=PLbGui_ZYuhignjLLXTJWkRJKN-SgAqClL&index=23" 
            onClick={handleClick}>Click me</a>
        </div>
    );
}



export default Setdefault;  

