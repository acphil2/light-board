import React, { Component } from 'react';
import './Lightbulb.css';

class Lightbulb extends Component{
	constructor(){
        super();
        this.state = {
            isClicked: false
        };
    }

    lightSwitch(){
        let condition = this.state.isClicked;
        this.setState({isClicked: !condition});
    }
  
	render(){
		return (
		    <div onClick={this.lightSwitch.bind(this)} 
		    	className={`lightbulb ${this.state.isClicked? 'lightbulbPink' : 'lightbulbDefault'}`}
		    >
		   	</div>
  		);
  	}
}

export default Lightbulb;
