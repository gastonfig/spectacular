import React from "react";
import styled from "styled-components";

import Layers from "./Layers";
import Grid from "./Grid";
import Button from "./form/Button";

import add from '../svg/add.svg';

const Timeline = ({
  layers,
  isEntryOpen,
  removeLayer,
  times,
  toggleEntry,
  totalTime
}) => (
  <Container>
    <Grid times={times}/>
    <TimelineStyled>
      <Layers layers={layers} removeLayer={removeLayer} totalTime={totalTime}/>
    </TimelineStyled>
    {
      !isEntryOpen &&
      <ButtonStyled alt="Add layer" onClick={ toggleEntry } iconSrc={ add } />
    }
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const TimelineStyled = styled.div`
  padding: 20px 0;
`;

const ButtonStyled = styled(Button)`
  left: -25px;
  position: absolute;
`;

export default Timeline;
