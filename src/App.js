import React, { Component } from 'react';
import './App.css';

import Entry from './components/Entry';
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

    this.addLayer = this.addLayer.bind(this);
    this.getTimes = this.getTimes.bind(this);
    this.removeLayer = this.removeLayer.bind(this);
  }

  componentWillMount() {
    this.getTimes();
  }

  addLayer(newLayer) {
    const { timelineData } = this.state;
    const layers = timelineData.layers;
    const newLayersObj = {"layers": [...layers, newLayer]};
    const newTimelineData = Object.assign(this.state.timelineData, newLayersObj);

    this.setState({timelineData: newTimelineData});
  }

  // Remove layer
  removeLayer(layerIndex) {
    const { timelineData } = this.state;
    const newLayers = [...timelineData.layers];
    newLayers.splice(layerIndex, 1);
    const newLayersObj = {"layers": newLayers};
    const newTimelineData = Object.assign(this.state.timelineData, newLayersObj);

    this.setState({timelineData: newTimelineData});
  }
  
  // Update layer
  // uddateLayer({layer}) {
  //  ...
  // }

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
        <Entry addLayer={this.addLayer}/>        
        <Timeline
          layers={timelineData.layers}
          removeLayer={this.removeLayer}
          times={times}
          totalTime={timelineData.totalTime}
        />
        <TimeRuler data={timelineData.totalTime} times={times}/>
      </div>
    );
  }
}

export default App;
