import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  .logo {
    text-decoration: none;
    color: initial;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <h3>
        <Link to="/" className="logo">
          AniT
        </Link>
      </h3>
    </HeaderDiv>
  );
}
