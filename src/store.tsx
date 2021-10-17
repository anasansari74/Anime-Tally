import React from "react";

import create from "zustand";

type MainPageCardType = {
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

type GenreType = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type AnimeType = {
  aired?: {};
  airing?: boolean;
  background?: string;
  broadcast?: string;
  demographics?: [];
  duration?: string;
  ending_themes?: {}[];
  episodes?: number;
  explicit_genres?: [];
  external_links?: {}[];
  favorites?: number;
  genres?: GenreType[];
  image_url?: string;
  licensors?: {}[];
  mal_id?: number;
  members?: number;
  opening_themes?: {}[];
  popularity?: number;
  premiered?: string;
  producers?: {}[];
  rank?: number;
  rating?: string;
  related?: {};
  request_cache_expiry?: number;
  request_cached?: true;
  request_hash?: string;
  score?: number;
  scored_by?: number;
  source?: string;
  status?: string;
  studios?: {}[];
  synopsis?: string;
  themes?: {}[];
  title?: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms?: {}[];
  trailer_url?: string;
  type?: string;
  url?: string;
};

export type StatusDataType = {
  mal_id?: number;
  name?: string;
  image_url?: string;
};

type StoreType = {
  animeList: MainPageCardType[] | [];
  fetchAnime: (param: number) => void;

  fetchSearch: (param: string) => void;

  selectedAnime: AnimeType | {};
  fetchAnimeInfo: (param: number) => void;

  status: string;
  setStatus: (param: string) => void;

  favourites: StatusDataType[] | [];
  setFavourites: (param: StatusDataType) => void;
  removeFromFav: (param: StatusDataType) => void;
};

const pageNumber = 1;

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

  // //Search Feature
  fetchSearch: name => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${name}&page=${pageNumber}`)
      .then(res => res.json())
      .then(data => set({ animeList: data.results }));
  },

  //Anime Page
  selectedAnime: {},

  // // Fetch info for a single anime
  fetchAnimeInfo: animeId => {
    fetch(`https://api.jikan.moe/v3/anime/${animeId}`)
      .then(res => res.json())
      .then(data => set({ selectedAnime: data }));
  },

  //Statuses page
  status: "",
  setStatus: pageToView => {
    set({ status: pageToView });
  },

  //Favourites Page
  favourites: [],
  setFavourites: object => {
    // Does the show already exist
    const showFound = get().favourites.find(
      show => show.mal_id === object.mal_id
    );

    if (showFound === undefined) {
      set({ favourites: [...get().favourites, object] });
    } else {
      // Delete the show from favourites
      get().removeFromFav(object);
    }
  },

  removeFromFav: object => {
    set({
      favourites: get().favourites.filter(
        target => target.mal_id !== object.mal_id
      ),
    });
  },
}));

export default useStore;
