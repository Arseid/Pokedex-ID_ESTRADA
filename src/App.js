import Header from "./components/header/header";
import "./style/App.css";
import React from "react";
import PokemonListPage from "./components/body/pokemonListPage";

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
                <PokemonListPage selectedLanguage={selectedLanguage}/>
            </div>
        </div>
    );
}

export default App;
