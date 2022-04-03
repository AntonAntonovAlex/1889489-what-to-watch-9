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
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { isAuthorizationStatusUnknown } from '../../wtw';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getLoadedDataStatus } from '../../store/film-data/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isAuthorizationStatusUnknown(authorizationStatus) || !isDataLoaded) {
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
              authorizationStatus={authorizationStatus} isSignIn={false}
            >
              <UserList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus} isSignIn
            >
              <SignIn/>
            </PrivateRoute>
          }
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
