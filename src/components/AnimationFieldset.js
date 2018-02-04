import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './form/Button';
import Input from './form/Input';

import { fontFamilies } from '../constants/fonts';

import clear from '../svg/clear.svg';

class AnimationFieldset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      delay: '',
      startValue: '',
      endValue: '',
      easing: ''
    };

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
      <Fieldset>
        <InputStyled
          className="fieldsetInput"
          label="1000"
          name="duration"
          value={this.state.duration}
          onChange={this.handleInputChange}
        />
        <InputStyled
          className="fieldsetInput"
          label="250"
          name="delay"
          value={this.state.delay}
          onChange={this.handleInputChange}
        />
        <InputStyled
          className="fieldsetInput"
          label="0px"
          name="startValue"
          value={this.state.startValue}
          onChange={this.handleInputChange}
        />
        <InputStyled
          className="fieldsetInput"
          label="200px"
          name="endValue"
          value={this.state.endValue}
          onChange={this.handleInputChange}
        />
        <InputStyled
          className="fieldsetInput"
          label="Linear"
          name="easing"
          value={this.state.easing}
          onChange={this.handleInputChange}
        />

        {this.props.hasMultipleAnimations && (
          <Button
            alt="Cancel"
            iconSrc={clear}
            onClick={() =>
              this.props.removeAnimation(this.props.animationIndex)
            }
          />
        )}
      </Fieldset>
    );
  }
}

const Fieldset = styled.div`
  border: none;
  display: flex;
  margin: 0;
`;

const InputStyled = styled(Input)`
  input {
    ${fontFamilies.robotoMono};
  }
`;

export default AnimationFieldset;
