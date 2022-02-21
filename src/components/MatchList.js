import React from 'react';
import Match from './Match';
import matchData from '../data/matchData';

function MatchList(props) {
	const oneMatch = matchData[0];
	return (
		<section className="PlayerList MatchList">
			<h1>Match list</h1>
			<Match {...oneMatch} />
		</section>
	);
}

export default MatchList;
