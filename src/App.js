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
      isEntryOpen: true,
      timelineData: timelineData,
      times: []
    };

    this.addLayer = this.addLayer.bind(this);
    this.getTimes = this.getTimes.bind(this);
    this.removeLayer = this.removeLayer.bind(this);
    this.toggleEntry = this.toggleEntry.bind(this);
  }

  componentWillMount() {
    this.getTimes();
  }

  addLayer(newLayer) {
    const { timelineData } = this.state;
    const layers = timelineData.layers;
    const newLayersObj = { "layers": [...layers, newLayer] };
    const newTimelineData = Object.assign(this.state.timelineData, newLayersObj);

    this.setState({timelineData: newTimelineData});
  }

  toggleEntry() {
    this.setState({ isEntryOpen: !this.state.isEntryOpen });
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
    const { isEntryOpen, times, timelineData } = this.state;

    return (
      <div className="App">
        <h1>My App's Motion Specs</h1>
        {
          isEntryOpen &&
          <Entry addLayer={this.addLayer} toggleEntry={this.toggleEntry}/>        
        }
        <Timeline
          layers={timelineData.layers}
          isEntryOpen={isEntryOpen}
          removeLayer={this.removeLayer}
          times={times}
          toggleEntry={this.toggleEntry}
          totalTime={timelineData.totalTime}
        />
        <TimeRuler data={timelineData.totalTime} times={times}/>
      </div>
    );
  }
}

export default App;
