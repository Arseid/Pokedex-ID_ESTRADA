import React from "react";
import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";

const PokemonListPage = ({selectedLanguage}) => {

    const [searchInputValue, setSearchInputValue] = React.useState('');

    const searchPokemon = (e) => {
        setSearchInputValue(e.target.value);
    }

    return <div>
        <SearchBar searchInputValue={searchInputValue} searchPokemon={searchPokemon}/>
        <PokemonList selectedLanguage={selectedLanguage} searchInputValue={searchInputValue}/>
    </div>;
};

export default PokemonListPage;