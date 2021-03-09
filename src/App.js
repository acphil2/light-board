import React from 'react';
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import Lightbulb from './Components/Lightbulb/Lightbulb';
import Palette from './Components/Palette/Palette';
import ColorChoices from './Components/ColorChoices/ColorChoices';
import './App.css';

//Lite-Brite App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="App">
        <Header></Header>
        <Grid>   
          {Array.from(Array(426), (e, i) => {
            return <Lightbulb key={i}/>
          })}
        </Grid>
        <Palette>
          <ColorChoices style={{backgroundColor: '#e65353', boxShadow: '4px 2px 1px #B84242'}}/>
          <ColorChoices style={{backgroundColor: '#f2914b', boxShadow: '4px 2px 1px #C2743C'}}/>
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
}

export default App;

