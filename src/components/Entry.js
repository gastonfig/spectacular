import React, { Component } from 'react';
import styled from 'styled-components';

import { fontFamilies } from '../constants/fonts';

import Input from './form/Input';
import AnimationFieldset from './AnimationFieldset';
import Button from './form/Button';

import addIcon from '../svg/add.svg';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      animations: [{}]
    };

    this.addAnimation = this.addAnimation.bind(this);
    this.addAnotherAnimation = this.addAnotherAnimation.bind(this);
    this.handleAddLayer = this.handleAddLayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeAnimation = this.removeAnimation.bind(this);
  }

  addAnimation(animationData, animationIndex = 0) {
    const animations = [...this.state.animations];
    animations[animationIndex] = animationData;
    this.setState({ animations });
  }

  removeAnimation(animationIndex) {
    const animations = [...this.state.animations];
    animations.splice(animationIndex, 1);
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
    const { animations, name } = this.state;
    const hasMultipleAnimations = animations.length > 1;

    return (
      <Wrapper>
        <FormContainer>
          <H2>Add new Layer</H2>

          <FlexWrapper>
            <Input
              label="Name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />

            <div>
              {animations.map((animation, index) => (
                <AnimationFieldset
                  addAnimation={this.addAnimation}
                  hasMultipleAnimations={hasMultipleAnimations}
                  key={index}
                  removeAnimation={this.removeAnimation}
                />
              ))}
              <HeaderLabels
                addIcon={addIcon}
                addAnotherAnimation={this.addAnotherAnimation}
              />
            </div>
          </FlexWrapper>

          <ButtonContainer>
            <Button alt="Cancel" onClick={this.props.toggleEntry} />
            <Button alt="Save" onClick={this.handleAddLayer} />
          </ButtonContainer>
        </FormContainer>
      </Wrapper>
    );
  }
}

const HeaderLabels = ({ addIcon, addAnotherAnimation }) => (
  <HeaderContainer>
    <HeaderLabel>Duration</HeaderLabel>
    <HeaderLabel>Delay</HeaderLabel>
    <HeaderLabel>Start Value</HeaderLabel>
    <HeaderLabel>End Value</HeaderLabel>
    <HeaderLabel>Easing</HeaderLabel>
    <Button
      alt="Add another animation"
      iconSrc={addIcon}
      onClick={addAnotherAnimation}
    />
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: ;
`;

const HeaderLabel = styled.span`
  ${fontFamilies.robotoMono} color: #aaa;
  font-size: 10px;
  width: 84px;
`;

const H2 = styled.h2`
  background: #f2f2f2;
  margin: 0 0 10px 0;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
`;

const Wrapper = styled.div`
  &:before {
    background: rgba(0, 0, 0, 0.7);
    content: '';
    display: block;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }
`;

const FormContainer = styled.div`
  background: #fff;
  position: relative;
  width: 540px;
`;

const FlexWrapper = styled.div`
  display: flex;
  padding: 0 2%;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
`;

export default Entry;
