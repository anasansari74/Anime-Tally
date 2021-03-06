import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useStore from "../../store";

const FavouritesCardDiv = styled.div`
  display: grid;
  grid-auto-flow: row;

  place-items: center;

  grid-gap: 0.5rem;

  padding: 1rem;

  height: 350px;
  width: 180;

  &:hover {
    box-shadow: 10px 5px 5px silver;

    cursor: pointer;
  }

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 150px;
  }
`;

export default function favouritesCard({ show }) {
  const history = useHistory();
  const removeFromFav = useStore(store => store.removeFromFav);

  const handleClick = id => {
    history.push(`/anime/${id}`);
  };
  return (
    <FavouritesCardDiv>
      <p className="no-wrap" onClick={() => handleClick(show.mal_id)}>
        <strong>{show.name}</strong>
      </p>
      <img
        src={show.image_url}
        alt={`Image for ${show.name}`}
        height="250px"
        width="180px"
        onClick={() => handleClick(show.mal_id)}
      />
      <button className="button" onClick={() => removeFromFav(show)}>
        Remove from favourites
      </button>
    </FavouritesCardDiv>
  );
}
