import React from "react";
import SearchBar from "../searchBar/searchBar";
import PokemonList from "../pokemonList/pokemonList";
import styled from "styled-components";
import {PokemonContext} from "../../context/context";

const PokemonListPageContainer = styled.div`
  width: 100%;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 2rem;
`;

const Loader = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 3px solid white;
  border-top-color: #292c33;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;


const PokemonListPage = () => {

    const [searchInputValue, setSearchInputValue] = React.useState('');
    const {pokemonList, pokemonTypes} = React.useContext(PokemonContext);

    const searchPokemon = (e) => {
        setSearchInputValue(e.target.value);
    }

    return (
        <PokemonListPageContainer>
            <SearchBar searchInputValue={searchInputValue} searchPokemon={searchPokemon} />
            {!(Object.keys(pokemonTypes).length > 0 && pokemonList.length > 0) ? (
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            ) : (
                <PokemonList searchInputValue={searchInputValue} />
            )}
        </PokemonListPageContainer>
    );
};

export default PokemonListPage;