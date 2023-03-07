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

    return (
        <BrowserRouter >
            <LanguageContext.Provider value={{selectedLanguage,setSelectedLanguage}}>
                <div className="App">
                    <header className="App-header">
                        <Header/>
                    </header>
                    <div className="App-body">
                        <Routes>
                            <Route path="/" element={<PokemonListPage/>} />
                            <Route path="/pokemon/:pokemonId" element={<PokemonDetails/>} />
                        </Routes>
                    </div>
                </div>
            </LanguageContext.Provider>
        </BrowserRouter>
    );
}

export default App;
