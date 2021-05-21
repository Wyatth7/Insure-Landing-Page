import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";

const NAV = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 15rem;
  background-color: #ffffff;
  width: 100%;
  z-index: 1000;

  @media (max-width: 1180px) {
    padding: 1.2rem 10rem;
  }

  @media (max-width: 1060px) {
    padding: 1.2rem 5rem;
  }

  @media (max-width: 920px) {
    padding: 1.2rem 2rem;
  }
`;

const LINKS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = (props) => {
  return (
    <NAV>
      <Logo />
      <LINKS>
        <NavLinks>how we work</NavLinks>
        <NavLinks>blog</NavLinks>
        <NavLinks>account</NavLinks>
        <Button
          backgroundColor="#ffffff"
          border="hsl(256, 26%, 20%)"
          backgroundHover="hsl(256, 26%, 20%)"
          textHover="#ffffff"
        >
          view plans
        </Button>
      </LINKS>
    </NAV>
  );
};

export default Nav;
