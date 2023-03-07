import React from "react";
import './searchBar.css';

const SearchBar = ({searchInputValue, searchPokemon}) => {



    return <div className='SearchBar'>
        <input placeholder='Enter a pokemon name' value={searchInputValue} onChange={searchPokemon}/>
    </div>;
};

export default SearchBar;