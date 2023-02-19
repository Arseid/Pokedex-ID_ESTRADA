import React from "react";
import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";
import '../../style/pokemonListPage.css';

const PokemonListPage = ({selectedLanguage}) => {

    const [searchInputValue, setSearchInputValue] = React.useState('');

    const searchPokemon = (e) => {
        setSearchInputValue(e.target.value);
    }

    return <div className='PokemonListPage'>
        <SearchBar searchInputValue={searchInputValue} searchPokemon={searchPokemon}/>
        <PokemonList selectedLanguage={selectedLanguage} searchInputValue={searchInputValue}/>
    </div>;
};

export default PokemonListPage;