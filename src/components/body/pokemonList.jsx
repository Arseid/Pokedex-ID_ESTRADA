import React from "react";
import "../../style/pokemonList.css";
import pokemonRefs from "../../ressources/pokemons.json";
import PokemonCard from "./pokemonCard";
import Youtube from 'react-youtube';

const PokemonList = ({selectedLanguage, searchInputValue}) => {

    //EASTER EGG Roxane
    const easterEggGf = `3T1c7GkzRQQ`;

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
            <Youtube videoId={easterEggGf}/>
            :
            ''
        }
    </div>
};

export default PokemonList;