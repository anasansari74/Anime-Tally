import React from "react";
import styled from "styled-components";
import FavouritesCard from "../components/FavouritesComps/FavouritesCard";
import useStore from "../store";

const FavouritesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));

  grid-gap: 0.5rem;

  justify-items: center;
`;

export default function FavouritesPage() {
  const favourites = useStore(store => store.favourites);

  return (
    <FavouritesDiv>
      {favourites.length ? (
        <>
          {favourites.map((show, index) => (
            <FavouritesCard show={show} key={index} />
          ))}
        </>
      ) : (
        <h3>You currently have no show(s) set as your fovourites!</h3>
      )}
    </FavouritesDiv>
  );
}
