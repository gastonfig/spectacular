import React from 'react';
import styled from 'styled-components';

import { transparentize } from 'polished';

import { graphColors } from '../constants/colors';

import Animation from './Animation';
import Button from './form/Button';

import clear from '../svg/clear.svg';

const Layers = ({ layers, removeLayer, totalTime }) =>
  layers.map((layer, layerKey) => (
    <Layer className="layer" color={graphColors[layerKey]} key={layerKey}>
      <ButtonStyled
        alt="Remove layer"
        onClick={() => removeLayer(layerKey)}
        iconSrc={clear}
      />
      {layer.animations.map((animation, animationKey) => (
        <Animation
          key={animationKey}
          animation={animation}
          color={graphColors[layerKey]}
          delay={animation.delay / totalTime * 100}
          name={layer.name}
          width={animation.duration / totalTime * 100}
        />
      ))}
    </Layer>
  ));

const Layer = styled.div`
  display: flex;
  padding: 28px 0;
  position: relative;
  transition: background 150ms ease-in-out;

  &:hover {
    ${props =>
      props.color && `background: ${transparentize(0.95, props.color)};`};
  }
`;

const ButtonStyled = styled(Button)`
  left: -25px;
  opacity: 0;
  position: absolute;
  top: 23px;
  transition: opacity 250ms ease-in-out;

  .layer:hover & {
    opacity: 1;
  }
`;

export default Layers;
