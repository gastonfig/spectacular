import React from 'react';
import styled from 'styled-components';

import Layers from './Layers';
import Grid from './Grid';
import Button from './form/Button';

import { colors } from '../constants/colors';
import add from '../svg/add-white.svg';

const Timeline = ({
  layers,
  isEntryOpen,
  removeLayer,
  times,
  toggleEntry,
  totalTime
}) => (
  <Container>
    <Grid times={times} />
    <TimelineStyled>
      <Layers layers={layers} removeLayer={removeLayer} totalTime={totalTime} />
    </TimelineStyled>
    {!isEntryOpen && (
      <AddButton alt="Add layer" onClick={toggleEntry} iconSrc={add} />
    )}
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const TimelineStyled = styled.div`
  padding: 20px 0;
`;

const AddButton = styled(Button)`
  background: ${colors.RED};
  border-radius: 50%;
  top: 0;
  display: flex;
  justify-content: center;
  height: 40px;
  left: -50px;
  opacity: 0.5;
  position: absolute;
  transform: translateZ(0);
  transition: all 250ms ease-in-out;
  width: 40px;

  img {
    height: 62.5%;
    width: 62.5%;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2) translateZ(0);
  }
`;

export default Timeline;
