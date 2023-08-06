import './App.css';
import "./Styles/revealAnimation.scss";
//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Bases/NavigationBar/NavBar';
import Index from './components/Pages/Index/Index';
import About from './components/Pages/about/about';
import Commands from './components/Pages/Commands/Commands';
import Support from './components/Pages/support/support';
import Dashboard from './components/Pages/dashboard/dashboard';
import FooterBar from './components/Bases/FooterBar';
import NotFound from './components/Pages/NotFound/NotFound';
import ScrollUp from './components/Bases/ScrollUp/ScrollUp';
import windowOnScroll from "./Functions/windowOnScroll";
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		windowOnScroll();
	}, []);

	return (
		<div className = "index-page">
			<Router>
				<Routes>
					<Route exact path = "/" element = {
						<>
						<NavBar/>
						<ScrollUp/>
						<Index/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/about" element = {
						<>
						<NavBar/>
						<ScrollUp/>
						<About/>
						<FooterBar/>
						</>
					}>
					</Route>
					<Route path = "/commands" element = {
						<>
						<NavBar/>
						<ScrollUp/>
						<Commands/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/support" element = {
						<>
						<NavBar/>
						<ScrollUp/>
						<Support/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/dashboard" element = {
						<>
						<NavBar/>
						<ScrollUp/>
						<Dashboard/>
						<FooterBar/>
						</>
					}></Route>
					<Route path="*" element={
						<>
						<ScrollUp/>
						<NotFound/>
						</>
					} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
