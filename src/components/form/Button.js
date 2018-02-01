import React from "react";
import styled from "styled-components";

const Button = ({
  alt = "",
  className,
  iconSrc,
  onClick,
}) => (
  <ButtonStyled className={ className } iconSrc={ iconSrc } onClick={ onClick }>
    { iconSrc ?
      <img src={ iconSrc } alt={ alt }/>
      : alt
    }
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  padding: 0.5rem 1rem;

  ${ props => props.iconSrc && `
    font-size: 0.5rem;
    padding: 0;

    img {
      height: 15px;
      width: 15px;
    }
  `}
`;

export default Button;
