import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import Card from './card';

const CardContainer = ({ query }) => {
	const { loading, error, data } = useQuery(query);

	if (loading) return <h3>Loading...</h3>
	if (error) return <h3>Error :(</h3>

	let characters = data.characters.results;
	const init = Math.random() * ((characters.length-6) - 0) + 0;
	characters = characters.slice(init, init+5);
	return (
		<div className="mb-5 p-2 w-max m-auto flex flex-col flex-nowrap items-center md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-1 md:gap-4 lg:p-1 lg:grid-rows-2">
			{
				characters.map(({id, name, gender, status, image}) => (
					<Card
						key={id}
						name={name}
						gender={gender}
						status={status}
						image={image}
					/>
				))
			}
		</div>
	);
};

CardContainer.propTypes = ({ query: PropTypes.string });

export default CardContainer;
