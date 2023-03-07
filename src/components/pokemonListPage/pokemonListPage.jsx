import React from "react";
import SearchBar from "../searchBar/searchBar";
import PokemonList from "../pokemonList/pokemonList";
import './pokemonListPage.css';
import {PokemonContext} from "../../context/context";

const PokemonListPage = () => {

    const [searchInputValue, setSearchInputValue] = React.useState('');
    const {pokemonList, pokemonTypes} = React.useContext(PokemonContext);

    const searchPokemon = (e) => {
        setSearchInputValue(e.target.value);
    }

    return <div className='PokemonListPage'>
        <SearchBar searchInputValue={searchInputValue} searchPokemon={searchPokemon}/>
        {!(Object.keys(pokemonTypes).length>0&&pokemonList.length>0) ?
            <div className="PokemonListPage-LoaderContainer">
                <div></div>
            </div>
            :
            <PokemonList searchInputValue={searchInputValue}/>
        }
    </div>;
};

export default PokemonListPage;