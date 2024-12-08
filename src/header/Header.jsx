import React from "react";
import "./Header.css"
import Logo from "./logo/Logo";
import SelectLanguage from "./SelectLanguage/SelectLanguage";


const Header = () => {
    return (
        <header id='header' className='header-container'>
            <div className='header-content'>
                <Logo/>
                <SelectLanguage/>
            </div>
        </header>
    )
}
export default Header;