import React from "react";
import styled from "styled-components";

const MainInfoDiv = styled.div`
  display: grid;
  grid-auto-flow: row;

  place-items: center;

  .main-info {
    display: grid;
    grid-template-columns: auto 1fr;

    width: 100%;

    place-items: center;
  }

  .main-img {
    padding-right: 2rem;
  }

  .main-top {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  .bio {
    padding: 1rem 0;
    margin: 1rem 0;
  }

  .set-status {
    display: grid;
    grid-auto-flow: column;

    grid-gap: 1rem;

    place-items: center;
  }
  .button {
    padding: 1rem;

    border: 1px solid black;
    border-radius: 2rem;

    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }
`;

export default function MainInfo({ selectedAnime }) {
  return (
    <MainInfoDiv className="main">
      <div className="main-info">
        <img
          className="main-img"
          src={selectedAnime.image_url}
          alt={`Image for: ${selectedAnime.title}`}
        />
        <div>
          <div className="main-top">
            <h1>{selectedAnime.title}</h1>
            <div></div>
            <button className="button">Add To favourites</button>
          </div>
          <h3>{`(${selectedAnime.title_japanese})`}</h3>
          <ul>
            <strong>Genre: </strong>
            {selectedAnime.genres?.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
          <div className="set-status">
            <h3>Set Status:</h3>
            <button className="button">Plant to watch</button>
            <button className="button">Currently watching</button>
            <button className="button">Completed</button>
            <button className="button">Dropped</button>
          </div>
        </div>
      </div>
      <div className="bio">
        <strong>Synopsis</strong>
        <p>{selectedAnime.synopsis}</p>
      </div>
    </MainInfoDiv>
  );
}
