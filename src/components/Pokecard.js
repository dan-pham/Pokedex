import React from "react";

const charmander = { id: 4, name: "Charmander", type: "fire", base_experience: 62 };

const Pokecard = ({
	id = charmander.id,
	name = charmander.name,
	type = charmander.type,
	baseExperience = charmander.base_experience,
}) => {
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
