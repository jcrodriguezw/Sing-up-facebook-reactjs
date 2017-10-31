import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Registry from './components/Registry'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registry />
      </div>
    );
  }
}

export default App;
