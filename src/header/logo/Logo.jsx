import React from 'react';
import './Logo.css'
import logo from "./img/logo.svg";

const Logo = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="./logo"/>
        </div>
    )
}

export default Logo;