import React from 'react';
import styled from 'styled-components';

const Input = ({ className, label, name, onChange, value }) => (
  <Label className={className}>
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

  span {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

const InputStyled = styled.input`
  background: none;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-right: 4px;
  padding: 9px 0;
  width: 80px;
  outline: none;

  ${props =>
    props.value === '' &&
    `
    background: #f5f5f5;
    border-color: transparent;
    &:focus {
      background: none;
      border-color: #ddd;
    }
  `} &::placeholder {
    opacity: 0.45;
  }
`;

export default Input;
