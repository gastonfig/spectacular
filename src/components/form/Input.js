import React from 'react';
import styled from "styled-components";

const Input = ({
  label,
  name,
  onChange,
  value
}) => (
  <Label>
    <span>{label}</span>
    <InputStyled
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={label}
    />
  </Label>
);

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;

  span {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
`;

const InputStyled = styled.input`
  background: none;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 4px;
`;

export default Input;
