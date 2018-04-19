import React, {Component} from 'react';
import SorTable from '../SorTable/SorTable';
import {arrayMove} from 'react-sortable-hoc';

class Skills extends Component {
	state = {
    LPYLD: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'Jquery', 'Bootstrap', 'Materialize', 'Foundation', 'React.js', 'ReactNative'],
    BD: ['MongoDB', 'SQL', 'MySQL', 'FireBase']
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
  render() {
    return (
      <div className="Section">
        <div className="subTitle">
          <h2>Skills</h2>
        </div>
    		<div >
          <div className="ShadowBox Section">
            <SorTable items={this.state.LPYLD} onSortEnd={this.onSortEnd} />
          </div>
    			<div className="ShadowBox Section">
            jose
          <SorTable items={this.state.BD} onSortEnd={this.onSortEndB} />
          </div>
    			
    		</div>
      </div>
    		);
  }
}

export default Skills;