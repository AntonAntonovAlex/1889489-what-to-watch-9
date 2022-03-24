import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';

const initialState: FilmData = {
  films: [],
  isDataLoaded: false,
  promoFilm: null,
  avatarUrl: '',
  film: null,
  similarFilms: [],
  reviews: [],
};

export const filmData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadFilm: (state, action) => {
      if (action.payload) {
        state.film = action.payload.film;
        state.similarFilms = action.payload.similarFilms;
        state.reviews = action.payload.reviews;
      }
    },
    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const {loadFilms, loadPromoFilm, loadFilm, setAvatarUrl} = filmData.actions;
