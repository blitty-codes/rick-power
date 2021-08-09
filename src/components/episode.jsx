import React from 'react';
import PropTypes from 'prop-types';

import CustomDate from './date';

const Episode = ({ id, name, episode, created }) => {
	const dateC = new Date(created);
	return (
		<div className="bg-gray-300 m-2 p-4 w-max rounded-md">
			<h3 className="text-center text-2xl">{name}</h3>
			<p className="text-center text-gray-800 font-semibold">{episode} - ({id})</p>
			<CustomDate date={dateC} />
		</div>
	);
}

Episode.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
	// air_date: PropTypes.string,
	episode: PropTypes.string,
	created: PropTypes.string
};

export default Episode;
