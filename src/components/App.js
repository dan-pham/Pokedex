import React from "react";
import Pokedex from "./Pokedex";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<header className="Pokedex">
				<h1>Pokédex</h1>
				<Pokedex />
			</header>
			<Footer />
		</div>
	);
}

export default App;
