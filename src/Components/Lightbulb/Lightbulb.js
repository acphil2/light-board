import React, { Component } from 'react';
import './Lightbulb.css';

class Lightbulb extends Component{
	constructor(props){
        super(props);
        this.state = {
            isClicked: false,
        };
    }

    lightSwitch(){
        let condition = this.state.isClicked; 
        this.setState({isClicked: !condition});
    }
  
	render(){
		return (
		    <div onClick={this.lightSwitch.bind(this)} 
                {...this.props}
		        className={`lightbulb ${this.state.isClicked ? this.props.lightbulbcolor : 'lightbulbDefault'}`}
              >
		   	</div>
  		);
  	}
}

export default Lightbulb;
