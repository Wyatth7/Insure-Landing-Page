import React from "react";
import styled from "styled-components";

const NAV_LINKS = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  color: hsl(273, 4%, 51%);
  letter-spacing: 1px;
  margin-right: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: hsl(256, 26%, 20%);
  }
`;

const NavLinks = (props) => {
  return <NAV_LINKS>{props.children}</NAV_LINKS>;
};

export default NavLinks;
