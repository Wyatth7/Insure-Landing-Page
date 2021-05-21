import React from "react";
import styled from "styled-components";
import { MoreInfoBG } from "../bg-patterns/bg-patterns";
import Button from "../Button/Button";

const MORE_INFO = styled.div`
  position: relative;
  background-color: hsl(256, 26%, 20%);
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 5rem;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-weight: 400;

  span {
    line-height: 3rem;
  }
`;

const MoreInfo = (props) => {
  return (
    <MORE_INFO>
      <MoreInfoBG />
      <Content>
        <Header>
          <span>Find out more</span>
          <span>about how we work</span>
        </Header>
        <Button
          border="#ffffff"
          textColor="#ffffff"
          textHover="hsl(256, 26%, 20%)"
          backgroundColor="transparent"
          backgroundHover="#ffffff"
        >
          how we work
        </Button>
      </Content>
    </MORE_INFO>
  );
};

export default MoreInfo;
