import "./App.css";
import PokemonList from "./Components/PokemonList";
import MyAppContext from "./Provider/AppContext";

function App() {
  return (
    <MyAppContext>
      <div className="App-header">
        <h1>Pokemon por CONTEX</h1>
        {/*informacion de pokemon */}
        <PokemonList />
      </div>
    </MyAppContext>
  );
}

export default App;
