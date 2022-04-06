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
  userfilms: [],
};

export const filmData = createSlice({
  name: NameSpace.Data,
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
    loadUserFilm: (state, action) => {
      state.userfilms = action.payload;
    },
    changeStatusUserFilm: (state, action) => {
      if (state.film && !action.payload.isPromo) {
        state.film.isFavorite = action.payload.status;
      } else if (state.promoFilm && action.payload.isPromo) {
        state.promoFilm.isFavorite = action.payload.status;
      }
    },
  },
});

export const {loadFilms, loadPromoFilm, loadFilm, setAvatarUrl, loadUserFilm, changeStatusUserFilm} = filmData.actions;
