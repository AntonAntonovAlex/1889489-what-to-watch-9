import { createSlice } from '@reduxjs/toolkit';
import { GenreType, NameSpace, STEP_COUNT } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: GenreType.AllGenres,
  countFilms: STEP_COUNT,
};

export const filmProcess = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    incrementCountFilms: (state) => {
      state.countFilms = state.countFilms + STEP_COUNT;
    },
    resetState: (state) => {
      state.genre = GenreType.AllGenres;
      state.countFilms = STEP_COUNT;
    },
  },
});

export const {changeGenre, incrementCountFilms, resetState} = filmProcess.actions;
