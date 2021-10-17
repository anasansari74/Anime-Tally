import React from "react";
import styled from "styled-components";
import useStore from "../../store";

const SearchByNameDiv = styled.div`
  display: grid;

  margin: 1rem auto;
`;

export default function SearchByName() {
  const fetchSearch = useStore(store => store.fetchSearch);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.search.value;

    if (name === "") {
      return;
    } else {
      fetchSearch(name);
    }

    e.target.search.value = "";
  };

  return (
    <SearchByNameDiv>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          name="search"
          type="search"
          placeholder="Search for a show..."
        ></input>
        <button>Submit</button>
      </form>
    </SearchByNameDiv>
  );
}
