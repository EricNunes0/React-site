import './App.css';
//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Bases/NavBar';
import Index from './components/Pages/Index/Index';
import About from './components/Pages/about/about';
import Commands from './components/Pages/Commands/Commands';
import Support from './components/Pages/support/support';
import FooterBar from './components/Bases/FooterBar';

function App() {
	return (
		<div className = "index-page">
			<NavBar/>
			<Router>
				<Routes>
					<Route path = "/" element = {<Index/>}></Route>
					<Route path = "/about" element = {<About/>}></Route>
					<Route path = "/Commands" element = {<Commands/>}></Route>
					<Route path = "/support" element = {<Support/>}></Route>
				</Routes>
			</Router>
			<FooterBar/>
		</div>
	);
}

export default App;
