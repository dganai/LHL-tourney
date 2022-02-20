export const preparePlayerData = (playerData) => {
	return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
	return playerDataArray.map((player) => {
		// calculate number of wins in matchData
		const currentWins = matchData.reduce((accumulator, match) => {
			// adds a win if gamertag matches
			if (match.winner === player.gamerTag) {
				return (accumulator += 1);
			} else {
				return accumulator;
			}
		}, 0);

		// assign value to wins key
		player.wins = currentWins;
		return player;
	});
};
