import React from 'react';
import {Media } from 'react-bootstrap';

const AboutMe = () => {
	return(
			<div >
				<Media>
					<Media.Left>
						  <img width={192} height={192} src="./src/img/profile.jpg" alt="thumbnail" />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							José Támara
						</Media.Heading>
						<p>
							Apasionado del FrontEnd, con conocimientos en el back-End. Orientado hacia las metas, emprendedor, innovador, respetuoso, comunicativo, con buen criterio para la toma de decisiones y perseverante para llevar a cabo actividades laborales tanto a nivel individual como grupal. Joven responsable a nivel de relaciones interpersonales en el ámbito profesional y con compromiso hacia las responsabilidades asignadas.
						</p>
					</Media.Body>
				</Media>
				
	</div>
		)
}

export default AboutMe;