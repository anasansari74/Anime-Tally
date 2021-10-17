import React from "react";
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

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 150px;
  }
`;

export default function favouritesCard({ show }) {
  const removeFromFav = useStore(store => store.removeFromFav);

  return (
    <FavouritesCardDiv>
      <p className="no-wrap">
        <strong>{show.name}</strong>
      </p>
      <img
        src={show.image_url}
        alt={`Image for ${show.name}`}
        height="250px"
        width="180px"
      />
      <button className="button" onClick={() => removeFromFav(show)}>
        Remove from favourites
      </button>
    </FavouritesCardDiv>
  );
}
