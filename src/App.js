import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home/Home';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
function App() {
	return <HashRouter>{routes}</HashRouter>;
}

export default App;
