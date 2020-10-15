import React from 'react';
import {
	Switch,
	Route,
  } from "react-router-dom";
import Navigation from './navigation/Navigation'
import Dashboard from './dashboard/Dashboard'
import Eternal from './components/eternal-blog/Eternal'
import Timeline from './components/timeline/Timeline';
import Footer from './components/footer/Footer'
import './app.css';

function App() {
	return (
		<div className="app">
			<Switch>
				<Route path='/eternal-blogs'>
					<Eternal />
				</Route>
				<Route path='/timeline'>
					<Timeline />
				</Route>
				<Route exact path='/'>
					<Navigation />	
					<Dashboard />
					<Footer />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
