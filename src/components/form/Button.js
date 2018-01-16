import React from "react";
import styled from "styled-components";

const Button = ({
  alt = "",
  className,
  iconSrc,
  onClick,
}) => (
  <ButtonStyled className={className} onClick={ onClick }><img src={ iconSrc } alt={ alt }/></ButtonStyled>
);

const ButtonStyled = styled.button`
  background: none;
  border: none;
  font-size: 0.5rem;
  padding: 0;

  img {
    height: 15px;
    width: 15px;
  }
`;

export default Button;
