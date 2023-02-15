import React from "react";
import "../../style/pokemonCard.css";

const PokemonCard = ({number, name, imageSrc, types, selectedLanguage}) => {

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

    const nameMatchSelectedLanguage = (name, selectedLanguage) => {
        let nameModified='';
        if (selectedLanguage==='fr') nameModified=name.fr;
        else if (selectedLanguage==='en') nameModified=name.en;
        else if (selectedLanguage==='es') nameModified=name.es;
        else if (selectedLanguage==='it') nameModified=name.it;
        else if (selectedLanguage==='ja') nameModified=name.ja;
        else if (selectedLanguage==='roomaji') nameModified=name.roomaji;
        else if (selectedLanguage==='ko') nameModified=name.ko;
        return nameModified
    }

    return <div className="PokemonCard">
        <span className="PokemonCard-Number">No.{syntaxIdNumber(number)}</span>
        <span className="PokemonCard-Name">{nameMatchSelectedLanguage(name, selectedLanguage)}</span>
        <img className="PokemonCard-Image"
            src={imageSrc} alt=''/>
        <div className="PokemonCard-TypeList">
            {showTypes}
        </div>
    </div>
};

export default PokemonCard;