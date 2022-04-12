import React from "react";
import Logo from "./image/Logo.png"

const Header = () =>{
    return(
        <header>
        <div>
           <img src={Logo} alt="Logo"></img>
        </div>
        <span>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Login</li>
            <button>Create account</button>

        </span>
        </header>
        
    )
};
export default Header