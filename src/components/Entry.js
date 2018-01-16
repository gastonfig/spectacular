import React, { Component } from 'react';
import styled from "styled-components";

import Input from './form/Input';
import AnimationFieldset from './AnimationFieldset';
import Button from "./form/Button";

import add from '../svg/add.svg';
import clear from '../svg/clear.svg';
import done from '../svg/done.svg';

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
        <H2>New Layer</H2>
        <Input
          label="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <H3>Animations</H3>
        {
          this.state.animations.map((animation, index) => (
            <AnimationFieldset addAnimation={this.addAnimation} animationIndex={index} key={index}/>
          ))
        } 
        <Button alt="Add another animation" iconSrc={add} onClick={this.addAnotherAnimation} />
        
        <Button alt="Cancel" iconSrc={clear} onClick={this.props.toggleEntry} />
        <Button alt="Done" iconSrc={done} onClick={this.handleAddLayer} />
      </EntryForm>
    )
  }
};

const H2 = styled.h2`
  margin-top: 0;
  `;

const H3 = styled.h3`
  /* margin-top: 0; */
`;

const EntryForm = styled.div`
  background: #f9f9f9;
  padding: 2rem;
`;

export default Entry;
