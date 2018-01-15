import React from 'react';
import styled from "styled-components";

const Input = ({
  label,
  name,
  onChange,
  value
}) => (
  <Label>
    {label}:
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange} />
  </Label>
);

const Label = styled.label`
  display: block;
`;

export default Input;
