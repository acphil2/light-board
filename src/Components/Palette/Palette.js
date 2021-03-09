import React from 'react';
import './Palette.css';

const Palette = (props) => {
    return (
        <div className='palette' {...props}>
        	{props.children}
        </div>
    );
};
 
export default Palette;