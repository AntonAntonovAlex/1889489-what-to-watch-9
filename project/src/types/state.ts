//import {store} from '../store/index.js';

import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Film } from './film';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type FilmData = {
  films: Film[],
  isDataLoaded: boolean,
  promoFilm: Film | null,
  avatarUrl: string,
  film: Film | null,
  similarFilms: Film[],
  reviews: Reviews[]
};

export type FilmProcess = {
  genre: string,
  countFilms: number
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
