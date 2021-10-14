import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useStore from "../../store";

const MovieListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

  grid-gap: 0.5rem;

  .card {
    display: grid;
    grid-auto-flow: row;

    place-items: center;

    width: 100%;

    padding-top: 0.5rem;
  }

  .card: hover {
    box-shadow: 10px 5px 5px silver;

    cursor: pointer;
  }

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 150px;
  }
`;

export default function AnimeList() {
  const history = useHistory();

  const animeList = useStore(store => store.animeList);
  const fetchAnime = useStore(store => store.fetchAnime);

  const handleClick = (animeId: number) => {
    history.push(`/anime/${animeId}`);
  };

  const pageNumber = 1;

  useEffect(() => {
    fetchAnime(pageNumber);
  }, [fetchAnime, pageNumber]);

  return (
    <MovieListDiv>
      {animeList.length ? (
        <>
          {animeList.map((anime, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleClick(anime.mal_id)}
            >
              <img
                src={anime.image_url}
                alt={anime.title}
                height="250px"
                width="180px"
              />
              <p className="no-wrap">
                <strong>{anime.title}</strong>
              </p>
            </div>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </MovieListDiv>
  );
}
