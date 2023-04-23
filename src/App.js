import React, { Component } from 'react';
import Board from './Component/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1 className="shadow" style={{paddingTop:"5%",color:"blue"}} > Treasure Hunt Game </h1>
          <Board />
        <h2> Developed by Kandadi Sai Teja </h2><footer></footer>  
      </div>
    );
  }
}

export default App;
