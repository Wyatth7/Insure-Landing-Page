import React from "react";
import styled from "styled-components";

const BUTTON = styled.button`
  cursor: pointer;
  outline: none;
  padding: 0.7rem 1.5rem;
  color: ${(props) => props.textColor};
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.border};
  font-family: "Karla", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.2s;
  text-transform: uppercase;
  font-size: 0.8rem;
  z-index: 500;

  &:hover {
    background: ${(props) => props.backgroundHover};
    color: ${(props) => props.textHover};
  }
`;

const Button = (props) => {
  return (
    <BUTTON
      backgroundColor={props.backgroundColor}
      border={props.border}
      backgroundHover={props.backgroundHover}
      textHover={props.textHover}
      textColor={props.textColor}
    >
      {props.children}
    </BUTTON>
  );
};

export default Button;
