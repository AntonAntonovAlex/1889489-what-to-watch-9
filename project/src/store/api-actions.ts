import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Film } from '../types/film';
import { ReviewData } from '../types/review-data';
import { Reviews } from '../types/reviews';
import { StatusFilmData } from '../types/status-film-data';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { changeStatusUserFilm, loadFilm, loadFilms, loadPromoFilm, loadUserFilm, setAvatarUrl } from './film-data/film-data';
import { requireAuthorization } from './user-process/user-process';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.js';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data: film} = await api.get<Film>(`${APIRoute.Films}/${id}`);
      const {data: similarFilms} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      const {data: reviews} = await api.get<Reviews[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadFilm({film, similarFilms, reviews}));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {avatarUrl}} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAvatarUrl(avatarUrl));
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAvatarUrl(avatarUrl));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'review',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    try {
      await api.post<UserData>(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(redirectToRoute(`${APIRoute.Films}/${id}`));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchUserFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchUserFilms',
  async (_arg, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Favorite);
      dispatch(loadUserFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const changeStatusFilmAction = createAsyncThunk<void, StatusFilmData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'changeStatusFilm',
  async ({status, id, isPromo}, {dispatch, extra: api}) => {
    try {
      await api.post<UserData>(`${APIRoute.Favorite}/${id}/${status}`);
      dispatch(changeStatusUserFilm({status: Boolean(status), isPromo}));
    } catch (error) {
      errorHandle(error);
    }
  },
);
