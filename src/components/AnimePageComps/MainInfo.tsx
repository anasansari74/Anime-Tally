import React from "react";
import styled from "styled-components";
import useStore from "../../store";

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

  .selected {
    background-color: royalblue;
    color: white;
    border-color: royalblue;
  }
`;

export default function MainInfo({ selectedAnime }) {
  const favourites = useStore(store => store.favourites);
  const setFavourites = useStore(store => store.setFavourites);
  const planToWatch = useStore(store => store.planToWatch);
  const watching = useStore(store => store.watching);
  const completed = useStore(store => store.completed);
  const dropped = useStore(store => store.dropped);
  const setStatusToPlanToWatch = useStore(
    store => store.setStatusToPlanToWatch
  );
  const setStatusToWarching = useStore(store => store.setStatusToWarching);
  const setStatusToCompleted = useStore(store => store.setStatusToCompleted);
  const setStatusToDropped = useStore(store => store.setStatusToDropped);

  const handleFavClick = (id, title, image) => {
    const favObject = {
      mal_id: id,
      name: title,
      image_url: image,
    };

    setFavourites(favObject);
  };

  const handleStatusClick = (status: string) => {
    const statusObject = {
      mal_id: selectedAnime.mal_id,
      name: selectedAnime.title,
      image_url: selectedAnime.image_url,
    };

    if (status === "plantToWatch") {
      setStatusToPlanToWatch(statusObject);
    } else if (status === "watching") {
      setStatusToWarching(statusObject);
    } else if (status === "completed") {
      setStatusToCompleted(statusObject);
    } else {
      setStatusToDropped(statusObject);
    }
  };

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
            <h2>{selectedAnime.title}</h2>
            <div></div>
            <button
              className="button"
              onClick={() =>
                handleFavClick(
                  selectedAnime.mal_id,
                  selectedAnime.title,
                  selectedAnime.image_url
                )
              }
            >
              {favourites.find(show => show.mal_id === selectedAnime.mal_id) ? (
                <strong>Remove from favourites</strong>
              ) : (
                "Add To favourites"
              )}
            </button>
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
            <button
              className={`button ${
                planToWatch.find(show => show.mal_id === selectedAnime.mal_id)
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                handleStatusClick("plantToWatch");
              }}
            >
              Plant to watch
            </button>
            <button
              className={`button ${
                watching.find(show => show.mal_id === selectedAnime.mal_id)
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                handleStatusClick("watching");
              }}
            >
              Currently watching
            </button>
            <button
              className={`button ${
                completed.find(show => show.mal_id === selectedAnime.mal_id)
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                handleStatusClick("completed");
              }}
            >
              Completed
            </button>
            <button
              className={`button ${
                dropped.find(show => show.mal_id === selectedAnime.mal_id)
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                handleStatusClick("dropped");
              }}
            >
              Dropped
            </button>
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
