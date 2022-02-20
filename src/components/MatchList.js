import React from 'react';
import Match from './Match';
import matchData from '../data/matchData';

function MatchList(props) {
	return (
		<section className="PlayerList MatchList">
			<h1>Match list</h1>
			<Match />
		</section>
	);
}

export default MatchList;
