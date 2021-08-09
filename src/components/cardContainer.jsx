import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import Card from './card';
import CustomError from './customError';
import Loader from './loader';

const CardContainer = ({ query, charName }) => {
	let Query;

	if (charName === undefined)
	{
		const randomPage = Math.floor(Math.random() * 11);
		Query = useQuery(query, {
			variables: { randomPage },
		});
	}
	else
		Query = useQuery(query, {
			variables: { charName },
		});

	const { loading, error, data } = Query;

	if (loading)
		return (<div className="light-cian mt-40 px-10">
			<Loader />
		</div>);
	if (error) return <CustomError />

	let characters = data.characters.results;
	if (charName === undefined)
	{
		const init = Math.random() * ((characters.length-6) - 0) + 0;
		characters = characters.slice(init, init+5);
	}
	return (
		<div className="mb-5 p-2 w-max m-auto flex flex-col flex-nowrap items-center md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-1 md:gap-4 lg:p-1 lg:grid-rows-2">
			{
				characters.map(({id, name, gender, status, image}) => (
					<Card
						key={id}
						id={id}
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

CardContainer.propTypes = ({
	query: PropTypes.object,
	charName: PropTypes.string
});

export default CardContainer;
