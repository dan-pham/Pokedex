import React from "react";
import Pokedex from "./Pokedex";
import pokemonData from "../data/pokemonData";

const Pokegame = ({ pokemon = pokemonData }) => {
	// Shuffle the pokemon and split into two hands
	const shuffledPokemon = shuffle(pokemon);
	const [hand1, hand2] = [shuffledPokemon.slice(0, 4), shuffledPokemon.slice(4)];

	return (
		<div>
			<h3>Opponent's Hand</h3>
			<Pokedex pokemon={hand1} />
			<h3>Your Hand</h3>
			<Pokedex pokemon={hand2} />
		</div>
	);
};

/** Fisher-Yates (Knuth) shuffle algorithm
 * Start from the last element
 * Select a random element
 * Swap elements to ensure every index has the same chance of being shuffled
 */
function shuffle(array) {
	const newArray = [...array];

	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}

	return newArray;
}

export default Pokegame;
