export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
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

export const GenreType = new Map([
  ['AllGenres', 'All genres'],
  ['Comedy', 'Comedies'],
  ['Crime', 'Crime'],
  ['Documentary', 'Documentary'],
  ['Drama', 'Dramas'],
  ['Horror', 'Horror'],
  ['KidsFamily', 'Kids & Family'],
  ['Romance', 'Romance'],
  ['SciFi', 'Sci-Fi'],
  ['Thriller', 'Thrillers'],
  ['Adventure', 'Adventure'],
  ['Action', 'Action'],
]);

export const STEP_COUNT = 4;
