import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Interest =() =>{
return(
	<div className="ShadowBox Section">
		<Row>
			<Col sm={12}>
				<p>
			Casi siempre estoy escuchando música. Me encanta ver películas y series animadas, 
			leer novelas, poesía, cuentos y también me gusta escribir y crear mis propias historias.Mi debilidad las pastas ;p </p>
			</Col>
			<Col sm={12}>
				<Col xs={6} sm={4} md={2}>
				Música
				</Col>
				<Col xs={6} sm={4} md={2}>
				Libros
				</Col>
				<Col xs={6} sm={4} md={2}>
				Películas
				</Col>
				<Col xs={6} sm={4} md={2}>
				Ejercicios
				</Col>
				<Col xs={6} sm={4} md={2}>
				Escribir
				</Col>
				<Col xs={6} sm={4} md={2}>
				Pastas
				</Col>
			</Col>
		</Row>

	</div>
	)
}
export default Interest;