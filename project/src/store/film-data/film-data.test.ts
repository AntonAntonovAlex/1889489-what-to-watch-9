import { makeFakeAvatarUrl, makeFakeFilm, makeFakeReviews } from '../../mocks/mocks';
import { changeStatusUserFilm, filmData, loadFilm, loadFilms, loadPromoFilm, loadUserFilm, setAvatarUrl } from './film-data';

const films = [makeFakeFilm(), makeFakeFilm()];
const film = makeFakeFilm();
const reviews = makeFakeReviews();
const avatarUrl = makeFakeAvatarUrl();

describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: null,
        avatarUrl: '',
        film: null,
        similarFilms: [],
        reviews: [],
        userfilms: []});
  });

  it('should update films by load films', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: null,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, loadFilms(films)))
      .toEqual({
        films: films,
        isDataLoaded: true,
        promoFilm: null,
        avatarUrl: '',
        film: null,
        similarFilms: [],
        reviews: [],
        userfilms: []});
  });

  it('should update promoFilm by load promoFilm', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: null,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, loadPromoFilm(film)))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: film,
        avatarUrl: '',
        film: null,
        similarFilms: [],
        reviews: [],
        userfilms: []});
  });

  it('should update avatarUrl by load avatarUrl', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: null,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, setAvatarUrl(avatarUrl)))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: null,
        avatarUrl: avatarUrl,
        film: null,
        similarFilms: [],
        reviews: [],
        userfilms: []});
  });

  it('should update film by load film', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: null,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, loadFilm({film, films, reviews})))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: null,
        avatarUrl: avatarUrl,
        film: film,
        similarFilms: films,
        reviews: reviews,
        userfilms: []});
  });

  it('should change status film', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: film,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, changeStatusUserFilm({status: true, isPromo: true})))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: null,
        avatarUrl: '',
        film: film,
        similarFilms: [],
        reviews: [],
        userfilms: []});
  });

  it('should update userfilms by load userfilms', () => {
    const state = {
      films: [],
      isDataLoaded: false,
      promoFilm: null,
      avatarUrl: '',
      film: null,
      similarFilms: [],
      reviews: [],
      userfilms: []};
    expect(filmData.reducer(state, loadUserFilm(films)))
      .toEqual({
        films: [],
        isDataLoaded: false,
        promoFilm: null,
        avatarUrl: '',
        film: null,
        similarFilms: [],
        reviews: [],
        userfilms: films});
  });
});
