import React from "react";
import "../../style/pokemonList.css";
import pokemonRefs from "../../ressources/pokemons.json";
import PokemonCard from "./pokemonCard";
import Youtube from 'react-youtube';

const PokemonList = ({selectedLanguage, searchInputValue}) => {

    //EASTER EGG Roxane
    const easterEggGf = `3T1c7GkzRQQ`;

    /*
    const createPokemonList = pokemonRefs.map((pokemon) => (
        <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                     imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
    ));
    */

    const createFilteredPokemonList = () => {
        let pokemonList;
        let searchValue=searchInputValue.toLowerCase();

        if (searchValue==='') {
            pokemonList = pokemonRefs.map((pokemon) => (
                <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                             imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
            ));
        }
        else {
            let filteredPokemonList=[];
            if (searchValue!=='roxane'){
                if (selectedLanguage==='fr'){
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.fr.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='en') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.en.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='es') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.es.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='it') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.it.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='ja') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.ja.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='roomaji') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.roomaji.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='ko') {
                    pokemonRefs.forEach((pokemon) => {
                        if (pokemon.names.ko.toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                pokemonList = filteredPokemonList.map((pokemon) => (
                    <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                                 imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
                ))
            }
            else {
                pokemonList=(<Youtube className='Easter-Egg' title='Roxane <3' videoId={easterEggGf}/>);
            }

        }
        return pokemonList
    };

    return <div className="PokemonList">
        {createFilteredPokemonList()}
    </div>
};

export default PokemonList;