import React from "react";
import styled from "styled-components";

import { CenteredMarker } from './Common';

const TimeRuler = ({times}) => {
  return (
    <Container>
      {
        times.map((time, key) => (
          <CenteredMarker key={key} text={time}></CenteredMarker>
        ))
      }
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TimeRuler;
