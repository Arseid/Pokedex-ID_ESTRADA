import React from "react";
import Logo from "./logo";
import LanguageSelection from "./languageSelection";
import "../../style/header.css";

const Header = () => {
    return <div className="Header-Container">
        <div className="Header-Logo">
            <Logo/>
        </div>
        <div className="Header-LanguageSelection">
            <LanguageSelection/>
        </div>
    </div>
};

export default Header;