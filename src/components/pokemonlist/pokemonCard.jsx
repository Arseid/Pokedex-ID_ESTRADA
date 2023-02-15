import React from "react";
import "../../style/pokemonCard.css";

const PokemonCard = ({number, name, imageSrc, types}) => {

    const syntaxIdNumber = (number) => {
        let numberModified='';
        if (number<10) numberModified=`00${number.toString()}`;
        else if (number<100) numberModified=`0${number.toString()}`;
        else if (number>=100) numberModified=number;
        return numberModified;
    }

    const showTypes = types.map((type) => (
        <span>
            <span className="PokemonCard-Type">{type.toUpperCase()}</span>
        </span>
    ));

    return <div className="PokemonCard">
        <span className="PokemonCard-Number">No.{syntaxIdNumber(number)}</span>
        <span className="PokemonCard-Name">{name.en}</span>
        <img className="PokemonCard-Image"
            src={imageSrc} alt=''/>
        <div className="PokemonCard-TypeList">
            {showTypes}
        </div>
    </div>
};

export default PokemonCard;