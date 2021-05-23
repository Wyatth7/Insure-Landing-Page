import React from "react";

import styled from "styled-components";

const HEADERS = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    background-image: ${(props) => props.background};
    padding: 4rem;
  }

  @media (max-width: 590px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 440px) {
    padding: 4rem 0.5rem;
  }

  @media (max-width: 440px) {
    padding: 4rem 0.7rem;
  }
`;

const Line = styled.div`
  width: 12rem;
  height: 1px;
  background: ${(props) => props.line};

  @media (max-width: 780px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 590px) {
    display: none;
  }
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  padding-top: 4rem;
  line-height: 5rem;
  font-weight: 400;
  font-size: 5rem;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;

  @media (max-width: 1420px) {
    font-size: 4rem;
  }

  @media (max-width: 780px) {
    padding: 0;
  }

  @media (max-width: 440px) {
    text-align: center;
    font-size: 3rem;
    line-height: 3rem;
  }

  @media (max-width: 280px) {
    font-size: 2.5rem;
  }
`;

const Content = styled.div``;

const Headers = (props) => {
  return (
    <HEADERS background={props.background} bkColor={props.bkColor}>
      <Line line={props.line} />
      <Header color={props.color}>
        <span>{props.headText1}</span>
        <span>{props.headText2}</span>
      </Header>
      <Content>{props.children}</Content>
    </HEADERS>
  );
};

export default Headers;
