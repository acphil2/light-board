
import React, { useState } from 'react';
import './Lightbulb.css';

const Lightbulb = (props) => {

  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
     setActive(!isActive);
     console.log(props.color)
  };

  return (
    <div 
      className={`lightbulb ${isActive ? null : `lightbulb${props.color}`}`}
      onClick={handleToggle}
    ></div>
  );  
}

export default Lightbulb;