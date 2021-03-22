import React, { useState } from 'react';
import './Lightbulb.css';

const Lightbulb = (props) => {

  const [isActive, setActive] = useState('false');
  const [classColor, setClassColor] = useState('lightbulbred');

  const handleToggle = () => {
    if(props.color==='red'){
      setClassColor('lightbulbred');
    }
    else if(props.color==='orange'){
      setClassColor('lightbulborange');
    }
    else if(props.color==='yellow'){
      setClassColor('lightbulbyellow');
    }
    else if(props.color==='green'){
      setClassColor('lightbulbgreen');
    }
    else if(props.color==='blue'){
      setClassColor('lightbulbblue');
    }
    else if(props.color==='indigo'){
      setClassColor('lightbulbindigo');
    }
    else if(props.color==='violet'){
      setClassColor('lightbulbviolet');
    }
    else if(props.color==='pink'){
      setClassColor('lightbulbpink');
    }
    setActive(!isActive);
  };

  return (
    <div 
      className={`lightbulb ${ isActive ? null : classColor }`}
      onClick={handleToggle}
    ></div>
  );  
}

export default Lightbulb;