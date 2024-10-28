import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = () => {
	const pokemon = pokemonData;

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

const pokemonData = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

export default Pokegame;
