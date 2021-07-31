import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Header from '../components/header';
import CardContainer from '../components/cardContainer';
import Search from '../components/search';

import Client from '../apollo/apollo';
const { getRandomCharsCover } = require('../apollo/queries');

/*Client.query({
	query: getRandomCharsCover,
}).then((data) => console.log(data));*/

const Home = () => {
	return (
		<ApolloProvider client={Client}>
			<header>
				<nav>
					<Search input="" />
				</nav>
				<Header title="Welcome to Ricks deck!!!" />
			</header>
			<hr className="mt-6 mb-5 w-2/5 m-auto" />
			<main>
				<div className="containerHeight w-max m-auto pr-2 pl-3 overflow-x-hidden overflow-y-auto border-gray-900 border-2 rounded-md">
					<CardContainer query={getRandomCharsCover} />
				</div>
			</main>
		</ApolloProvider>
	)
};

export default Home;
