import React, { useState } from "react";
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import Palette from './Components/Palette/Palette';
import ColorChoices from './Components/ColorChoices/ColorChoices';
import './App.css';

//Lite-Brite App
const App = () => {
	
	const [state, setState] = useState( 'red' );

	function handleClickRed(e) {
		e.preventDefault();
		setState('red');
    }

    function handleClickOrange(e) {
		e.preventDefault();
		setState('orange');
    }

    function handleClickYellow(e) {
		e.preventDefault();
		setState('yellow');
    }

    function handleClickGreen(e) {
		e.preventDefault();
		setState('green');
    }

    function handleClickBlue(e) {
		e.preventDefault();
		setState('blue');
    }

    function handleClickIndigo(e) {
		e.preventDefault();
		setState('indigo');
    }

	function handleClickViolet(e) {
		e.preventDefault();
		setState('violet');
    }

    function handleClickPink(e) {
		e.preventDefault();
		setState('pink');
    }

	return(
	    <div className="App" >
	       	<Header />
	       	<Grid color={state}/>
	        <Palette >
		        <ColorChoices style={{backgroundColor: '#e65353', boxShadow: '4px 2px 1px #B84242'}} onClick={handleClickRed}/>
				<ColorChoices style={{backgroundColor: '#f2914b', boxShadow: '4px 2px 1px #C2743C'}} onClick={handleClickOrange} />
				<ColorChoices style={{backgroundColor: '#ffcb3b', boxShadow: '4px 2px 1px #CCA22F'}} onClick={handleClickYellow} />
		    	<ColorChoices style={{backgroundColor: '#75AA67', boxShadow: '4px 2px 1px #567d4c'}} onClick={handleClickGreen} />
			    <ColorChoices style={{backgroundColor: '#80d3d6', boxShadow: '4px 2px 1px #689bab'}} onClick={handleClickBlue}/>
	     		<ColorChoices style={{backgroundColor: '#598bc9', boxShadow: '4px 2px 1px #3b5f8a'}} onClick={handleClickIndigo} />
				<ColorChoices style={{backgroundColor: '#816799', boxShadow: '4px 2px 1px #5d4573'}} onClick={handleClickViolet} />          
				<ColorChoices style={{backgroundColor: '#e37d9b', boxShadow: '4px 2px 1px #b36079'}} onClick={handleClickPink} />
	        </Palette>
      	</div>
    );
}

export default App;