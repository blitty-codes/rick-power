import { gql } from '@apollo/client';

const getRandomCharsCover = gql`
	query getRandomCharsCover($randomPage: Int!) {
		characters(page: $randomPage) {
			results {
				id
				name
				gender
				status
				image
			}
		}
	}
`;

// for now, but this is what we need from search component
	const getCharactersByName = gql`
		query getCharactersByName($charName: String!) {
			characters(filter: { name: $charName }) {
				results {
					id
					name
					gender
					status
					image
				}
			}
		}
	`;

// we will get the id from the Card components
const getFullDataByID = gql`
	query getFullDataByID ($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			type
			gender
			location {
				id
				name
				type
				dimension
				residents {
					id
					name
					gender
					status
					image
				}
				created
			}
			image
			episode {
				id
				name
				air_date
				episode
				created
			}
			created
		}
	}
`;

export {
	getRandomCharsCover,
	getCharactersByName,
	getFullDataByID
}
