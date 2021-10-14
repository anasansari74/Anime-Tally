import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const StatusPageDiv = styled.div``;

export default function StatusPage() {
  let { status } = useParams() as any;

  return (
    <StatusPageDiv>
      <h1>Welcome to the {status} page</h1>
    </StatusPageDiv>
  );
}
