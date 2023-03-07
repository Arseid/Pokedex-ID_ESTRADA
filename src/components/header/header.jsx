import React from "react";
import Logo from "../logo/logo";
import LanguageSelection from "../languageSelection/languageSelection";
import "./header.css";

const Header = ({handleChange}) => {
    return <div className="Header-Container">
        <div className="Header-Logo">
            <Logo/>
        </div>
        <div className="Header-LanguageSelection">
            <LanguageSelection handleChange={handleChange}/>
        </div>
    </div>
};

export default Header;