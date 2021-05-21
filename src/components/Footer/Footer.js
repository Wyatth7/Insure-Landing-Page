import React from "react";
import styled from "styled-components";
import Logo from "../Nav/Logo/Logo";
import { Facebook, Insta, Pin, Twitter } from "../Socials/Socials";
import FooterContent from "./FooterContent/FooterContent";

const FOOTER = styled.footer`
  padding: 3rem 15rem;
  background-color: hsl(0, 0%, 98%);

  @media (max-width: 1180px) {
    padding: 3rem 10rem;
  }

  @media (max-width: 1060px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 920px) {
    padding: 3rem 2rem;
  }
`;

const Socials = styled.div`
  border-bottom: 1px solid #c7c7ce;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  padding: 2rem 0;
`;

const Footer = (props) => {
  return (
    <FOOTER>
      <Socials>
        <Logo />
        <Links>
          <Facebook />
          <Twitter />
          <Pin />
          <Insta />
        </Links>
      </Socials>
      <Content>
        <FooterContent
          header="Our company"
          links={["How we work", "Why Insure?", "View plans", "Reviews"]}
        />
        <FooterContent
          header="Help me"
          links={["FAQ", "Terms of use", "Privacy policy", "Cookies"]}
        />
        <FooterContent
          header="Contact"
          links={["Sales", "Support", "Live chat"]}
        />
        <FooterContent
          header="Others"
          links={["Careers", "Press", "Licenses"]}
        />
      </Content>
    </FOOTER>
  );
};

export default Footer;
