import { Film } from './film';
import { Reviews } from './reviews';

export type FilmData = {
  film: Film | null,
  similarFilms: Film[],
  reviews: Reviews[]
};
