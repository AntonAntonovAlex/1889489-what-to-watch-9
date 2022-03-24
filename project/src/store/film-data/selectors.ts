import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';


export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getFilms = (state: State): Film[] => state[NameSpace.data].films;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.data].promoFilm;
export const getAvatarUrl = (state: State): string => state[NameSpace.data].avatarUrl;
export const getFilm = (state: State): Film | null => state[NameSpace.data].film;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.data].similarFilms;
export const getReviews = (state: State): Reviews[] => state[NameSpace.data].reviews;
