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

function App() {

    const [selectedLanguage, setSelectedLanguage] = React.useState("fr");

    const handleChange = (e) => {
        setSelectedLanguage(e.target.value);
    }

    return (
        <BrowserRouter >
            <div className="App">
                <header className="App-header">
                    <Header handleChange={handleChange}/>
                </header>
                <div className="App-body">
                    <Routes>
                        <Route path="/" element={<PokemonListPage selectedLanguage={selectedLanguage}/>} />
                        <Route path="/:pokemonId" element={<PokemonDetails/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
