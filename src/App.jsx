import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home';
import Error from './routes/error';

import './styles/custom.css';

const App = () => (
	<>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route component={Error} exact />
		</Switch>
	</>
);

export default App;
