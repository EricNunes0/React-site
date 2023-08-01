import './App.css';
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

function App() {
	return (
		<div className = "index-page">
			<Router>
				<Routes>
					<Route exact path = "/" element = {
						<>
						<NavBar/>
						<Index/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/about" element = {
						<>
						<NavBar/>
						<About/>
						<FooterBar/>
						</>
					}>
					</Route>
					<Route path = "/commands" element = {
						<>
						<NavBar/>
						<Commands/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/support" element = {
						<>
						<NavBar/>
						<Support/>
						<FooterBar/>
						</>
					}></Route>
					<Route path = "/dashboard" element = {
						<>
						<NavBar/>
						<Dashboard/>
						<FooterBar/>
						</>
					}></Route>
					<Route path="*" element={
						<NotFound/>
					} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
