import React, { useEffect } from "react";
import styled from "styled-components";
import { NavMobile } from "../bg-patterns/bg-patterns";
import Button from "../Button/Button";
import NavLinks from "../Nav/NavLinks/NavLinks";

const MODAL = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(270, 9%, 17%);
  z-index: 5000;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: max-content;
  padding: 2rem;

  align-items: center;

  a {
    text-align: center;
    padding-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: hsl(0, 0%, 98%);
  }

  button {
    font-size: 1.5rem;
  }
`;

const Modal = (props) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    return () => (document.querySelector("body").style.overflow = "visible");
  });

  return (
    <MODAL>
      <NavMobile />
      <Links>
        <NavLinks>how we work</NavLinks>
        <NavLinks>blog</NavLinks>
        <NavLinks>account</NavLinks>
        <Button
          backgroundColor="transparent"
          border="hsl(0, 0%, 98%)"
          backgroundHover="hsl(0, 0%, 98%)"
          textColor="#ffffff"
        >
          view plans
        </Button>
      </Links>
    </MODAL>
  );
};

export default Modal;
