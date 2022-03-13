import {createReducer} from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { changeGenre, getListFilms } from './action';

const initialFilms = films;

const initialState = {
  genre: 'All genres',
  films: initialFilms,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      //state.films = state.films.filter((film) => film.genre === action.payload);
    })
    .addCase(getListFilms, (state) => {
      state.films = initialFilms;
    });
});

export {reducer};

//state.films = state.films.filter((film) => film.genre === action.payload);
