import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { Film } from '../types/film';
import { ReviewData } from '../types/review-data';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';
import { loadFilm, loadFilms, loadPromoFilm, redirectToRoute, requireAuthorization, setAvatarUrl } from './action';

export const fetchFilmsAction = createAsyncThunk(
  'fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk(
  'fetchFilm',
  async (id: number) => {
    try {
      const {data: film} = await api.get<Film>(`${APIRoute.Films}/${id}`);
      const {data: similarFilms} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      const {data: reviews} = await api.get<Reviews[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadFilm({film, similarFilms, reviews}));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try {
      const {data: {avatarUrl}} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setAvatarUrl(avatarUrl));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setAvatarUrl(avatarUrl));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk(
  'review',
  async ({comment, rating, id}: ReviewData) => {
    try {
      await api.post<UserData>(`${APIRoute.Comments}/${id}`, {comment, rating});
      store.dispatch(redirectToRoute(`${APIRoute.Films}/${id}`));
    } catch (error) {
      errorHandle(error);
    }
  },
);
