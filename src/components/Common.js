import React from "react";
import styled from "styled-components";

export const CenteredMarker = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 1px;
  width: 1px;

  &:before {
    color: #999;
    display: block;
    font-size: 13px;
    margin-top: 10px;
    ${props =>
      props.text && `
        content: '${props.text}';
      `
    };
  }
`;
