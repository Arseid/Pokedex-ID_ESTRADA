import React from "react";
import "../../style/pokemonList.css";
import pokemonRefs from "../../ressources/pokemons.json";
import PokemonCard from "./pokemonCard";

const PokemonList = () => {

    const createPokemonList = pokemonRefs.map((pokemon) => (
        <li>
            <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id} imageSrc={pokemon.image}/>
        </li>
    ));

    return <div className="PokemonList">
        <ul className="PokemonList-List">
            {createPokemonList}
        </ul>
    </div>
};

export default PokemonList;