import React from "react";
import {useParams} from "react-router-dom";
import "./pokemonDetails.css";
import {LanguageContext, PokemonContext} from "../../context/context";

const PokemonDetails = () => {

    const {pokemonId} = useParams();
    const {selectedLanguage} = React.useContext(LanguageContext);
    const {pokemonList, pokemonTypes} = React.useContext(PokemonContext);
    const shownPokemon = pokemonList[pokemonId-1];

    const showTypes = shownPokemon['types'].map((type) => {
        return pokemonTypes[type];
    }).map((type) => (
        <span style={{backgroundColor: type['backgroundColor']}} className='PokemonDetails-TypesInfo'>
            {type['translations'][selectedLanguage].toUpperCase()}</span>
    ));

    const showMoves = shownPokemon['moves'].map((move) => (
        <span className='PokemonDetails-MovesInfo'>{move.toUpperCase()}</span>
    ));

    return <div className='PokemonDetails'>
        <div className='PokemonDetails-Body'>
            <span className="PokemonDetails-Title">
                {shownPokemon['names'][selectedLanguage]} No.{pokemonId.toString().padStart(3,'0')}
            </span>
            <div className="PokemonDetails-Info">
                <div className="PokemonDetails-Left">
                    <div className="PokemonDetails-Feature">
                        <span className='PokemonDetails-TitleInfo'>Height</span>
                        <div className='PokemonDetails-TextInfo'>
                            {shownPokemon['height']}
                        </div>
                    </div>
                    <div className="PokemonDetails-Feature">
                        <span className='PokemonDetails-TitleInfo'>Weight</span>
                        <div className='PokemonDetails-TextInfo'>
                            {shownPokemon['weight']}
                        </div>
                    </div>
                    <div className="PokemonDetails-Feature">
                        <span className='PokemonDetails-TitleInfo'>Types</span>
                        <div className='PokemonDetails-Types'>
                            {showTypes}
                        </div>
                    </div>
                </div>
                <div className="PokemonDetails-Right">
                    <img className='PokemonDetails-Image' src={shownPokemon['image']} alt=''/>
                </div>
            </div>
            <div className='PokemonDetails-Bot'>
                <span className='PokemonDetails-TitleInfo'>Moves</span>
                <div className='PokemonDetails-Moves'>
                    {showMoves}
                </div>
            </div>
        </div>
    </div>;
};

export default PokemonDetails;