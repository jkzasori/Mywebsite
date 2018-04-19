import React, { Component } from 'react';
import './home.css';
import Bar from './Bar/Bar';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Studies from './Pages/Studies';
import Contact from './Pages/Info';
import Footer from './Pages/Footer';
import Interest from './Pages/Interest';
import Header from './Pages/Header';
import Portafolio from './Pages/Portafolio';

export default class Home extends Component {
	render() {
		return(
			<div className="ShadowBox">
				<Header />
				<div className="container ">
					<AboutMe />
					<Studies />
					<Skills />
					<Portafolio />
					<Interest />
					<Footer />
				</div>
			</div>
			)
	}	
}