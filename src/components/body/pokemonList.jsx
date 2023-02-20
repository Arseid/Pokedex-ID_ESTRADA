import React from "react";
import "../../style/pokemonList.css";
import PokemonCard from "./pokemonCard";
import Youtube from 'react-youtube';

const PokemonList = ({selectedLanguage, searchInputValue, pokemonList, pokemonTypes}) => {

    //EASTER EGG Roxane
    const easterEggGf = `3T1c7GkzRQQ`;

    const createFilteredPokemonList = () => {
        let shownPokemonList;
        let searchValue=searchInputValue.toLowerCase();

        if (searchValue==='') {
            shownPokemonList = pokemonList.map((pokemon) => (
                <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                             imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
            ));
        }
        else {
            let filteredPokemonList=[];
            if (searchValue!=='roxane'){
                if (selectedLanguage==='fr'){
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['fr'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='en') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['en'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='es') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['es'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='it') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['it'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='ja') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['ja'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='roomaji') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['roomaji'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='ko') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['ko'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='ja-Hrkt') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['ja-Hrkt'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='zh-Hant') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['zh-Hant'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                else if (selectedLanguage==='zh-Hans') {
                    pokemonList.forEach((pokemon) => {
                        if (pokemon.names['zh-Hans'].toLowerCase().includes(searchValue))
                            filteredPokemonList.push(pokemon)
                    })
                }
                shownPokemonList = filteredPokemonList.map((pokemon) => (
                    <PokemonCard name={pokemon.names} types={pokemon.types} number={pokemon.id}
                                 imageSrc={pokemon.image} selectedLanguage={selectedLanguage}/>
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