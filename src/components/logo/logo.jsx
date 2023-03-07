import React from "react";
import logoPokedex from "../../ressources/logoPokedex.svg";
import { Link } from "react-router-dom";

const Logo = ({ size = 7 }) => {
    return <div>
        <Link to="/"><img src={logoPokedex} alt="logo-pokedex" height={size * 10} /></Link>
    </div>;
};

export default Logo;