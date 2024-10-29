import React from "react";
import "../styles/Pokecard.css";

const Pokecard = ({ id, name, type, baseExperience, isRevealed }) => {
	const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div className={`pokecard ${isRevealed ? "" : "flipped"}`}>
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
