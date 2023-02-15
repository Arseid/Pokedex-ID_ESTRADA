import Header from "./components/header/header";
import "./style/App.css";
import PokemonList from "./components/pokemonlist/pokemonList";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Header/>
        </header>
        <body className="App-body">
            <PokemonList/>
        </body>
    </div>
  );
}

export default App;
