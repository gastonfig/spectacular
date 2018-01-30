import React from "react";
import styled from "styled-components";

import { fontFamilies } from '../constants/fonts';

const Animation = ({animation, color, delay, name, width}) => (
  <Container color={ color } delay={ delay } width={ width }>
    <AnimationName color={ color }>{name}</AnimationName>
    <AnimationStyled color={ color }/>
    <Values>
      <span>{ animation.startValue }</span>
      <span>{ animation.easing }</span>
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
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  width: calc(100% + 6px);

  .layer:hover & {
    opacity: 0.6;
  }
`;

const Container = styled.div`
  ${ props => props.color && `color: ${props.color};` }
  ${ fontFamilies.robotoMono }
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
  ${ props => props.color && `background: ${props.color};` }
  display: flex;
  height: 3px;
  position: relative;

  &:before,
  &:after {
    content: '';
    ${ props => props.color && `background: ${props.color};` }
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
  ${ props => props.color && `background: ${props.color};` }
  color: #fff;
  display: inline-block;
  font-size: 14px;
  padding: 8px 10px;
`;

export default Animation;
