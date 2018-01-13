import React from "react";
import styled from "styled-components";

const times = [
  0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2
];

const TimeRuler = () => (
  <Container>
  {
    times.map((time, key) => (
      <Number key={key}>
        {time}
      </Number>
    ))
  }
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Number = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  &:before {
    background: #999;
    content: '';
    display: block;
    height: 6px;
    margin-bottom: 3px;
    margin-top: -3px;
    width: 1px;
  }
`;

export default TimeRuler;
