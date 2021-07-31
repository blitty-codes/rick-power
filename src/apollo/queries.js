import { gql } from '@apollo/client';

const randomPage = Math.floor(Math.random() * 11);

const getRandomCharsCover = gql`
	query getRandomCharsCover {
		characters(page: ${randomPage}) {
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
	query getCharactersByName {
		characters(filter: { name: "" }) {
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
	query getFullDataByID {
		character(id: 0) {
			results {
				id
				name
				status
				species
				type
				gender
				image
				created
			}
		}
	}
`;

export {
	getRandomCharsCover,
	getCharactersByName,
	getFullDataByID
}
