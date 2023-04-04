import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AppToRender = ReactDOM.createRoot(document.getElementById('inicio'));

AppToRender.render(
	<App />
);

reportWebVitals();
