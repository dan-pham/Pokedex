import React, { useState, useEffect } from "react";
import "../styles/Pokecard.css";

const Pokecard = ({ id, name, type, baseExperience }) => {
	const [flipped, setFlipped] = useState(false);

	// Use useEffect to flip the card after a delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setFlipped(true); // Flip the card after a timed delay
		}, 1000); // Set the delay in milliseconds

		return () => clearTimeout(timer); // Always clear the timer to prevent memory leaks
	}, []);

	const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div className={`pokecard ${flipped ? "" : "flipped"}`}>
			<div className="pokecard-inner">
				<div className="pokecard-front">
					<h2>{name}</h2>
					<img src={imgSrc} alt={name} />
					<p>Type: {type}</p>
					<p>EXP: {baseExperience}</p>
				</div>
				<div className="pokecard-back">
					<p>Pokémon</p>
				</div>
			</div>
		</div>
	);
};

export default Pokecard;
