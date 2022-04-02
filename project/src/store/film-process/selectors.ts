import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getGenre = (state: State): string => state[NameSpace.film].genre;
export const loadedFilmsNumber = (state: State): number => state[NameSpace.film].countFilms;
