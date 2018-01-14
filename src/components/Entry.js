import React, { Component } from 'react';
import styled from "styled-components";

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layerName: '',
      layerDuration: '',
      layerDelay: '',
      layerStartVal: '',
      layerEndVal: '',
      layerEasing: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getLayerObj() {
    const {
      layerName,
      layerDuration,
      layerDelay,
      layerStartVal,
      layerEndVal,
      layerEasing,
    } = this.state;

    const newLayer = {
      "name": layerName,
      "animations": [
        {
          "duration": layerDuration,
          "delay": layerDelay,
          "startValue": layerStartVal,
          "endValue": layerEndVal,
          "easing": layerEasing
        }
      ]
    };
    
    return newLayer;
  }
  
  render() {
    return (
      <EntryForm>
        New Layer
        <Input
          label="Name"
          name="layerName"
          value={this.state.layerName}
          onChange={this.handleInputChange}
        />
        Animations
        <Input
          label="Duration"
          name="layerDuration"
          value={this.state.layerDuration}
          onChange={this.handleInputChange}
        />
        <Input
          label="Delay"
          name="layerDelay"
          value={this.state.layerDelay}
          onChange={this.handleInputChange}
        />
        <Input
          label="Start value"
          name="layerStartVal"
          value={this.state.layerStartVal}
          onChange={this.handleInputChange}
        />
        <Input
          label="End value"
          name="layerEndVal"
          value={this.state.layerEndVal}
          onChange={this.handleInputChange}
        />
        <Input
          label="Easing"
          name="layerEasing"
          value={this.state.layerEasing}
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.props.addLayer(this.getLayerObj())}>Done</button>
      </EntryForm>
    )
  }
};

const Input = ({label, name, onChange, value}) => (
  <Label>
    {label}:
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange} />
  </Label>
);

const Label = styled.label`
  display: block;
`;

const EntryForm = styled.div`
`;

export default Entry;
