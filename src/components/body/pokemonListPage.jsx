import React from "react";
import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";
import '../../style/pokemonListPage.css';

const PokemonListPage = ({selectedLanguage}) => {

    const pokemonListURL = 'https://pokedex-jgabriele.vercel.app/pokemons.json';
    const pokemonTypesURL = 'https://pokedex-jgabriele.vercel.app/types.json';
    const [pokemonList, setPokemonList] = React.useState([]);
    const [pokemonTypes, setPokemonTypes] = React.useState({});
    const [searchInputValue, setSearchInputValue] = React.useState('');

    React.useEffect(() => {
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
    },[]);

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
            <PokemonList selectedLanguage={selectedLanguage} searchInputValue={searchInputValue}
                         pokemonList={pokemonList} pokemonTypes={pokemonTypes}/>
        }
    </div>;
};

export default PokemonListPage;