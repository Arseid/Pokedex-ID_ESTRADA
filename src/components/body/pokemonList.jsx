import React from "react";
import "../../style/pokemonList.css";
import pokemonRefs from "../../ressources/pokemons.json";
import PokemonCard from "./pokemonCard";

const PokemonList = ({selectedLanguage, searchInputValue}) => {

    //EASTER EGG Roxane Girlfriend
    const easterEggGf = `https://www.youtube.com/watch?v=3T1c7GkzRQQ`;

    const createPokemonList = pokemonRefs.map((pokemon) => (
        <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                     imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
    ));

    const filteredPokemonList = '';

    return <div className="PokemonList">
        {searchInputValue===''
            ?
            createPokemonList
            :
            ''
        }
        {searchInputValue==='roxane'||searchInputValue==='Roxane'
            ?
            <iframe width="560" height="315" src={easterEggGf} title="YouTube video player"/>
            :
            ''
        }
    </div>
};

export default PokemonList;