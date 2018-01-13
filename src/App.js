import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import TimeRuler from './components/TimeRuler';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
        <TimeRuler />
      </div>
    );
  }
}

export default App;
