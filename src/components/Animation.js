import React from "react";
import styled from "styled-components";

const Animation = ({animation, delay, name, width}) => (
  <Container delay={ delay } width={ width }>
    <AnimationName>{name}</AnimationName>
    <AnimationStyled />
    <Values>
      <span>{ animation.startValue }</span>
      <span>{ animation.endValue }</span>
    </Values>
  </Container>
);

const Values = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  margin-left: -3px;
  margin-top: 4px;
  width: calc(100% + 6px);
`;

const Container = styled.div`
  position: relative;
  text-align: center;  
  
  ${props =>
    props.delay && `
    margin-left: ${props.delay}%;
    `
  };
  
  ${props =>
    props.width && `
    width: ${props.width}%;
    `
  };
  `;

const AnimationStyled = styled.span`
  background: #bbb;
  display: flex;
  height: 3px;
  position: relative;
  
  &:before,
  &:after {
    content: '';
    background: #222;
    border-radius: 50%;
    display: block;
    height: 9px;
    position: absolute;
    top: -2.75px;
    width: 9px;
  }

  &:before {
    left: -4px;
  }
  &:after {
    right: -4px;
  }
`

const AnimationName = styled.span`
  font-size: 14px;
`;

export default Animation;
