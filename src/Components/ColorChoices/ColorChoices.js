import React from 'react';
import './ColorChoices.css';

const ColorChoices = (props) => {
	return (
	    <div className='color-choice' style={props.style} onClick={props.onClick}>
	   	</div>
  	);
};

export default ColorChoices;

