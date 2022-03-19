import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film } from '../types/film';
import { FilmData } from '../types/film-data';

export const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

export const getListFilms = createAction('getListFilms');

export const incrementCountFilms = createAction('incrementCountFilms');

export const resetState = createAction('resetState');

export const loadFilms = createAction<Film[]>('loadFilms');

export const loadPromoFilm = createAction<Film>('loadPromoFilm');

export const loadFilm = createAction<FilmData | null>('loadFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setAvatarUrl = createAction<string>('setAvatarUrl');

export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');
