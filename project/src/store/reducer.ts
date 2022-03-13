import {createReducer} from '@reduxjs/toolkit';
import { STEP_COUNT } from '../const';
import { films } from '../mocks/films';
import { changeGenre, getListFilms, incrementCountFilms, resetState } from './action';

const initialFilms = films;

const initialState = {
  genre: 'All genres',
  films: initialFilms,
  countFilms: STEP_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getListFilms, (state) => {
      state.films = initialFilms;
    })
    .addCase(incrementCountFilms, (state) => {
      state.countFilms = state.countFilms + STEP_COUNT;
    })
    .addCase(resetState, (state) => {
      state.genre = 'All genres';
      state.countFilms = STEP_COUNT;
    });
});

export {reducer};
