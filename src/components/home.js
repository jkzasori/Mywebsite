import React, { Component } from 'react';
import Bar from './Bar/Bar';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Studies from './Pages/Studies';
import Contact from './Pages/Contact';

export default class Home extends Component {
	render() {
		return(
			<div>
				<Bar />
				<AboutMe />
				<Skills />
				<Studies />
				<Contact />
			</div>
			)
	}	
}