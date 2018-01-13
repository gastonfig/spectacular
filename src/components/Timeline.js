import React from "react";
import styled from "styled-components";

import Animation from "./Animation"

const Timeline = () => (
  <TimelineStyled>
    <Layer>
      <Animation width={30}/>
      <Animation width={10} delay={10}/>
    </Layer>
    <Layer>
      <Animation width={40}/>
    </Layer>    
  </TimelineStyled>
);

const TimelineStyled = styled.div`
  background: #eee;
  padding: 20px 0;
`;

const Layer = styled.div`
  display: flex;
  padding: 10px 0;
`;

export default Timeline;