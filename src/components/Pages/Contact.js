import React from 'react';
import './Contact.css';
import  * as FontAwesome from 'react-icons/lib/fa';
const Contact = () =>{
	return(
		<div className="Contact">
			<div className="Me">
				<h1>José Támara</h1>
				<h3>System Engineer</h3>
			</div>
			<div className="info">
				<ul>
					<li>
						<span className="contactText"><FontAwesome.FaEnvelope /> jotafu@live.com</span><br/>
					</li>
					<li>
						<span className="contactText"><FontAwesome.FaPhone /> +57 311-355-3692</span><br/>
					</li>
					<li>
						<span className="contactText"><FontAwesome.FaGithub /> https://github.com/jkzasori</span><br/>
					</li>
				</ul>
			</div>
			<div className="Social">
				<span className="radio">
					<FontAwesome.FaLinkedin />
					<FontAwesome.FaGithub />
				</span>
			</div>
		</div>
		)
}

export default Contact;