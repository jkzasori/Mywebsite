import React from 'react';
import {Panel} from 'react-bootstrap';
import './Studies.css';

const Studies = () => {
	return(
		<div className="Section">
			<div className="subTitle">
				<h2>ESTUDIES</h2>
			</div>
			<div className="  timeline">
				<div className="boxContainer left ">
					<div className="box  ShadowBox">
					<h2>2018</h2>
	      				<p>Ingeniero de Sistemas<br/>
						Universidad de Cartagena<br/>
						(Estudios académicamente finalizados)</p>
					</div>
				</div>
				<div className="boxContainer right">
					<div className="box  ShadowBox">
					<h2>2010</h2>
					<p>
						Bachiller Académico<br/>
						Institución Educativa Felipe Santiago Escobar<br/>
						Turbaco – Bolivar
					</p>
					</div>
				</div>
				<div className="boxContainer left">
					<div className="box ShadowBox">
						<h2>2004</h2>
						<p>
						Estudios Escolares<br/>
						Institución Educativa Felipe Santiago Escobar<br/>
						Turbaco – Bolivar
						</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Studies;