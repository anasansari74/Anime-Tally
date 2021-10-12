import React from "react";

import create from "zustand";

type AnimeCardType = {
  airing: boolean;
  end_date: string;
  episodes: number;
  image_url: string;
  mal_id: number;
  members: number;
  rated: string;
  score: number;
  start_date: string;
  synopsis: string;
  title: string;
  type: string;
  url: string;
};

type StoreType = {
  animeList: AnimeCardType[];
  fetchAnime: (param: number) => void;
};

const useStore = create<StoreType>((set, get) => ({
  //Main Page
  animeList: [],

  // //Fetching all anime
  fetchAnime: pageNumber => {
    fetch(
      `https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=${pageNumber}`
    )
      .then(res => res.json())
      .then(data => set({ animeList: data.results }));
  },
}));

export default useStore;
