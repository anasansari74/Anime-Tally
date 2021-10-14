import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  border-top: 2px solid silver;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <p>&#169; Assignment by Anas</p>
    </FooterDiv>
  );
}
