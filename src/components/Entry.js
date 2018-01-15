import React, { Component } from 'react';
import styled from "styled-components";

import Input from './form/Input';
import AnimationFieldset from './AnimationFieldset';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      animations: [{}],
    }

    this.addAnimation = this.addAnimation.bind(this);
    this.addAnotherAnimation = this.addAnotherAnimation.bind(this);
    this.handleAddLayer = this.handleAddLayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addAnimation(animationData, animationIndex = 0) {
    const animations = [...this.state.animations];
    animations[animationIndex] = animationData;
    this.setState({ animations });
  }

  addAnotherAnimation() {
    const animations = [...this.state.animations, {}];
    this.setState({ animations });
  }

  handleAddLayer() {
    this.props.addLayer(this.state);
    this.props.toggleEntry();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <EntryForm>
        New Layer
        <Input
          label="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          baba={'elbaba'}
        />
        Animations        
        {
          this.state.animations.map((animation, index) => (
            <AnimationFieldset addAnimation={this.addAnimation} animationIndex={index} key={index}/>
          ))
        } 
        <button onClick={this.addAnotherAnimation}>+</button>
        <button onClick={this.handleAddLayer}>Done</button>
      </EntryForm>
    )
  }
};

const EntryForm = styled.div`
`;

export default Entry;
