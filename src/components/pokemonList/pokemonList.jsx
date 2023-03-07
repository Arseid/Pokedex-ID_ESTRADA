import React from "react";
import "./pokemonList.css";
import PokemonCard from "../pokemonCard/pokemonCard";
import Youtube from 'react-youtube';

const PokemonList = ({selectedLanguage, searchInputValue, pokemonList, pokemonTypes}) => {

    //EASTER EGG Roxane <3
    const easterEggGf = `3T1c7GkzRQQ`;

    const createFilteredPokemonList = () => {
        let shownPokemonList;
        let searchValue=searchInputValue.toLowerCase();

        if (searchValue==='') {
            shownPokemonList = pokemonList.map((pokemon) => (
                <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id} imageSrc={pokemon.image}
                             selectedLanguage={selectedLanguage} pokemonTypes={pokemonTypes}/>
            ));
        }
        else {
            let filteredPokemonList=[];
            if (searchValue!=='roxane'){
                pokemonList.forEach((pokemon) => {
                    if (pokemon.names[selectedLanguage].toLowerCase().includes(searchValue))
                        filteredPokemonList.push(pokemon)
                })
                shownPokemonList = filteredPokemonList.map((pokemon) => (
                    <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id} imageSrc={pokemon.image}
                                 selectedLanguage={selectedLanguage} pokemonTypes={pokemonTypes}/>
                ))
            }
            else {
                shownPokemonList=(<Youtube className='Easter-Egg' title='Roxane <3' videoId={easterEggGf}/>);
            }

        }
        return shownPokemonList
    };

    return <div className="PokemonList">
        {createFilteredPokemonList()}
    </div>
};

export default PokemonList;