import React from "react";
import styled from "styled-components";

const TimeRuler = ({times}) => {
  return (
    <Container>
      {
        times.map((time, key) => (
          <Number key={key} time={time}></Number>
        ))
      }
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Number = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 6px;
  margin-top: -3px;
  width: 1px;
  
  &:before {
    color: #999;
    display: block;
    font-size: 13px;
    margin-top: 10px;
    ${props =>
      props.time && `
        content: '${props.time}';
      `
    };
  }
`;

export default TimeRuler;
