import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction, fetchUserFilmsAction, loginAction, logoutAction} from './api-actions';
import {requireAuthorization} from './user-process/user-process';
import {APIRoute} from '../const';
import {State} from '../types/state';
import { AuthData } from '../types/auth-data';
import { makeFakeFilm } from '../mocks/mocks';
import { loadFilms, loadPromoFilm, loadUserFilm } from './film-data/film-data';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: 'abc123'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('wtw-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('wtw-token');
  });

  it('should dispatch Load_Films when GET /films', async () => {
    const mockFilms = [makeFakeFilm(), makeFakeFilm()];
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadFilms.toString());
  });

  it('should dispatch Load_PromoFilm when GET /promo', async () => {
    const mockFilm = makeFakeFilm();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoFilmAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadPromoFilm.toString());
  });

  it('should dispatch Load_UserFilm when GET /favorite', async () => {
    const mockFilm = makeFakeFilm();
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchUserFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadUserFilm.toString());
  });

});
