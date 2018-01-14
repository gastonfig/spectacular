import React from "react";
import styled from "styled-components";

import Animation from "./Animation"

const Layers = ({layers, removeLayer, totalTime}) => (
  layers.map((layer, layerKey) => (
    <Layer key={layerKey}>
      <Button type="submit" value="Delete" onClick={() => removeLayer(layerKey)}/>
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
  position: relative;
`;

const Button = styled.input`
  font-size: 0.5rem;
  left: -50px;
  position: absolute;
`;

export default Layers;
