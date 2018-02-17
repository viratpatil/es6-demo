import React, { Component } from 'react';
import './App.css';
import {readObjectValues} from './features/destructuring';
import {usingLet} from './features/scoping';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={readObjectValues}>Read Object</button>
        <button onClick={usingLet}>Check Scopoing</button>
      </div>
    );
  }
}

export default App;
