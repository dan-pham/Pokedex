import React from "react";
import Pokecard from "./Pokecard";
import "../styles/Pokedex.css";

const Pokedex = ({ pokemon, totalExperience, isWinner, revealedCards }) => {
	return (
		<div className="pokedex">
			{pokemon.map((creature, index) => (
				<Pokecard
					key={creature.id}
					id={creature.id}
					name={creature.name}
					type={creature.type}
					baseExperience={creature.base_experience}
					isRevealed={revealedCards[index]} // Pass the reveal state for each card
				/>
			))}

			{revealedCards.every(Boolean) && (
				<div style={{ fontSize: "0.8em", marginLeft: "10px" }}>
					(Total Exp: {totalExperience}){" "}
					{isWinner && (
						<div style={{ fontSize: "1.2em", color: "green", marginTop: "10px" }}>
							THIS HAND WINS!
						</div>
					)}
				</div>
			)}
		</div>
	);
};

/* Requirement for the first stage in the Pokedex project, using Pokedex.defaultProps to provide data
Pokedex.defaultProps = {
	pokemon: [
		{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
		{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
		{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
		{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
		{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
		{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
		{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
		{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
	],
};
*/

export default Pokedex;
