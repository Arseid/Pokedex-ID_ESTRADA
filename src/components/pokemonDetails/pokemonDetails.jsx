import React from "react";
import {useParams} from "react-router-dom";
import pokemonList from "../../ressources/pokemons.json";
import "./pokemonDetails.css";

const PokemonDetails = () => {

    const {pokemonId} = useParams();
    const shownPokemon = pokemonList[pokemonId-1];

    return <div className='PokemonDetails'>
        <span className="PokemonDetails-Title">{shownPokemon.names["en"]} No.{pokemonId.toString().padStart(3,'0')}</span>
        <div className="PokemonDetails-Details">
            <div>


                <div className="PokemonDetails-Body">
                    <span className='PokemonDetails-Body-SubTitle'>Height</span>
                    <b>{shownPokemon.height}</b>
                </div>
                <div className="PokemonDetails-Body">
                    <span className='PokemonDetails-Body-SubTitle'>Weight</span>
                    <b>{shownPokemon.weight}</b>
                </div>
                <div className="PokemonDetails-Body">
                    <span className='PokemonDetails-Body-SubTitle'>Types</span>
                    <div className="PokemonDetails-TypesList">
                        {shownPokemon.types}
                    </div>
                </div>


            </div>
            <img className="PokemonDetails-Image"
                 src={shownPokemon.image} alt=''/>
        </div>

    </div>;
};

export default PokemonDetails;