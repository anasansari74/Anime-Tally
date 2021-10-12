import React from "react";
import styled from "styled-components";

const SearchByNameDiv = styled.div``;

export default function SearchByName() {
  const handleSubmit = e => {
    e.preventDefault();
    e.target.search.reset;
  };

  return (
    <SearchByNameDiv>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="search">Search</label>
        <input name="search" type="text"></input>
        <button>Submit</button>
      </form>
    </SearchByNameDiv>
  );
}
