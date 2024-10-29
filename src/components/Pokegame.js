import React, { useState, useEffect } from "react";
import Pokedex from "./Pokedex";
import pokemonData from "../data/pokemonData";
import { shuffle } from "../utils";

const Pokegame = ({ pokemon = pokemonData }) => {
	const [hand1, setHand1] = useState([]);
	const [hand2, setHand2] = useState([]);

	// Shuffle the pokemon and split into two hands
	useEffect(() => {
		const shuffledPokemon = shuffle(pokemon);
		console.log(
			"Initial shuffled Pokémon array:",
			shuffledPokemon.map((creature) => creature.name)
		);

		setHand1(shuffledPokemon.slice(0, 4));
		setHand2(shuffledPokemon.slice(4));
	}, [pokemon]); // Only run once when the component mounts

	const sumTotalExperience = (hand) =>
		hand.reduce((total, { base_experience }) => total + base_experience, 0);

	const experienceHand1 = sumTotalExperience(hand1);
	const experienceHand2 = sumTotalExperience(hand2);

	const isWinner = experienceHand1 > experienceHand2;

	// Handle card reveal animation
	const [revealedCards, setRevealedCards] = useState(Array(8).fill(false));

	useEffect(() => {
		const flipCards = async () => {
			for (let i = 0; i < revealedCards.length; i++) {
				await new Promise((resolve) => setTimeout(resolve, 300));
				setRevealedCards((previous) => {
					const newCards = [...previous];
					newCards[i] = true; // Reveal the card at the current index
					return newCards;
				});
			}
		};

		flipCards();
	}, []);

	return (
		<div>
			<h3>Opponent's Hand</h3>
			<Pokedex
				pokemon={hand2}
				totalExperience={experienceHand2}
				isWinner={!isWinner}
				revealedCards={revealedCards.slice(4)}
			/>
			<h3>Your Hand</h3>
			<Pokedex
				pokemon={hand1}
				totalExperience={experienceHand1}
				isWinner={isWinner}
				revealedCards={revealedCards.slice(0, 4)}
			/>
		</div>
	);
};

export default Pokegame;
