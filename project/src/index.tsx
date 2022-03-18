import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {films} from './mocks/films';
import { store } from './store';
import { checkAuthAction, fetchFilmAction } from './store/api-actions';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        title={Setting.TITLE} genre={Setting.GENRE} year={Setting.YEAR}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
