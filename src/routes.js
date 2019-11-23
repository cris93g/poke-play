import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Description from './Screens/Description/Description';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Description} exact path="/description/:name" />
	</Switch>
);
