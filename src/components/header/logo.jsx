import React from "react";
import logoPokedex from "../../ressources/logoPokedex.svg";

const Logo = ({ size = 7 }) => {
    return <img src={logoPokedex} alt="logo-pokedex" height={size * 10} />;
};

export default Logo;