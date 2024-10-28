import React from "react";
import Pokedex from "./Pokedex";
import pokemonData from "../data/pokemonData";
import { shuffle } from "../utils";

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

export default Pokegame;
