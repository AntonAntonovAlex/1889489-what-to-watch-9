export {};
/*import {createReducer} from '@reduxjs/toolkit';
import { GenreType, STEP_COUNT } from '../const';
import { Film } from '../types/film';
import { Reviews } from '../types/reviews';
import { changeGenre, incrementCountFilms, resetState } from './action';

type InitalState = {
  genre: string,
  films: Film[],
  countFilms: number,
  //authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  promoFilm: Film | null,
  avatarUrl: string,
  film: Film | null,
  similarFilms: Film[],
  reviews: Reviews[],
}

const initialState: InitalState = {
  genre: GenreType.AllGenres,
  films: [],
  countFilms: STEP_COUNT,
  //authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  promoFilm: null,
  avatarUrl: '',
  film: null,
  similarFilms: [],
  reviews: [],
};

/*const reducer = createReducer(initialState, (builder) => {
  builder
    /*.addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(incrementCountFilms, (state) => {
      state.countFilms = state.countFilms + STEP_COUNT;
    })
    .addCase(resetState, (state) => {
      state.genre = GenreType.AllGenres;
      state.countFilms = STEP_COUNT;
    });
  .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      if (action.payload) {
        state.film = action.payload.film;
        state.similarFilms = action.payload.similarFilms;
        state.reviews = action.payload.reviews;
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    });
});

export {reducer};*/
