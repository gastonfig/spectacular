import React from "react";
import styled from "styled-components";

const Animation = ({delay, width}) => (
  <AnimationStyled delay={ delay }  width={ width }/>
);

const AnimationStyled = styled.span`
  background: #bbb;
  display: flex;
  height: 2px;
  position: relative;

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
  
  &:before,
  &:after {
    content: '';
    background: #222;
    border-radius: 50%;
    display: block;
    height: 6px;
    position: absolute;
    top: -2px;
    width: 6px;
  }

  &:after {
    right: 0;
  }
`

export default Animation;
