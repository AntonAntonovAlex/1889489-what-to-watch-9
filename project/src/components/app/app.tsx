import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReview from '../add-review/add-review';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import UserList from '../user-list/user-list';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../wtw';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  const filmsState: Film[] = useAppSelector((state) => state.films);
  const [firstFilm] = filmsState;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <UserList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={firstFilm}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.NotFoundScreen}
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
