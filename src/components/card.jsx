import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ id, name, gender, status, image }) => {  
  return (
    <div
			className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 mb-1 lg:py-4 lg:space-y-0 lg:space-x-6 lg:m-1.5">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={ image }
        alt={`${name} image`}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{ name }</p>
          <p className="text-gray-500 font-medium">{ gender }</p>
					<p className="text-gray-500 text-opacity-75 font-medium">{status === 'Alive' ? '🟢' : status === 'unknown' ? '❓' : '🔴'} { status }</p>
        </div>
        <Link to={`/charInfo/${id}`}>
          <button
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            More information
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
	gender: PropTypes.string,
	status: PropTypes.string,
	image: PropTypes.string
};

export default Card;
