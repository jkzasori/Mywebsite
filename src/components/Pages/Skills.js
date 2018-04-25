import React, {Component} from 'react';
import SorTable from '../SorTable/SorTable';
import {arrayMove} from 'react-sortable-hoc';
import './Skills.css';

class Skills extends Component {
	state = {
    LPYLD: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'Jquery', 'Bootstrap', 'Materialize', 'Foundation', 'React.js', 'ReactNative'],
    BD: ['MongoDB', 'SQL', 'MySQL', 'FireBase'],
    PS: ['Comunicación', 'Trabajo en Equipo', 'Creatividad', 'Dedicación']
  };
  
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      LPYLD: arrayMove(this.state.LPYLD, oldIndex, newIndex),
    });
  };
  onSortEndB = ({oldIndex, newIndex}) => {
    this.setState({
      BD: arrayMove(this.state.BD, oldIndex, newIndex),
    });
  };
  onSortEndC = ({oldIndex, newIndex}) => {
    this.setState({
      PS: arrayMove(this.state.PS, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <div className="Section">
        <div className="subTitle">
          <h2>Skills</h2>
        </div>
    		<div >
          <div className="ShadowBox Section">
            <div className="subText"> Lenguajes y librerías</div>
            <SorTable items={this.state.LPYLD} onSortEnd={this.onSortEnd} />
          </div>
    			<div className="ShadowBox Section">
            <div className="subText"> Base de Datos</div>
          <SorTable items={this.state.BD} onSortEnd={this.onSortEndB} />
          </div>
    			<div className="ShadowBox Section">
            <div className="subText"> Pesonales</div>
          <SorTable items={this.state.PS} onSortEnd={this.onSortEndC} />
          </div>
    		</div>
      </div>
    		);
  }
}

export default Skills;