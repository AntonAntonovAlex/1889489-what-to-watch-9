import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';

export const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

export const getListFilms = createAction('getListFilms');

export const incrementCountFilms = createAction('incrementCountFilms');

export const resetState = createAction('resetState');

export const loadFilms = createAction<Film[]>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string>('setError');
