import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';
import './AboutMe.css';
import Contact from './Contact';


const AboutMe = () => {
	return(
			<div className="aboutMe-init">
					<Row className="">
						<Col sm={12} className="aboutMe ShadowBox Section">
							<Col sm={6} md={5} className="">
								<Col sm={12} md={12}>
									<img className="aboutMe-img" src="./src/img/profile1.jpg" alt="thumbnail" />
								</Col>
								<div className="aboutMe-img-up" >
								</div>
							</Col>
							<Col sm={6} md={7} className="aboutMe-contact">
								<div className="profile-img">
									<img className="about-img-movil" src="./src/img/profile1.jpg" alt="thumbnail" />
								</div>								
								<Contact />
							</Col>
						</Col>
						<Col sm={12}  className=" Section ShadowBox aboutMeMore">
							<Col className="aboutMeInfo line">
								<p>
									Apasionado del FrontEnd, con conocimientos en el back-End. Orientado hacia las metas, emprendedor, innovador, respetuoso, comunicativo, con buen criterio para la toma de decisiones y perseverante para llevar a cabo actividades laborales tanto a nivel individual como grupal. Joven responsable a nivel de relaciones interpersonales en el ámbito profesional y con compromiso hacia las responsabilidades asignadas.
								</p>
							</Col>
							<div className="aboutMeInfo about-btn">
								<Button className="About-btn ShadowBox">DOWNLOAD CV</Button>	<Button className="About-btn ShadowBox">CONTACT ME</Button>	
							</div>
							
						</Col>
					</Row>	
	</div>
		)
}

export default AboutMe;