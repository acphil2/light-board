import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='header'>
    {props.state}
    	<h1>LITE-BRITE</h1>
    </div>
  );
};
 
export default Header;