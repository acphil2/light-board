import React from 'react';
import Lightbulb from '../Lightbulb/Lightbulb';
import './Grid.css';

const Grid = (props) => {
	const data = new Array(650).fill().map((index) => ({ id: index}));

  	return (
    <div className='grid'> 
    	{data.map(((item, index) => (
            <Lightbulb 
              color={props.color}
              key={index}
          	/>
        )))}
    </div>
  );
};
 
export default Grid;