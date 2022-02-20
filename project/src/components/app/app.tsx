import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../add-review/add-review';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import UserList from '../user-list/user-list';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen title={title} genre={genre} year={year}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
