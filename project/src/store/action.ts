import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

export const getListFilms = createAction('getListFilms');
