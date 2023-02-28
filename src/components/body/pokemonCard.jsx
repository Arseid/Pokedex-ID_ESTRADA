import React from "react";
import "../../style/pokemonCard.css";

const PokemonCard = ({number, name, imageSrc, types, selectedLanguage, pokemonTypes}) => {

    const showTypes = types.map((type) => {
        return pokemonTypes[type];
    }).map((type) => (
        <span>
        <span style={{backgroundColor: type['backgroundColor']}} className="PokemonCard-Type">
            {type['translations'][selectedLanguage].toUpperCase()}</span>
    </span>
    ));

    return <div className="PokemonCard">
        <span className="PokemonCard-Number">No.{number.toString().padStart(3,'0')}</span>
        <span className="PokemonCard-Name">{name[selectedLanguage]}</span>
        <img className="PokemonCard-Image"
            src={imageSrc} alt=''/>
        <div className="PokemonCard-TypeList">
            {showTypes}
        </div>
    </div>
};

export default PokemonCard;