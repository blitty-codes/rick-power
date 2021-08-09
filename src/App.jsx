import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home';
import Error from './routes/error';
import CharInfo from './routes/charInfo';
import Footer from './components/footer';

import './styles/custom.css';

const App = () => (
	<>
		<Switch>
			<Route path="/rick-power/" component={Home} exact />
			<Route path="/rick-power/charInfo/:id" component={CharInfo} />
			<Route component={Error} exact />
		</Switch>
		<footer>
			<Footer />
		</footer>
	</>
);

export default App;
