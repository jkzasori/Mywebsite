import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Interest.css';
import * as FontAwesome from 'react-icons/lib/fa';
import {MdCreate, MdLocalRestaurant} from 'react-icons/lib/md';
const Interest =() =>{
return(
	<div className=" Section">
		<div>
			<div className="subTitle">
				<h2>Interest</h2>
			</div>
			<Row className="ShadowBox">
			<Col sm={12} className="Interest">
				<p>
					Me encanta ver películas, series animadas y escuchar música. Las palabras para mi son mágicas siendo capaces de transportar a mundos fascinantes; por ello, 
					leer novelas, poesías, cuentos, es de vital importancia en mi vida. Además, escribir y crear mis propias historias, son cosas que sencillamente me apasionan. Mi debilidad las pastas ;p </p>
			</Col>
			<Col sm={12}>
				<Col xs={6} sm={4} md={2} className="ILittleBox Green">
					<div className="icon"><FontAwesome.FaMusic /></div>
					<span>Música</span>
				</Col>
				<Col xs={6} sm={4} md={2} className="ILittleBox White">
					<div className="icon"><FontAwesome.FaBook /></div>
					<span>Libros</span>
				</Col>
				<Col xs={6} sm={4} md={2} className="ILittleBox Green">
					<div className="icon"><FontAwesome.FaFilm /></div>
					<span>Películas</span>
				</Col>
				<Col xs={6} sm={4} md={2} className="ILittleBox White">
					<div className="icon"><FontAwesome.FaBicycle /></div>
					<span>Ejercicios</span>
				</Col>
				<Col xs={6} sm={4} md={2} className="ILittleBox Green">
					<div className="icon"><MdCreate /></div>
					<span>Escribir</span>
				</Col>
				<Col xs={6} sm={4} md={2} className="ILittleBox White">
					<div className="icon"><MdLocalRestaurant /></div>
					<span>Pastas</span>
				</Col>
			</Col>
		</Row>
		</div>

	</div>
	)
}
export default Interest;