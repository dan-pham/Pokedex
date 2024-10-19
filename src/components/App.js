import React from "react";
import Pokecard from "./Pokecard";

function App() {
	return (
		<div className="App">
			<header className="Pokedex">
				<h1>Welcome to the Pokedex!</h1>
				<Pokecard />
			</header>
		</div>
	);
}

export default App;
