import React from "react";
import Pokegame from "./Pokegame";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<header className="Pokegame">
				<h1>Pokégame</h1>
				<Pokegame />
			</header>

			<Footer />
		</div>
	);
}

export default App;
