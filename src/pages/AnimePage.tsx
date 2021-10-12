import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const AnimePageDiv = styled.div``;

export default function AnimePage() {
  let { animeId } = useParams<number>();
  return (
    <AnimePageDiv>
      {animeId ? <h1>Here is your selected anime!</h1> : "Loading..."}
    </AnimePageDiv>
  );
}
