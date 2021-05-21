import React from "react";

import styled from "styled-components";

const HEADERS = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 12rem;
  height: 1px;
  background: ${(props) => props.line};
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
`;

const Content = styled.div``;

const Headers = (props) => {
  return (
    <HEADERS>
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
