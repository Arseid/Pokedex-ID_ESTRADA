import React from "react";
import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";
import '../../style/pokemonListPage.css';

const PokemonListPage = ({selectedLanguage}) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const pokemonListURL = 'https://pokedex-jgabriele.vercel.app/pokemons.json';
    const pokemonTypesURL = 'https://pokedex-jgabriele.vercel.app/types.json';
    const [pokemonList, setPokemonList] = React.useState([]);
    const [pokemonTypes, setPokemonTypes] = React.useState({});
    const [searchInputValue, setSearchInputValue] = React.useState('');

    React.useEffect(() => {
        setIsLoading(true);
        fetch(pokemonListURL)
            .then((response) => response.json())
            .then((response) => setPokemonList(response))
            .catch((e) => {
                console.log("Error"+e);
            });
        fetch(pokemonTypesURL)
            .then((response) => response.json())
            .then((response) => setPokemonTypes(response))
            .catch((e) => {
                console.log("Error"+e);
            });
        setIsLoading(false);
    },[]);

    const searchPokemon = (e) => {
        setSearchInputValue(e.target.value);
    }

    return <div className='PokemonListPage'>
        <SearchBar searchInputValue={searchInputValue} searchPokemon={searchPokemon}/>
        {isLoading ?
            <div className="PokemonListPage-LoaderContainer">
                <div></div>
            </div>
            :
            <PokemonList selectedLanguage={selectedLanguage} searchInputValue={searchInputValue}
                         pokemonList={pokemonList} pokemonTypes={pokemonTypes}/>
        }
    </div>;
};

export default PokemonListPage;