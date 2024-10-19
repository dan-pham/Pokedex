import React from "react";
import "../styles/Pokecard.css";

const Pokecard = ({ id, name, type, baseExperience }) => {
	const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div className="pokecard">
			<h2>{name}</h2>
			<img src={imgSrc} alt={name} />
			<p>Type: {type}</p>
			<p>EXP: {baseExperience}</p>
		</div>
	);
};

export default Pokecard;
