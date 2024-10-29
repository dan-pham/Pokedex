/** Fisher-Yates (Knuth) shuffle algorithm
 * Start from the last element
 * Select a random element
 * Swap elements to ensure every index has the same chance of being shuffled
 *
 * @param {Array} array - The array to shuffle
 * @returns {Array} - A new shuffled array
 */
export function shuffle(array) {
	const newArray = [...array];

	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}

	return newArray;
}
