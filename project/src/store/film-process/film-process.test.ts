import { GenreType, STEP_COUNT } from '../../const';
import { changeGenre, filmProcess, incrementCountFilms, resetState } from './film-process';

describe('Reducer: filmProcess', () => {
  it('should have reset state', () => {
    expect(filmProcess.reducer({genre: GenreType.AllGenres, countFilms: 0}, resetState()))
      .toEqual({genre: GenreType.AllGenres, countFilms: STEP_COUNT});

    expect(filmProcess.reducer({genre: GenreType.Comedy, countFilms: 0}, resetState()))
      .toEqual({genre: GenreType.AllGenres, countFilms: STEP_COUNT});

    expect(filmProcess.reducer({genre: GenreType.Comedy, countFilms: 10}, resetState()))
      .toEqual({genre: GenreType.AllGenres, countFilms: STEP_COUNT});
  });

  it('without additional parameters should return initial state', () => {
    expect(filmProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({genre: GenreType.AllGenres, countFilms: STEP_COUNT});
  });

  it('should increment current count by a given value', () => {
    const state = {genre: GenreType.AllGenres, countFilms: STEP_COUNT};
    expect(filmProcess.reducer(state, incrementCountFilms()))
      .toEqual({genre: GenreType.AllGenres, countFilms: 16});
  });

  it('should change the genre to the given value', () => {
    const state = {genre: GenreType.AllGenres, countFilms: STEP_COUNT};
    expect(filmProcess.reducer(state, changeGenre(GenreType.Comedy)))
      .toEqual({genre: GenreType.Comedy, countFilms: 8});
  });

});
