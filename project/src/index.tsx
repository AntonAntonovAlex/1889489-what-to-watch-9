import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {films} from './mocks/films';
import { store } from './store';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={Setting.TITLE} genre={Setting.GENRE} year={Setting.YEAR}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
