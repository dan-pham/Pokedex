import React from "react";
import Pokedex from "./Pokedex";
import pokemonData from "../data/pokemonData";
import { shuffle } from "../utils";

const Pokegame = ({ pokemon = pokemonData }) => {
	// Shuffle the pokemon and split into two hands
	const shuffledPokemon = shuffle(pokemon);
	const [hand1, hand2] = [shuffledPokemon.slice(0, 4), shuffledPokemon.slice(4)];

	const sumTotalExperience = (hand) =>
		hand.reduce((total, { base_experience }) => total + base_experience, 0);

	const experienceHand1 = sumTotalExperience(hand1);
	const experienceHand2 = sumTotalExperience(hand2);

	const isWinner = experienceHand1 > experienceHand2;

	return (
		<div>
			<h3>Opponent's Hand</h3>
			<Pokedex pokemon={hand2} totalExperience={experienceHand2} isWinner={!isWinner} />
			<h3>Your Hand</h3>
			<Pokedex pokemon={hand1} totalExperience={experienceHand1} isWinner={isWinner} />
		</div>
	);
};

export default Pokegame;
