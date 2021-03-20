import React, { useState } from "react";
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import Palette from './Components/Palette/Palette';
import ColorChoices from './Components/ColorChoices/ColorChoices';
import './App.css';

//Lite-Brite App
const App = () => {
	
	const [state, setState] = useState( 'pink' );
	function handleClick(e) {
		e.preventDefault();
		setState('orange');
		console.log('clicks');
    }

	return(
	    <div className="App" >
	       	<Header />
	       	<Grid color={state}/>
	        <Palette >
		        <ColorChoices style={{backgroundColor: '#e65353', boxShadow: '4px 2px 1px #B84242'}}/>
				<ColorChoices style={{backgroundColor: '#f2914b', boxShadow: '4px 2px 1px #C2743C'}} onClick={handleClick}/>
				<ColorChoices style={{backgroundColor: '#ffcb3b', boxShadow: '4px 2px 1px #CCA22F'}}/>
		    	<ColorChoices style={{backgroundColor: '#75AA67', boxShadow: '4px 2px 1px #567d4c'}}/>
			    <ColorChoices style={{backgroundColor: '#80d3d6', boxShadow: '4px 2px 1px #689bab'}}/>
	     		<ColorChoices style={{backgroundColor: '#598bc9', boxShadow: '4px 2px 1px #3b5f8a'}}/>
				<ColorChoices style={{backgroundColor: '#816799', boxShadow: '4px 2px 1px #5d4573'}}/>          
				<ColorChoices style={{backgroundColor: '#e37d9b', boxShadow: '4px 2px 1px #b36079'}}/>
	        </Palette>
      	</div>
    );
}

export default App;
