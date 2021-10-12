import React from "react";
import styled from "styled-components";
import AnimeList from "../components/MainPageComps/AnimeList";
import SearchByName from "../components/MainPageComps/SearchByName";

const MainPageDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  grid-gap: 1rem;
`;

export default function MainPage() {
  return (
    <MainPageDiv>
      <SearchByName />
      <AnimeList />
    </MainPageDiv>
  );
}
