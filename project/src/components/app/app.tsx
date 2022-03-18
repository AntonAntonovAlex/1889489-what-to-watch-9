import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReview from '../add-review/add-review';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import UserList from '../user-list/user-list';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/films';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../wtw';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  films: Film[];
}

function App({title, genre, year, films}: AppScreenProps): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen title={title} genre={genre} year={year} films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={films} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <UserList films={films}/>
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
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
