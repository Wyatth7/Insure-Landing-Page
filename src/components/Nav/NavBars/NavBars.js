import React from "react";
import styled from "styled-components";

const NAV_BARS = styled.svg`
  cursor: pointer;
  display: none;

  @media (max-width: 780px) {
    display: block;
  }
`;

const NavBars = (props) => {
  return (
    <NAV_BARS xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFF"
          stroke="#2C2830"
          strokeWidth="1.5"
          d="M.75.75h30.5v30.5H.75z"
        />
        <g fill="#2C2830">
          <path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" />
        </g>
      </g>
    </NAV_BARS>
  );
};

export default NavBars;
