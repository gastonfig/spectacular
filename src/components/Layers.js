import React from "react";
import styled from "styled-components";

import { colors, graphColors } from '../constants/colors';

import Animation from "./Animation";
import Button from "./form/Button";

import clear from '../svg/clear.svg';

const Layers = ({layers, removeLayer, totalTime}) => (
  layers.map((layer, layerKey) => (
    <Layer key={layerKey}>
      <ButtonStyled alt="Remove layer" onClick={() => removeLayer(layerKey)} iconSrc={clear} />
      {
        layer.animations.map((animation, animationKey) => (
          <Animation
            key={animationKey}
            animation={animation}
            color={graphColors[layerKey]}
            delay={animation.delay / totalTime * 100}
            name={layer.name}
            width={animation.duration / totalTime * 100}
          />
        ))
      }
    </Layer>
  ))
);

const Layer = styled.div`
  display: flex;
  padding: 10px 0;
  position: relative;
`;

const ButtonStyled = styled(Button)`
  left: -25px;
  position: absolute;
  top: 23px;
`;

export default Layers;
