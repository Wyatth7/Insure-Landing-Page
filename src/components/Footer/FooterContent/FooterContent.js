import React from "react";
import styled from "styled-components";

const FOOTER_CONTENT = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.p`
  color: #c7c7ce;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled(Header)`
  color: hsl(256, 26%, 20%);
  margin-bottom: 0.2rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: hsl(216, 30%, 68%);
  }
`;

const FooterContent = (props) => {
  return (
    <FOOTER_CONTENT>
      <Header>{props.header}</Header>
      <Links>
        {props.links.map((el) => (
          <Link as="a" href="#" key={Math.random()}>
            {el}
          </Link>
        ))}
      </Links>
    </FOOTER_CONTENT>
  );
};

export default FooterContent;
