import { Genre } from './types/genre';

export const STEP_COUNT = 8;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;

export const MAX_COUNT_SIMILAR_FILM = 4;

export const TIMER_DELAY = 1000;

export const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export const VIDEO_DELAY = 1000;
export const SPIN_HEIGHT = 80;
export const SPIN_WIDTH = 80;
export const MAX_PLAYER_PROGRESS = 100;
export const MIN_PLAYER_PROGRESS = 0;
export const TIME_MULTIPLIER = 60;

export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFoundScreen = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabType {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export enum FilmTextRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum FilmRating {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export const GenreType: Genre = {
  'AllGenres': 'All genres',
  'Comedy': 'Comedies',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Drama': 'Dramas',
  'Horror': 'Horror',
  'KidsFamily': 'Kids & Family',
  'Romance': 'Romance',
  'SciFi': 'Sci-Fi',
  'Thriller': 'Thrillers',
  'Adventure': 'Adventure',
  'Action': 'Action',
  'Fantasy': 'Fantasy',
};

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER',
}
