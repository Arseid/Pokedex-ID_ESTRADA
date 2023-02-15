import Header from "./components/header/header";
import "./style/App.css";
import PokemonList from "./components/pokemonlist/pokemonList";
import React from "react";

function App() {

    const [selectedLanguage, setSelectedLanguage] = React.useState("fr");

    const handleChange = (e) => {
        setSelectedLanguage(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header handleChange={handleChange}/>
            </header>
            <div className="App-body">
                <PokemonList selectedLanguage={selectedLanguage}/>
            </div>
        </div>
    );
}

export default App;
