import Header from "./components/header/header";
import "./App.css";
import React from "react";
import PokemonListPage from "./components/pokemonListPage/pokemonListPage";
import PokemonDetails from "./components/pokemonDetails/pokemonDetails";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {LanguageContext, PokemonContext} from "./context/context";

function App() {

    const [selectedLanguage, setSelectedLanguage] = React.useState("fr");
    const pokemonListURL = 'https://pokedex-jgabriele.vercel.app/pokemons.json';
    const pokemonTypesURL = 'https://pokedex-jgabriele.vercel.app/types.json';
    const [pokemonList, setPokemonList] = React.useState([]);
    const [pokemonTypes, setPokemonTypes] = React.useState({});

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

    return (
        <BrowserRouter >
            <LanguageContext.Provider value={{selectedLanguage,setSelectedLanguage}}>
                <div className="App">
                    <header className="App-header">
                        <Header/>
                    </header>
                    <div className="App-body">
                        <PokemonContext.Provider value={{pokemonList, pokemonTypes}}>
                            <Routes>
                                <Route path="/" element={<PokemonListPage/>} />
                                <Route path="/pokemon/:pokemonId" element={<PokemonDetails/>} />
                            </Routes>
                        </PokemonContext.Provider>
                    </div>
                </div>
            </LanguageContext.Provider>
        </BrowserRouter>
    );
}

export default App;
