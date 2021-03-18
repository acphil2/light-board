import React from 'react';
import Lightbulb from '../Lightbulb/Lightbulb';
import { v4 as uuidv4 } from 'uuid';
import './Grid.css';

const Grid = (props) => {
	const data = new Array(426).fill().map((index) => ({ id: index}));

  	return (
    <div className='grid'> 
    	{data.map(((item) => (
            <Lightbulb 
            	key= {uuidv4()}
              color={props.color} 
          	/>
        )))}
    </div>
  );
};
 
export default Grid;