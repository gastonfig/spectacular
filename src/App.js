import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import TimeRuler from './components/TimeRuler';

import {timelineData} from "./data/timeline-mock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineData: timelineData,
      times: []
    };

    this.getTimes = this.getTimes.bind(this);
  }

  componentWillMount() {
    this.getTimes();
  }

  getTimes() {
    const scaleLength = timelineData.totalTime;
    const tickLength = 500;
    let times = [];
  
    for (var i = 0; i <= scaleLength; i = i+tickLength) {
      times.push((i.toString()));
    }

    this.setState({ times });
  }

  render() {
    const { times, timelineData } = this.state;

    return (
      <div className="App">
        <Timeline
          layers={timelineData.layers}
          times={times}
          totalTime={timelineData.totalTime}
        />
        <TimeRuler data={timelineData.totalTime} times={times}/>
      </div>
    );
  }
}

export default App;
