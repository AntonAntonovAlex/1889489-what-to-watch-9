import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';


export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;
export const getAvatarUrl = (state: State): string => state[NameSpace.Data].avatarUrl;
export const getFilm = (state: State): Film | null => state[NameSpace.Data].film;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
export const getReviews = (state: State): Reviews[] => state[NameSpace.Data].reviews;
export const getUserFilms = (state: State): Film[] => state[NameSpace.Data].userfilms;
