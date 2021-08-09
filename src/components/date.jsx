import React from 'react';
import PropTypes from 'prop-types';

const CustomDate = ({ date }) => {
	return (
		<p className="italic text-center font-extralight text-gray-600">Created: {date.getDay()}/{date.getMonth()}/{date.getFullYear()}</p>
	)
};

CustomDate.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
};

export default CustomDate;
