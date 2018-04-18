import React from 'react';
import {Panel} from 'react-bootstrap';
const Studies = () => {
	return(
		<div className="ShadowBox Section">
			
			<Panel>
				<Panel.Heading>
					Universitarios:
				</Panel.Heading>
				<Panel.Body>
					Ingeniero de sistemas de la
					Universidad de Cartagena
					(Estudios académicamente finalizados)
				</Panel.Body>
			</Panel>
			<Panel>
				<Panel.Heading>Estudios Secundarios:
				</Panel.Heading>
				<Panel.Body>
					Institución Educativa Felipe Santiago Escobar
					Bachiller académico
					Turbaco – Bolivar
					2010
				</Panel.Body>
			</Panel>
			<Panel>
				<Panel.Heading>Estudios Primarios:
				</Panel.Heading>
				<Panel.Body>
					Institución Educativa Felipe Santiago Escobar
					Turbaco – Bolivar
					2004
				</Panel.Body>
			</Panel>
		</div>
		)
}

export default Studies;