import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

export const getListFilms = createAction('getListFilms');

export const incrementCountFilms = createAction('incrementCountFilms');

export const resetState = createAction('resetState');
