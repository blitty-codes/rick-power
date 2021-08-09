import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';

import Header from '../components/header';
import CardContainer from '../components/cardContainer';
import Search from '../components/search';

import Client from '../apollo/apollo';
import { getRandomCharsCover, getCharactersByName } from '../apollo/queries';

const Home = () => {
	const [charName, setCharName] = useState('');
	
	const callBack = (n) => setCharName(n);

	return (
		<div>
			<header>
				<nav>
					<Search callBack={callBack} />
				</nav>
				<Header title="Welcome to Ricks deck!!!" />
			</header>
			<hr className="mt-6 mb-5 w-2/5 m-auto" />
			<main>
				<div className="containerHeight w-max m-auto mb-10 pr-2 pl-3 overflow-x-hidden overflow-y-auto border-gray-900 border-2 rounded-md">
					<ApolloProvider client={Client}>
						{
							(charName === '')
								? <CardContainer query={getRandomCharsCover} />
								:	<CardContainer query={getCharactersByName} charName={charName} />
						}
					</ApolloProvider>
				</div>
			</main>
		</div>
	)
};

export default Home;
