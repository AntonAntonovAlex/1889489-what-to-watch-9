import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getGenre = (state: State): string => state[NameSpace.Film].genre;
export const loadedFilmsNumber = (state: State): number => state[NameSpace.Film].countFilms;
