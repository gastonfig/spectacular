import React, { Component } from 'react';

import Input from './form/Input';

class AnimationFieldset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      delay: '',
      startValue: '',
      endValue: '',
      easing: ''
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

    this.props.addAnimation(this.state, this.props.animationIndex);
  }

  render() {
    return (
      <fieldset>
        <Input
          label="Duration"
          name="duration"
          value={ this.state.duration }
          onChange={ this.handleInputChange }
        />
        <Input
          label="Delay"
          name="delay"
          value={ this.state.delay }
          onChange={ this.handleInputChange }
        />
        <Input
          label="Start value"
          name="startValue"
          value={ this.state.startValue }
          onChange={ this.handleInputChange }
        />
        <Input
          label="End value"
          name="endValue"
          value={ this.state.endValue }
          onChange={ this.handleInputChange }
        />
        <Input
          label="Easing"
          name="easing"
          value={ this.state.easing }
          onChange={ this.handleInputChange }
        />
      </fieldset>
    )
  }
};

export default AnimationFieldset;
