import React from "react";
import styled from "styled-components";

import Layers from "./Layers"
import Grid from "./Grid"

const Timeline = ({layers, removeLayer, times, totalTime}) => (
  <Container>
    <Grid times={times}/>
    <TimelineStyled>
      <Layers layers={layers} removeLayer={removeLayer} totalTime={totalTime}/>
    </TimelineStyled>
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const TimelineStyled = styled.div`
  background: #f9f9f9;
  padding: 20px 0;
`;

export default Timeline;
