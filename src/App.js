import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav/Nav";
import Headers from "./components/page-content/Headers/Headers";

import familyImg from "./assets/images/image-intro-desktop.jpg";
import Button from "./components/Button/Button";
import { DeskLeft, DeskRight } from "./components/bg-patterns/bg-patterns";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import {
  Lightning,
  Money,
  PeopleFirst,
} from "./components/ProductInfo/Icons/Icons";

const GlobalStyles = createGlobalStyle`
  *::before,
  *,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Karla', sans-serif;
    font-size: 62.5%;
    font-weight: 400;
  }
`;

const APP = styled.div``;

const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 78px 0;
`;

const TopInfo = styled.div`
  background: linear-gradient(hsl(256, 26%, 20%) 70%, #ffffff 30%);
  display: grid;
  grid-template-columns: 49% 50%;
  grid-gap: 1%;
  padding: 7rem 15rem;
`;

const BottomInfo = styled.div`
  padding: 3rem 15rem;
`;

const IconInfoContainer = styled.div`
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: 32% 32% 33%;
  grid-gap: 1rem;
  overflow: hidden;
  width: 100%;
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
`;

const HeaderOneContent = styled.div``;

const HeaderOneParagraph = styled.p`
  margin: 1.7rem 0;
  color: hsl(0, 0%, 98%);
  font-size: 1.1rem;
  line-height: 1.7rem;
  justify-content: right;
  align-items: flex-end;
`;

function App() {
  return (
    <APP>
      <GlobalStyles />
      <Nav />
      <Content>
        <DeskRight />
        <DeskLeft />
        <TopInfo>
          <Headers
            line="hsl(273, 4%, 51%)"
            color="#ffffff"
            headText1="Humanizing"
            headText2="your insurance."
          >
            <HeaderOneContent>
              <HeaderOneParagraph>
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </HeaderOneParagraph>
              <Button
                textHover="hsl(256, 26%, 20%)"
                textColor="#ffffff"
                backgroundColor="hsl(256, 26%, 20%)"
                backgroundHover="#ffffff"
                border="#ffffff"
              >
                View Plans
              </Button>
            </HeaderOneContent>
          </Headers>
          <Picture src={familyImg} alt="family" />
        </TopInfo>
        <BottomInfo>
          <Headers
            line="hsl(273, 4%, 51%)"
            color="hsl(256, 26%, 20%)"
            headText1="We're different"
          >
            <IconInfoContainer>
              <ProductInfo
                icon={<Lightning />}
                header="Snappy Process"
                text="Our application process can be completed in minutes, not hours. Don’t get 
              stuck filling in tedious forms."
              />
              <ProductInfo
                icon={<Money />}
                header="Affordable Prices"
                text="We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible."
              />
              <ProductInfo
                icon={<PeopleFirst />}
                header="People First"
                text="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it."
              />
            </IconInfoContainer>
          </Headers>
        </BottomInfo>
      </Content>
    </APP>
  );
}

export default App;
