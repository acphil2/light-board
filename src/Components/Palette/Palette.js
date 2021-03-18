import React from 'react';
import './Palette.css';

const Palette = (props) => {
    return (
        <div className='palette' onClick={props.onClick}>
            {props.children}
        </div>
    );
};
 
export default Palette;