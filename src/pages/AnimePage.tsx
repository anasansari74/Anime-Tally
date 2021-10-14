import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import MainInfo from "../components/AnimePageComps/MainInfo";
import useStore from "../store";

const AnimePageDiv = styled.div``;

export default function AnimePage() {
  let { animeId } = useParams() as any;

  const selectedAnime = useStore(store => store.selectedAnime);
  const fetchAnimeInfo = useStore(store => store.fetchAnimeInfo);

  console.log(selectedAnime);

  useEffect(() => {
    fetchAnimeInfo(animeId);
  }, [fetchAnimeInfo, animeId]);

  return (
    <AnimePageDiv>
      {selectedAnime ? (
        <MainInfo selectedAnime={selectedAnime} />
      ) : (
        "Loading..."
      )}
    </AnimePageDiv>
  );
}
