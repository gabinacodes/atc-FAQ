import React from "react";
import Logo from "./image/Logo.png"

const Header = () =>{
    return(
        <header>
        <div>
           <img className="logo" src={Logo} alt="Logo"></img>
        </div>
        <span className="nav">
            <li>How it works</li>
            <li>Pricing</li>
            <li>Login</li>
            <button className="btn"> Create account</button>

        </span>
        </header>
        
    )
};
export default Header