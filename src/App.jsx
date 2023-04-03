import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Bases/NavBar';
import Index from './components/Pages/Index/Index';
import Commands from './components/Pages/Commands/Commands';
import Support from './components/Pages/support/support';
import FooterBar from './components/Bases/FooterBar';
import DataAnimeLoad from './Functions/DataAnime'
import InteractionMenu from './Functions/InteractionMenu';
import api from './Api';

function App() {

	//const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		/*api.get('login').then(res => {
			console.log(res)
		});*/
		DataAnimeLoad();
	}, []);

	return (
		<div className = "index-page">
			<NavBar/>
			<Router>
				<Routes>
					<Route path = "/" element = {<Index/>}></Route>
					<Route path = "/Commands" element = {<Commands/>}></Route>
					<Route path = "/support" element = {<Support/>}></Route>
				</Routes>
			</Router>
			<FooterBar/>
		</div>
	);
}

export default App;
