import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../store";

const HeaderDiv = styled.div`
  display: grid;
  grid-auto-flow: column;

  grid-gap: 1rem;

  background-color: white;

  padding-bottom: 1rem 0;
  margin-bottom: 1rem;

  border-bottom: 2px solid silver;

  .statuses {
    border-right: 2px solid silver;
    border-left: 2px solid silver;
  }

  .center {
    display: grid;
    grid-auto-flow: column;

    place-items: center;
  }

  .logo {
    text-decoration: none;
    color: initial;
  }

  .button {
    cursor: pointer;
  }

  .un-selected {
    padding: 0.5rem;
    margin: 0.5rem;

    border: 1px solid black;
    border-radius: 1rem;
  }
`;

export default function Header() {
  const history = useHistory();
  const setStatus = useStore(store => store.setStatus);
  return (
    <HeaderDiv>
      <h1 onClick={() => setStatus("")}>
        <Link to="/" className="logo center un-selected">
          AniT
        </Link>
      </h1>
      <div className="center statuses">
        <h3
          className="button un-selected"
          onClick={() => setStatus("Plan to Watch")}
        >
          Plan to Watch
        </h3>
        <h3
          className="button un-selected"
          onClick={() => setStatus("Currently Watching")}
        >
          Currently Watching
        </h3>
        <h3
          className="button un-selected"
          onClick={() => setStatus("Completed")}
        >
          Completed
        </h3>
        <h3 className="button un-selected" onClick={() => setStatus("Dropped")}>
          Dropped
        </h3>
      </div>
      <div className="center favourites">
        <h3
          className="button un-selected"
          onClick={() => history.push("/favorites")}
        >
          Favourites
        </h3>
      </div>
    </HeaderDiv>
  );
}
