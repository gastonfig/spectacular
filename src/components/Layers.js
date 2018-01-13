import React from "react";
import styled from "styled-components";

import Animation from "./Animation"

const Layers = ({layers, totalTime}) => (
  layers.map((layer, layerKey) => (
    <Layer key={layerKey}>
      {
        layer.animations.map((animation, animationKey) => (
          <Animation
            key={animationKey}
            animation={animation}
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
`;

export default Layers;
