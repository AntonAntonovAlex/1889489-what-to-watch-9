import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus, GenreType, STEP_COUNT } from '../const';
import { Film } from '../types/films';
//import { films } from '../mocks/films';
import { changeGenre, incrementCountFilms, loadFilms, requireAuthorization, resetState, setError } from './action';

//const initialFilms = films;

type InitalState = {
  genre: string,
  films: Film[],
  countFilms: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
}

const initialState: InitalState = {
  genre: GenreType.AllGenres,
  films: [],
  countFilms: STEP_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(incrementCountFilms, (state) => {
      state.countFilms = state.countFilms + STEP_COUNT;
    })
    .addCase(resetState, (state) => {
      state.genre = GenreType.AllGenres;
      state.countFilms = STEP_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
