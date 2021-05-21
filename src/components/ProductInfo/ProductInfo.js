import React from "react";

import styled from "styled-components";

const PRODUCT_INFO = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  margin-bottom: 1rem;
`;

const Header = styled.h3`
  font-family: "DM Serif Display", serif;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  margin-bottom: 0.3rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

const ProductInfo = (props) => {
  return (
    <PRODUCT_INFO>
      <Icon>{props.icon}</Icon>
      <Header>{props.header}</Header>
      <Paragraph>{props.text}</Paragraph>
    </PRODUCT_INFO>
  );
};

export default ProductInfo;
